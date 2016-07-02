#!/usr/bin/env node

var assign = require('object-assign');
var fs = require('fs');
var path = require('path');

var basePath = path.join(__dirname, '..');

function getPackagesJson(basePath, fileList) {
  var paths = fileList
    .filter(function (p) {
      return path.basename(p) === 'package.json';
    })
    .map(function (p) {
      return p.replace(/\.\//, '');
    });

  return paths.map(function (pkgPath) {
    return {
      path: pkgPath,
      content: require(path.join(basePath, pkgPath))
    };
  });
}

var globalPackageJson = getPackagesJson(
  basePath,
  ['package.json']
)[0];

var packagesJson = getPackagesJson(
  basePath,
  process.argv.splice(2, process.argv.length)
);

if (!packagesJson.length) {
  throw new Error('You must provide a list of paths to `package.json` files.');
}

function getNewDeps(deps, globDeps) {
  return Object.keys(deps)
    .reduce(function (dest, depName) {
      var depVer = deps[depName];
      if (
        globDeps[depName] &&
        globDeps[depName] != depVer
      ) {
        dest.local[depName] = depVer;
      } else {
        dest.glob[depName] = depVer;
      }
      return dest;
    }, { glob: {}, local: {} });
}

var resolved = packagesJson
  .reduce(function (fin, pkgInfo) {
    var pkgPath = pkgInfo.path;
    var pkgJson = pkgInfo.content;
    var deps = pkgJson.dependencies || {};
    var devDeps = pkgJson.devDependencies || {};

    var newDeps = getNewDeps(deps, fin.glob.deps);
    var newDevDeps = getNewDeps(devDeps, fin.glob.devDeps);
    var newPkgJson = assign({}, pkgJson);
    newPkgJson.dependencies = newDeps.local;
    newPkgJson.devDependencies = newDevDeps.local;

    return {
      glob: {
        deps: assign({}, fin.glob.deps, newDeps.glob),
        devDeps: assign({}, fin.glob.devDeps, newDevDeps.glob)
      },
      local: fin.local.concat([{
        path: pkgPath,
        content: newPkgJson
      }])
    };
  }, {
    glob: {
      deps: assign({}, globalPackageJson.content.dependencies),
      devDeps: assign({},  globalPackageJson.content.devDependencies)
    },
    local: []
  });

// root package.json

var newGlobalPackageJson = assign({}, globalPackageJson);
newGlobalPackageJson.content.dependencies = resolved.glob.deps;
newGlobalPackageJson.content.devDependencies = resolved.glob.devDeps;

fs.writeFile(
  path.join(basePath, newGlobalPackageJson.path),
  JSON.stringify(newGlobalPackageJson.content)
);

// packages/**/package.json

resolved.local.forEach(function (pkgInfo) {
  var pkgPath = pkgInfo.path;
  var pkgJson = pkgInfo.content;

  fs.writeFile(
    path.join(basePath, pkgPath),
    JSON.stringify(pkgJson)
  );
})
