requirejs.config
  'baseUrl': 'js/vendor'
  'paths':
    'modernizr': 'modernizr/modernizr'
    'jquery': 'jquery/jquery.min'
    'jquery.transit': 'jquery.transit/jquery.transit'
    'jquery.belatedPNG': 'jquery.belatedPNG/js/jquery.belatedPNG.min.js'
  'shim':
    'jquery.transit':
      deps: ['jquery']
    'jquery.belatedPNG':
      deps: ['jquery']

requirejs ['modernizr', 'jquery', 'jquery.transit']

define ['jquery','jquery.transit'], ($) ->
  #jqueryとjquery.transitの読み込み完了後

define ['jquery','jquery.belatedPNG'], ($) ->
  #jqueryとjquery.belatedPNGの読み込み完了後
  $('.fix').fixPng()
