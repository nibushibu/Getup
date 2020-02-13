const { registerPreprocessor } = require('@riotjs/compiler')
const sass = require('sass')

registerPreprocessor('css', 'scss', function(code, { options }) {
  const { file } = options

  const {css} = sass.renderSync({
    data: code
  })

  // console.log(css.toString())

  return {
    code: css.toString(),
    map: null
  }
})
