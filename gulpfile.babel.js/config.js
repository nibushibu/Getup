module.exports = {
  /* 特別な定義が不要なタスクの設定 */
  appPath: 'app/',

  iconfont: {
    sketch: 'symbol-font-14px.sketch',
  },

  copy: {
    js: [
      'node_modules/jquery/dist/jquery.min.*',
      'node_modules/riot/riot.min.js',
      'node_modules/feature.js/feature.min.js',
    ],
    css: [
      'node_modules/sanitize.css/sanitize.css',
      'node_modules/slick-carousel/slick/slick.css',
      'node_modules/slick-carousel/slick/slick-theme.css',
    ],
  },

  concat: {
    js: [
      'js/plugins-base.js',
      'node_modules/riot/riot.min.js',
      'node_modules/animejs/anime.min.js',
      'node_modules/slick-carousel/slick/slick.min.js',
      'node_modules/svg4everybody/dist/svg4everybody.min.js',
      'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
      'node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js',
    ]
  },

  css: {
    file: [
      'riot/**/*.css',
      'css/main.css'
    ]
  },

  js: {
    file: [
      'js/**/*.js'
    ]
  }
};
