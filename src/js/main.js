import 'bootstrap'
import Vue from 'vue'
import feature from 'feature.js'
import 'whatwg-fetch'
import Promise from 'promise-polyfill'
import anime from 'animejs'
import ScrollMagic from 'scrollmagic'
import slick from 'slick-carousel'

import App from './app.vue'

new Vue({
  el: '#app',
  components: { App },
  render: h => h(App)
})

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

var myp5 = new p5(s);
console.log(`feature.touch = ${feature.touch}`)