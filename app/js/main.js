/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	(function ($) {
	
	  // Easingの追加
	  jQuery.easing.quart = function (x, t, b, c, d) {
	    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	  };
	
	  $(function () {
	
	    // スマホ判定
	    var _ua = function (u) {
	      return {
	        Tablet: u.indexOf('windows') != -1 && u.indexOf('touch') != -1 || u.indexOf('ipad') != -1 || u.indexOf('android') != -1 && u.indexOf('mobile') == -1 || u.indexOf('firefox') != -1 && u.indexOf('tablet') != -1 || u.indexOf('kindle') != -1 || u.indexOf('silk') != -1 || u.indexOf('playbook') != -1,
	        Mobile: u.indexOf('windows') != -1 && u.indexOf('phone') != -1 || u.indexOf('iphone') != -1 || u.indexOf('ipod') != -1 || u.indexOf('android') != -1 && u.indexOf('mobile') != -1 || u.indexOf('firefox') != -1 && u.indexOf('mobile') != -1 || u.indexOf('blackberry') != -1
	      };
	    }(window.navigator.userAgent.toLowerCase());
	
	    // アンカースクロールアニメーション
	    if (!_ua.Mobile || !_ua.Tablet) {
	      $('a[href*="#"]').click(function () {
	        var href = $(this).attr('href');
	        var $target = $(href === '#' || href === '' ? 'html' : href);
	        TweenMax.to(window, 1, { scrollTo: $target.offset().top });
	        return false;
	      });
	    }
	
	    // IE用Fix
	    // if ($('html').hasClass('lt-ie7')) {
	    //   return $('.list-inline > li').addClass('ie-child');
	    // }
	  });
	})(jQuery);

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map