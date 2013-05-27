requirejs.config({
  'baseUrl': 'js/vendor',
  'paths': {
    'modernizr': 'modernizr/modernizr',
    'jquery': 'jquery/jquery.min',
    'jquery.transit': 'jquery.transit/jquery.transit'
  },
  'shim': {
    'jquery.transit': {
      deps: ['jquery']
    }
  }
});

requirejs(['modernizr', 'jquery', 'jquery.transit']);

define(['jquery', 'jquery.transit'], function($) {
  /*jqueryとjquery.transitが読み込み完了したら…*/

});
