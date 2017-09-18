import nodeResolve  from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import riot from 'rollup-plugin-riot'
import uglify from 'rollup-plugin-uglify'

// 基本的には、タグ内のCSSは書かない形にしたいけど、念のため
// http://qiita.com/cognitom/items/c20c22614560627062cb#riotのオプションにカスタムパーサを入れる
function cssnext (tagName, css) {
  // ちょっとだけハックして、:scopeを:rootに置き換えてPostCSSに渡す
  // タグの中でCSS変数を使いやすくするため
  css = css.replace(/:scope/g, ':root')
  css = postcss([postcssCssnext]).process(css).css
  css = css.replace(/:root/g, ':scope')
  return css
}

const main = {
  entry: 'src/js/main.js',
  dest: 'dist/js/main.js'
}

const common = {
  format: 'es',
  // moduleName: 'MyBundle',
  // globals: {
  //   jQuery: '$'
  // },
  sourceMap: true,
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
