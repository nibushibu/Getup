import jQuery from "jquery"
window.$ = window.jQuery = jQuery

import 'whatwg-fetch'
import Promise from 'promise-polyfill'
import riot from 'riot'
import anime from 'animejs'
import ScrollMagic from 'scrollmagic'
import slick from 'slick-carousel'
import MobileDetect from 'mobile-detect'

import './app.tag'

// riot.mount('app')

;(function($){

$(() => {

  // スマホ判定
  const md = new MobileDetect(window.navigator.userAgent)

  // アンカースクロールアニメーション
  const anchorScroll = () => {

    function scrollTo(selector, offset, cb) {
      console.log(selector)
      var body = [document.body, document.documentElement]
      var offset = offset || 0
      if(_ua.Mobile){
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

    if(!md.mobile()){
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
