requirejs.config({
  'baseUrl': 'js/vendor',
  'paths': {
    'modernizr': 'modernizr/modernizr',
    'jquery': 'jquery/jquery.min',
    'jquery.transit': 'jquery.transit/jquery.transit',
    'jquery.belatedPNG': 'jquery.belatedPNG/js/jquery.belatedPNG.min'
  },
  'shim': {
    'jquery.transit': {
      deps: ['jquery']
    },
    'jquery.belatedPNG': {
      deps: ['jquery']
    }
  }
});

requirejs(['modernizr', 'jquery', 'jquery.transit', 'jquery.belatedPNG']);

define(['jquery', 'jquery.transit'], function($) {});

define(['jquery', 'jquery.belatedPNG'], function($) {
  return $('.fix').fixPng();
});
