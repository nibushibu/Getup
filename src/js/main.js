riot.mount('[data-riot]')

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