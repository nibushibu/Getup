import { registerPreprocessor } from '@riotjs/compiler'
import sass from 'node-sass'

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

export default {
  output: 'dist/js/tags.js',
  extension: 'html',
  style: 'scss'
}