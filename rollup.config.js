import nodeResolve  from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import uglify from 'rollup-plugin-uglify'

const main = {
  input: 'src/js/main.js',
  output: {
    file: 'dist/js/main.js',
    format: 'es',
    sourcemap: true
  }
}

const common = {
  // moduleName: 'MyBundle',
  // globals: {
  //   jQuery: '$'
  // },
  plugins: [
    vue({ autoStyles: false, styleToImports: true }),
    postcss({
      plugins: [
        require('postcss-import'),
        require('postcss-easings'),
        require('postcss-mixins'),
        require('postcss-cssnext')({
          warnForDuplicates: false
        }),
        require("postcss-focus"),
        require("css-mqpacker"),
        require("postcss-flexibility"),
        require('postcss-style-guide')({
          dest: 'styleguide/html/index.html',
        }),
        // require('perfectionist')({
        //   indentSize: 2,
        // }),
        require('cssnano')({
          preset: ['default', {
            MergeRules: false,
            normalizeString: {
              preferredQuote: 'single'
            }
          }]
        })
      ]
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

/**
 * Transforms new CSS specs into more compatible CSS
 * https://github.com/riot/examples/blob/gh-pages/rollup/rollup.config.js
 * https://qiita.com/cognitom/items/c20c22614560627062cb
 */
function cssnext (tagName, css) {
  // A small hack: it passes :scope as :root to PostCSS.
  // This make it easy to use css variables inside tags.
  css = css.replace(/:scope/g, ':root')
  css = postcss([postcssCssnext]).process(css).css
  css = css.replace(/:root/g, ':scope')
  return css
}
