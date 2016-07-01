#!/usr/bin/env node

var assign = require('object-assign-deep');
var exec = require('child_process').exec;
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');

var basePath = path.join(__dirname, '..');

var globalPackageJson = {
  path: './package.json',
  content: require(path.join(basePath, '/package.json'))
};

function getPackagesJson(fileList) {
  var paths = fileList
    .filter(function (p) {
      return path.basename(p) === 'package.json';
    })
    .map(function (p) {
      return p.replace(/\.\//, '');
    });

  return {
    paths: paths,
    contents: paths.reduce(function (target, pkgPath) {
      target[pkgPath] = require(path.join(basePath, pkgPath));
      return target;
    }, {})
  };
}

var packagesJson = getPackagesJson(
  process.argv
    .splice(2, process.argv.length)
);

var globalDependencies = globalPackageJson.content.dependencies || {};
var globalDevDependencies = globalPackageJson.content.devDependencies || {};

function extractGlobalDependencies(pkgName, type, deps, glob, dest) {
  var dest = assign({}, dest);
  Object.keys(deps)
    .forEach(function (depName) {
      var depVer = deps[depName];
      if (!dest.local[pkgName]) {
        dest.local[pkgName] = {};
      }
      if (!dest.local[pkgName][type]) {
        dest.local[pkgName][type] = {};
      }
      if (
        glob[depName] &&
        glob[depName] != depVer
      ) {
        dest.local[pkgName][type][depName] = depVer;
        return;
      }
      dest.global[type][depName] = depVer;
      if (!dest.local[pkgName].link) {
        dest.local[pkgName].link = [];
      }
      dest.local[pkgName].link.push(depName);
    });
  return dest;
}

var resolved = packagesJson.paths
  .reduce(function (dest, pkgName) {
    var pkgContent = packagesJson.contents[pkgName];
    var dependencies = pkgContent.dependencies || {};
    var devDependencies = pkgContent.devDependencies || {};

    dest = extractGlobalDependencies(
      pkgName,
      'dependencies',
      dependencies,
      globalDependencies,
      dest
    );

    dest = extractGlobalDependencies(
      pkgName,
      'devDependencies',
      devDependencies,
      globalDevDependencies,
      dest
    );

    return dest;
  }, {
    global: {
      dependencies: assign({}, globalPackageJson.content.dependencies),
      devDependencies: assign({}, globalPackageJson.content.devDependencies)
    },
    local: {}
  });

var newGlobalPackageJson = assign({}, globalPackageJson);
newGlobalPackageJson.content.dependencies = resolved.global.dependencies;
newGlobalPackageJson.content.devDependencies = resolved.global.devDependencies;

var newPackagesJson = assign({}, packagesJson);
Object.keys(resolved.local)
  .forEach(function (pkgPath) {
    newPackagesJson.contents[pkgPath].dependencies = resolved.local[pkgPath].dependencies;
    newPackagesJson.contents[pkgPath].devDependencies = resolved.local[pkgPath].devDependencies;
  });

fs.writeFileSync(path.join(basePath, newGlobalPackageJson.path), JSON.stringify(newGlobalPackageJson.content));

newPackagesJson.paths.forEach(function (pkgPath) {
  fs.writeFileSync(path.join(basePath, pkgPath), JSON.stringify(newPackagesJson.contents[pkgPath]));
  resolved.local[pkgPath].link.forEach(function (pkgName) {
    mkdirp(path.join(path.dirname(pkgPath), 'node_modules'), function (err) {
      if (err) { return; }
      var installedPkgPath = path.join('node_modules', pkgName);
      exec([
        'ln -s',
        path.join(basePath, installedPkgPath),
        path.join(path.dirname(pkgPath), installedPkgPath)
      ].join(' '));
    });
  });
});
