import riot from '../../node_modules/riot/riot.esm.js'
import App from '../riot/app.riot'
import RawHtml from '../riot/raw-html.riot'

console.log(App)
console.log(RawHtml)

riot.register('app', App)
riot.register('raw-html', RawHtml)

riot.mount('[data-riot]')

// anime.js サンプル
var animeSample = anime({
  targets: '.js-anime',
  translateX: 240,
  duration: 800,
  direction: 'alternate',
  easing: 'easeInOutExpo',
  loop: true
})
