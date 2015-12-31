// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

/*
 * resizeHeight
 *
 * Author Genki Katsutani
 * http://nibushibu.com/
 *
 * Licensed under the MIT License
 */

function resizeHeight(){

  var el = $('.js-resize-height');
  var timer = false;

  $(window).resize(function() {

    el.height('auto');

    if (timer !== false) {
      clearTimeout(timer);
    }

    timer = setTimeout(function() {
      resize();
    }, 200);
  });

  function resize(){

    var obj = [];
    var keyArr = [];

    for (var i = el.length - 1; i >= 0; i--) {
      var key = $('.js-resize-height:eq(' + i + ')').data('resize-group');
      var val = $('.js-resize-height:eq(' + i + ')').height();
      if(!obj[key]){
        obj[key] = [];
        keyArr.push(key);
      }
      obj[key].push(val);
    };
    for (var i = keyArr.length - 1; i >= 0; i--) {
      var maxHeight = Math.max.apply(null, obj[keyArr[i]]);
      // console.log(maxHeight);
      $('.js-resize-height[data-resize-group="' + keyArr[i] + '"]').height(maxHeight);
    };
  }

  resize();
}

$(function(){
  resizeHeight();
})
