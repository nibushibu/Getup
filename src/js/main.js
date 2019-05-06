import App from './app.riot.js'
riot.register('app', App)

import RawHtml from './raw-html.riot.js'
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