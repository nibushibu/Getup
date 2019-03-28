riot.mount('*');
(function ($) {
  $(function () {
    if (!feature.touch) {
      $('a[href^="#"], .js-anchor-scroll').on('click', function (e) {
        e.preventDefault()
        var headerHeight = 0
        var $target = $(e.currentTarget.attributes.href.value)
        console.log($target)
        var targetOffset = $target.offset().top
        $('html,body').animate({
            scrollTop: targetOffset - headerHeight - 10
          },
          300
        )
      })
    }
  })
})(jQuery)

console.log(("feature.touch = " + (feature.touch)))

// anime.js サンプル
var animeSample = anime({
  targets: '.js-anime',
  translateX: 240,
  rotate: 360,
  duration: 800,
  direction: 'alternate',
  easing: 'easeInOutExpo',
  loop: true
})
//# sourceMappingURL=main.js.map