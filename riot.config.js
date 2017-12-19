/**
 * Riotのカスタムパーサーの定義に必要なモジュールの読み込み
 */
const riot = require('riot')
const sass = require('node-sass')
const postcss = require('postcss')
const postcssFocus = require('postcss-focus')
const cssMqpacker = require('css-mqpacker')
const postcssFlexibility = require('postcss-flexibility')
const autoprefixer = require('autoprefixer')

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
    postcssFlexibility
  ]).process(css).css
  return css
}

export default {
  from: 'src/riot',
  to: 'src/js/tags.js',
  type: 'es6',
  style: 'myCssParser'
}