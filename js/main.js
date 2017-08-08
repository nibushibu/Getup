const $ = require("animejs");

(function($){

// Easingの追加
jQuery.easing.quart = (x, t, b, c, d) => {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};

$(() => {

  // スマホ判定
  var _ua = (function(u){
    return {
      Tablet:(u.indexOf('windows') != -1 && u.indexOf('touch') != -1)
        || u.indexOf('ipad') != -1
        || (u.indexOf('android') != -1 && u.indexOf('mobile') == -1)
        || (u.indexOf('firefox') != -1 && u.indexOf('tablet') != -1)
        || u.indexOf('kindle') != -1
        || u.indexOf('silk') != -1
        || u.indexOf('playbook') != -1,
      Mobile:(u.indexOf('windows') != -1 && u.indexOf('phone') != -1)
        || u.indexOf('iphone') != -1
        || u.indexOf('ipod') != -1
        || (u.indexOf('android') != -1 && u.indexOf('mobile') != -1)
        || (u.indexOf('firefox') != -1 && u.indexOf('mobile') != -1)
        || u.indexOf('blackberry') != -1
    }
  })(window.navigator.userAgent.toLowerCase());

  // アンカースクロールアニメーション
  const anchorScroll = () => {

    function scrollTo(selector, offset, cb) {
      console.log(selector);
      var body = [document.body, document.documentElement];
      var offset = offset || 0;
      if(_ua.Mobile){
        offset += 60;
      }
      var el = document.querySelector(selector);
      var scrollAnim = anime({
        targets: body,
        scrollTop: el.offsetTop - offset,
        duration: 500,
        easing: 'easeInOutQuart',
        complete: function() { if (cb) cb(); }
      });
    }

    if(!_ua.Tablet){
      $('a[href^="#"], .js-anchor-scroll').on('click', (e) => {
        e.preventDefault();
        var href = $(e.currentTarget).attr('href');
        scrollTo(href);
        return false;
      });
    }
  }

  anchorScroll();
});

})(jQuery);
