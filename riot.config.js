var registerPreprocessor = require('@riotjs/compiler').registerPreprocessor
var sass = require('node-sass')

registerPreprocessor('css', 'scss', function(code, { options }) {
  const { file } = options

  // console.log('Compile the sass code in', file)

  const css = sass.renderSync({
    data: code
  })

  return {
    code: css.css.toString(),
    map: null
  }
})

module.exports = {
  css: 'scss'
}
