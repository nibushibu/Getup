// import jQuery from "jquery"
// window.$ = window.jQuery = jQuery

// import 'whatwg-fetch'
// import 'feature.js'
// import Promise from 'promise-polyfill'
import Vue from 'vue'
import anime from 'animejs'
// import p5 from 'p5'
// import ScrollMagic from 'scrollmagic'
// import slick from 'slick-carousel'

import MyApp from './my-app.vue'

new Vue ({
  el: '#app',
  components: { MyApp }
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

const sketch = p => {

  setup = () => {
    createCanvas(640, 480)
  }

  draw = () => {
    if (mouseIsPressed) {
      fill(0)
    } else {
      fill(255)
    }
    ellipse(mouseX, mouseY, 80, 80)
  }
}

new p5(sketch)

console.log(`feature.touch = ${feature.touch}`)
