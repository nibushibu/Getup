const fs = require('fs')
const path = require('path')
const { Glob } = require('glob')
const { mkdirp } = require('mkdirp')
const { render } = require('@riotjs/ssr')
const register = require('@riotjs/register')
const srcDirFromRoot = 'src/html/pages'
const outputDir = 'dist'

// Riot コンポーネントを require できるように
register({ exts: ['.html'] })

const files = new Glob(`${srcDirFromRoot}/**/*.riot.html`, {
  withFileTypes: true
})
for (const file of files) {
  const Root = require(`../${srcDirFromRoot}/${file.name}`).default
  const html = render('html', Root)
  const dir = path.join(outputDir, file.name.replace(/riot\.html$/, 'html'))

  mkdirp(path.parse(dir).dir).then(() => {
    fs.writeFile(dir, html, (err) => {
      if (err) throw err
    })
  })
}
