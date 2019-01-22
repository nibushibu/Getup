const concat = require('concat')
const copy = require('copy')

// concat javascript plugins
concat([
  'node_modules/html5-boilerplate/dist/js/plugins.js',
  'node_modules/riot-animore/riot-animore.js',
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/axios/dist/axios.min.js',
  'node_modules/lodash/lodash.min.js',
  'node_modules/aos/dist/aos.js',
], 'src/js/vendors.js')

// copy fonts
copy(
  'node_modules/slick-carousel/slick/fonts/*',
  'dist/css/fonts',
  function (err, files) {
    if (err) throw err
  }
)

// copy images
copy.one(
  'node_modules/slick-carousel/slick/ajax-loader.gif',
  'dist/css/', {
    flatten: true
  },
  function (err, files) {
    if (err) throw err
  }
)