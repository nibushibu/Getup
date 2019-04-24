import { registerPostprocessor } from '@riotjs/compiler'
import buble from 'buble'

// your compiler output will pass from here
registerPostprocessor(function(code, { options }) {
  const { file } = options
  console.log('your file path is:', file)

  // notice that buble.transform returns {code, map}
  return buble.transform(code)
})

export default {
  output: 'dist/js/tags.js',
  extension: 'html',
  style: 'scss'
}