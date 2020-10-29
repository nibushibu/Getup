const fs = require('fs')
const { render } = require('@riotjs/ssr')
const register = require('@riotjs/ssr/register')
const srcDirFromRoot = './src/html'
const srcDirFromFile = '../src/html'
const outpurtDir = 'dist'

register()

const generateHtml = (dir, file) => {
  const Root = require(`${ dir }/${ file }`).default
  const html = render('html', Root)
  const outputFile = file.replace(/riot$/, 'html')
  fs.writeFile(`${outpurtDir}/${outputFile}`, html, (err) => {
    if (err) console.log(err)
  })
  // console.log(html)
}

/**
 * ディレクトリ内の自動的に読み込んで出力
 */
const dirEntry = fs.readdirSync(srcDirFromRoot, { withFileTypes: true })
const fileArray = dirEntry.filter(dirent => dirent.isFile()).map(({ name }) => name)
fileArray.forEach(file => {
  generateHtml(srcDirFromFile, file)
})
