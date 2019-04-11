/**
 * Riotのカスタムパーサーの定義に必要なモジュールの読み込み
 */
const riot = require('riot')
const sass = require('node-sass')
const postcss = require('postcss')
const postcssFocus = require('postcss-focus')
const autoprefixer = require('autoprefixer')

export default {
  from: 'src/riot',
  to: 'dist/js/tags.js',
  ext: 'html',
  style: 'scss'
}