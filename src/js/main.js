riot.mount('*')

;(function($){

$(() => {

  if(!feature.touch){
    $('a[href^="#"], .js-anchor-scroll').on('click', e => {
      e.preventDefault()
      let headerHeight = 0
      let $target = $(e.currentTarget.attributes.href.value)
      console.log($target)
      let targetOffset = $target.offset().top
      $("html,body").animate({
        scrollTop: targetOffset - headerHeight - 10
      }, 300)
      return false
    })
  }
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
var myp5 = new p5(s)

console.log(`feature.touch = ${feature.touch}`)

// mo.js動作チェック
const mojsAnime = new mojs.Html({
  el: '.js-anime',
  x: {0: 250},
  angleZ: {0: 360},
  duration: 800,
  easing: 'expo.out',
  repeat: true,
  isYoyo: true,
  delay: 500,
  onComplete() {
    this.replay()
  }
}).play()