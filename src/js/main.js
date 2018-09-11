import riot from 'riot'
import jQuery from 'jquery'
import feature from 'feature.js'
import mojs from 'mo-js'
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

console.log(("feature.touch = " + (feature.touch)))

// mo.js動作チェック
var mojsAnime = new mojs.Html({
  el: '.js-anime',
  x: {
    0: 250
  },
  angleZ: {
    0: 360
  },
  duration: 800,
  easing: 'expo.out',
  repeat: true,
  isYoyo: true,
  delay: 500,
  onComplete: function onComplete() {
    this.replay()
  }
}).play()
//# sourceMappingURL=main.js.map