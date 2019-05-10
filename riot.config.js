import {registerPreprocessor} from '@riotjs/compiler'
import sass from 'node-sass'

registerPreprocessor('css', 'scss', function(code, { options }) {
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
