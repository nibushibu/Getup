const fs = require('fs')
const path = require('path')
const glob = require('glob')
const mkdirp = require('mkdirp')
const { render } = require('@riotjs/ssr')
const register = require('@riotjs/ssr/register')
const srcDirFromRoot = './src/html/pages'
const outputDir = 'dist'

// Riot コンポーネントを require できるように
register({ exts: ['.html'] })

glob(`${srcDirFromRoot}/**/*.riot.html`, (err, files) => {
  if (err) return err
  generateHtml(files)
})

const generateHtml = (files) => {
  files.forEach((file) => {
    const Root = require(`.${file}`).default
    const html = render('html', Root)
    const dir = path.join(
      outputDir,
      file.replace(srcDirFromRoot, '').replace(/riot\.html$/, 'html')
    )

    mkdirp(path.parse(dir).dir).then(() => {
      fs.writeFile(dir, html, (err) => {
        if (err) throw err
      })
    })
  })
}
