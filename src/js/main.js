import * as riot from 'riot'
const jQuery = require('jquery')
const feature = require('feature.js')
import anime from '../../node_modules/animejs/lib/anime.es.js'
import appTag from '../riot/app-tag.riot'
import rawHtml from '../riot/raw-html.riot'

riot.register('app-tag', appTag)
riot.register('raw-html', rawHtml)

riot.mount('[data-riot]')

console.log(`feature.touch = ${feature.touch}`)

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