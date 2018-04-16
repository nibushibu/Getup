module.exports = {
  /* 特別な定義が不要なタスクの設定 */
  appPath: 'dist/',

  iconfont: {
    sketch: 'src/symbol-font-14px.sketch'
  },

  js: [
    'node_modules/riot/riot.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/feature.js/feature.min.js',
    'node_modules/promise-polyfill/dist/promise.min.js',
    'node_modules/mo-js/build/mo.min.js',
    'node_modules/mojs-player/build/mojs-player.min.js',
    'node_modules/jump.js/dist/jump.js',
    'node_modules/aos/dist/aos.js',
    'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
    'node_modules/p5/lib/p5.min.js'
  ]
};
