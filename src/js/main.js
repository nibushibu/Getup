import riot from 'riot'
import feature from 'feature.js'
import 'whatwg-fetch'
import Promise from 'promise-polyfill'
import mojs from 'mo-js'
import ScrollMagic from 'scrollmagic'
import slick from 'slick-carousel'
// import p5 from 'p5'

import './tags'
riot.mount('*')

;(function($){

$(() => {

  // アンカースクロールアニメーション
  const anchorScroll = () => {

    function scrollTo(selector, offset, cb) {
      console.log(selector)
      var body = [document.body, document.documentElement]
      var offset = offset || 0
      if(feature.touch){
        offset += 60
      }
      var el = document.querySelector(selector)
      var scrollAnim = anime({
        targets: body,
        scrollTop: el.offsetTop - offset,
        duration: 500,
        easing: 'easeInOutQuart',
        complete: function() { if (cb) cb(); }
      })
    }

    if(!feature.touch){
      $('a[href^="#"], .js-anchor-scroll').on('click', (e) => {
        e.preventDefault()
        var href = $(e.currentTarget).attr('href')
        scrollTo(href)
        return false
      })
    }
  }

  anchorScroll()
})

})(jQuery)

var s = function (sketch) {

  var x = 100
  var y = 100

  sketch.setup = function () {
    sketch.createCanvas(200, 200);
  }

  sketch.draw = function () {
    sketch.background(0)
    sketch.fill(255)
    sketch.rect(x, y, 50, 50)
  }
}

console.log(`feature.touch = ${feature.touch}`)

// mo.js動作チェック
const mojsAnime = new mojs.Html({
  el: '.js-anime',
  x: {0: 250},
  angleZ: {0: 360},
  duration: 800,
  easing: 'expo.out',
  repeat: true,
  isYoyo: true,
  delay: 500,
  onComplete() {
    this.replay()
  }
}).play()