const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const { render } = require('@riotjs/ssr')
const register = require('@riotjs/ssr/register')
const srcDirFromRoot = './src/html/pages'
const srcDirFromFile = '../src/html/pages'
const outputDir = 'dist'
const file = path.join(srcDirFromFile, 'index.riot')

// Riot コンポーネントを require できるように
register()

const Root = require(file).default
const html = render('html', Root)
fs.writeFile('./dist/index.html', html, (err) => {
  if (err) throw err
})