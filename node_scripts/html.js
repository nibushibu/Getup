const fs = require('fs')
const { render } = require('@riotjs/ssr')
const register = require('@riotjs/ssr/register')
const srcDirFromRoot = './src/html'
const srcDirFromFile = '../src/html'

register()

const generateHtml = (dir, file) => {
  const Root = require(`${ dir }/${ file }`).default
  const html = render('html', Root)
  fs.writeFile('dist/root.html', html, (err) => {
    if (err) console.log(err)
  })
  // console.log(html)
}

const dirEntry = fs.readdirSync(srcDirFromRoot, { withFileTypes: true })
const fileArray = dirEntry.filter(dirent => dirent.isFile()).map(({ name }) => name)

fileArray.forEach(file => {
  generateHtml(srcDirFromFile, file)
})
