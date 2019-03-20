const concat = require('concat')
const cpx = require('cpx')

// concat javascript plugins
concat([
  'node_modules/html5-boilerplate/dist/js/plugins.js',
  'node_modules/aos/dist/aos.js',
], 'src/js/vendors.js')

// copy fonts
cpx.copy(
  'node_modules/slick-carousel/slick/fonts/*',
  'dist/css/fonts'
)

// copy images
cpx.copy(
  'node_modules/slick-carousel/slick/ajax-loader.gif',
  'dist/css/'
)