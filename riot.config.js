var registerPreprocessor = require('@riotjs/compiler').registerPreprocessor
var sass = require('node-sass')

registerPreprocessor('css', 'sass', function(code, { options }) {
  const { file } = options

  console.log('Compile the sass code in', file)

  const css = sass.renderSync({
    data: code
  })

  return {
    code: css,
    map: null
  }
})

module.exports = {
  css: 'sass'
}
