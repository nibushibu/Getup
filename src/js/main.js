import

riot.mount('*');
(function ($) {
  $(() => {
    if (!feature.touch) {
      $('a[href^="#"], .js-anchor-scroll').on('click', e => {
        e.preventDefault()
        let headerHeight = 0
        let $target = $(e.currentTarget.attributes.href.value)
        console.log($target)
        let targetOffset = $target.offset().top
        $('html,body').animate({
            scrollTop: targetOffset - headerHeight - 10
          },
          300
        )
      })
    }
  })
})(jQuery)

console.log(`feature.touch = ${feature.touch}`)

// anime.js サンプル
const anime = anime({
  targets: '.js-anime',
  translateX: 250,
  rotate: 360,
  duration: 800,
  direction: 'alternate',
  easing: 'easeInOutExpo',
  loop: true
})