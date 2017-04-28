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

  // スクロールアニメ
  const scrollTo = (selector) => {
    const speed = 500;
    const target = $(selector === "#index" || selector === "" ? 'html' : selector);
    const position = target.offset().top;
    $("html, body").animate( { scrollTop: position }, speed, "swing");
  }

  // アンカースクロールアニメーション
  if(!_ua.Mobile || !_ua.Tablet){
    $('a[href^="#"]').on('click', (e) => {
      scrollTo( $(e.currentTaret).attr('href') );
    });
  }

});

})(jQuery);
