module.exports = {
  /* 特別な定義が不要なタスクの設定 */
  appPath: 'dist/',

  iconfont: {
    sketch: 'src/symbol-font-14px.sketch',
  },

  copy: {
    scss: [
      'node_modules/slick-carousel/slick/slick.css',
      'node_modules/slick-carousel/slick/slick-theme.css',
    ],
  },

  concat: {
    js: [
      'src/js/plugins-base.js',
      'node_modules/riot/riot.min.js',
      'node_modules/animejs/anime.min.js',
      'node_modules/promise-polyfill/promise.min.js',
      'node_modules/whatwg-fetch/fetch.js',
      'node_modules/slick-carousel/slick/slick.min.js',
      'node_modules/svg4everybody/dist/svg4everybody.min.js',
      'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
      'node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js',
    ]
  },

  css: {
    file: [
      'src/css/main.css'
    ],
    colorFile: [
      'src/css/variables.css'
    ]
  },
};
