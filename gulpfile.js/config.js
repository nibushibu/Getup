module.exports = {
  /* 特別な定義が不要なタスクの設定 */
  appPath: 'app/',

  iconfont: {
    sketch: 'symbol-font-14px.sketch',
  },

  copy: {
    js: [
      'node_modules/jquery/dist/jquery.min.*',
    ],
    css: [
      'node_modules/normalize.css/normalize.css',
      'node_modules/slick-carousel/slick/slick.scss',
      'node_modules/slick-carousel/slick/slick-theme.scss',
    ],
  },

  concat: {
    js: [
      'js/plugins-base.js',
      'node_modules/gsap/src/minified/TweenMax.min.js',
      'node_modules/gsap/src/minified/TimelineMax.min.js',
      'node_modules/gsap/src/minified/plugins/ScrollToPlugin.min.js',
      'node_modules/slick-carousel/slick/slick.min.js',
      'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
      'node_modules/scrollmagic/scrollmagic/minified/plugins/jquery.ScrollMagic.min.js',
      'node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
      'node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js',
    ]
  },

  css : {
    file: [
      'css/main.css'
    ]
  }

};
