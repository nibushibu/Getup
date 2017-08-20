const gulp = require('gulp')
const rollup = require('rollup-stream')
const config = require('../config')
const $ = require('gulp-load-plugins')()
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const buble = require('rollup-plugin-buble')

// Babel
gulp.task('js', () => {
  return rollup({
    entry: 'src/js/main.js',
    dest: 'dist/js/main.js',
    format: 'iife',
    plugins: [
      nodeResolve({ jsnext: true }), // npmモジュールを`node_modules`から読み込む
      commonjs(), // CommonJSモジュールをES6に変換
      buble({}) // ES5に変換
    ]
  })
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.sourcemaps.init())
  .pipe($.sourcemaps.write('./'))
  .pipe($.utf8izeSourcemaps())
  .pipe(gulp.dest(config.appPath + 'js'))
})
