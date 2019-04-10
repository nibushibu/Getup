import * as riot from 'riot'
import * as anime from '../../node_modules/animejs/lib/anime.es.js'
import 'riot-animore'
import _ from 'lodash'
import feature from 'feature.js'
import Promise from 'promise-polyfill'
import ScrollOut from "scroll-out";
import '../riot/app-tag.tag.html'
import '../riot/raw-html.tag.html'

riot.mount('*');

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