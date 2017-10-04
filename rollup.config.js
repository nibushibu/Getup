import nodeResolve  from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import riot from 'rollup-plugin-riot'
import uglify from 'rollup-plugin-uglify'

/**
 * 基本的には、タグ内のCSSは書かない形にしたいけど、念のため
 * http://qiita.com/cognitom/items/c20c22614560627062cb#riotのオプションにカスタムパーサを入れる
 * 
 * Transforms new CSS specs into more compatible CSS
 * https://github.com/riot/examples/blob/gh-pages/rollup/rollup.config.js
 * https://qiita.com/cognitom/items/c20c22614560627062cb
 */

function cssnext (tagName, css) {
  // ちょっとだけハックして、:scopeを:rootに置き換えてPostCSSに渡す
  // タグの中でCSS変数を使いやすくするため
  css = css.replace(/:scope/g, ':root')
  css = postcss([postcssCssnext]).process(css).css
  css = css.replace(/:root/g, ':scope')
  return css
}

const main = {
  input: 'src/js/main.js',
  output: {
    file: 'dist/js/main.js',
    format: 'es'
  }
}

const common = {
  // moduleName: 'MyBundle',
  // globals: {
  //   jQuery: '$'
  // },
  sourcemap: true,
  plugins: [
    riot({
      style: 'cssnext',
      parsers: {
        css: { cssnext }
      }
    }),
    nodeResolve({ jsnext: true }),
    commonjs(),
    buble(),
    uglify()
  ]
}

export default [
  Object.assign({}, main, common)
]