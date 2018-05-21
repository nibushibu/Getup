/**
 * Riotのカスタムパーサーの定義に必要なモジュールの読み込み
 */
const riot = require('riot')
const sass = require('node-sass')
const postcss = require('postcss')
const postcssFocus = require('postcss-focus')
const cssMqpacker = require('css-mqpacker')
const autoprefixer = require('autoprefixer')
const buble = require('buble')

/**
 * Riot用CSSカスタムパーサー（Sass + Autoprefixer）
 */
riot.parsers.css.myCssParser = function (tagName, css) {

  const sassOptions = {
    data: css,
    indentType: 'space'
  }

  css = sass.renderSync(sassOptions).css
  css = postcss([
    postcssFocus,
    cssMqpacker,
    autoprefixer,
  ]).process(css).css
  return css
}

/**
 * Riot用JSカスタムパーサー（Bubble）
 */
riot.parsers.js.buble = function(js, options) {
  js = buble.transform(js)
  return js
}

export default {
  from: 'src/riot',
  to: 'dist/js/tags.js',
  type: 'buble',
  style: 'myCssParser'
}