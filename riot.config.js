/**
 * Riotのカスタムパーサーの定義に必要なモジュールの読み込み
 */
const riot = require('riot')
const sass = require('node-sass')
const postcss = require('postcss')
const postcssFocus = require('postcss-focus')
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
    autoprefixer({
      grid: true
    }),
  ]).process(css).css
  return css
}

export default {
  from: 'src/riot',
  to: 'dist/js/tags.js',
  ext: 'html',
  style: 'myCssParser'
}