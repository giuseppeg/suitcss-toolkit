const dirname = require('path').dirname
const glob = require('glob-promise');
const mkdirp = require('mkdirp-promise')
const read = require('fs-readfile-promise')
const suitcss = require('suitcss-preprocessor')
const write = require('fs-writefile-promise')

async function process(fileName) {
  const src = `src/${fileName}`
  const dest = `dist/${fileName}`
  const content = await read(src)
  const result = await suitcss(
    content,
    { root: dirname(src) },
    src
  )
  await mkdirp(dirname(dest))
  await write(dest, result.css)
}

async function build() {
  const entryFiles = await glob(
    'themes/*/{index,views/*}.css',
    { cwd: 'src' }
  )
  if (entryFiles.length == 0) return
  return Promise.all(entryFiles.map(process))
}

build().catch(e=>{
  console.error(e)
  process.exit(1)
})
