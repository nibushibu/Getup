import riot from 'riot'
import anime from 'animejs'
import 'riot-animore'
import _ from 'lodash'
import feature from 'feature.js'
import Promise from 'promise-polyfill'
import ScrollOut from "scroll-out";
import './tags.js'

riot.mount('*');
(function ($) {
  $(() => {
    if (!feature.touch) {
      $('a[href^="#"], .js-anchor-scroll').on('click', e => {
        e.preventDefault()
        let headerHeight = 0
        let $target = $(e.currentTarget.attributes.href.value)
        console.log($target)
        let targetOffset = $target.offset().top
        $('html,body').animate({
            scrollTop: targetOffset - headerHeight - 10
          },
          300
        )
      })
    }
  })
})(jQuery)

console.log(`feature.touch = ${feature.touch}`)

// anime.js サンプル
const animeSample = anime({
  targets: '.js-anime',
  translateX: 240,
  rotate: 360,
  duration: 800,
  direction: 'alternate',
  easing: 'easeInOutExpo',
  loop: true
})