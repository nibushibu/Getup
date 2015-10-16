// Easingの追加
jQuery.easing.quart = (x, t, b, c, d) => {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};

$(() => {

  // アンカースクロール
  $("a[href*=#]").click(() => {
    var $target, targetOffset;
    if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
      $target = $(this.hash);
      $target = $target.length && $target || $("[name=" + this.hash.slice(1) + "]");
      if ($target.length) {
        targetOffset = $target.offset().top;
        $("html,body").animate({
          scrollTop: targetOffset
        }, 200, "quart");
        return false;
      }
    }
  });

  // IE用Fix
  // if ($("html").hasClass("lt-ie7")) {
  //   return $(".list-inline > li").addClass("ie-child");
  // }
});
