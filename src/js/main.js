import App from './tags.js'
riot.register('app', App)

riot.mount('app')

// anime.js サンプル
var animeSample = anime({
  targets: '.js-anime',
  translateX: 240,
  duration: 800,
  direction: 'alternate',
  easing: 'easeInOutExpo',
  loop: true
})