const fs = require('fs')
const { render } = require('@riotjs/ssr')
const register = require('@riotjs/ssr/register')

register()

const Root = require('../src/html/root.riot').default
const html = render('html', Root)

fs.writeFile('dist/root.html', html, (err) => {
  if (err) console.log(err)
})
