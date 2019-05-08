import App from '../riot/app.riot.html'
import RawHtml from '../riot/raw-html.riot.html'

console.log(App)
console.log(RawHtml)

export default MyComponent

// anime.js サンプル
var animeSample = anime({
  targets: '.js-anime',
  translateX: 240,
  duration: 800,
  direction: 'alternate',
  easing: 'easeInOutExpo',
  loop: true
})