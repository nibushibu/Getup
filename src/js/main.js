import riot from 'riot'
import jQuery from 'jquery'
import feature from 'feature.js'
import './tags.js'

riot.mount('*')

;
(function ($) {

  $(function () {

    if (!feature.touch) {
      $('a[href^="#"], .js-anchor-scroll').on('click', function (e) {
        e.preventDefault()
        var headerHeight = 0
        var $target = $(e.currentTarget.attributes.href.value)
        console.log($target)
        var targetOffset = $target.offset().top
        $("html,body").animate({
          scrollTop: targetOffset - headerHeight - 10
        }, 300)
        return false
      })
    }
  })
})(jQuery)

console.log(`feature.touch = ${feature.touch}`)

// anime.js サンプル
const anime = anime({
  targets: '.js-anime',
  translateX: 250,
  rotate: 360,
  duration: 800,
  direction: 'alternate',
  easing: 'easeInOutExpo',
  loop: true
})