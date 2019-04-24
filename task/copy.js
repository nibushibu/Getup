const concat = require('concat')
const cpx = require('cpx')

// concat javascript plugins
concat([
  'node_modules/html5-boilerplate/dist/js/plugins.js',
  'node_modules/animejs/lib/anime.min.js',
  'node_modules/riot/riot.min.js',
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/axios/dist/axios.min.js',
  'node_modules/feature.js/feature.min.js',
  'node_modules/promise-polyfill/dist/polyfill.min.js',
  'node_modules/slick-carousel/slick/slick.min.js',
  'node_modules/lodash/lodash.min.js',
  'node_modules/scroll-out/dist/scroll-out.min.js',
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