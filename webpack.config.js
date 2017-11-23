/**
 * 必要なモジュールファイルの読み込み
 */
var webpack = require('webpack')

/**
 * グローバル関数として定義するJSモジュールの指定
 */
var providePlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: 'popper.js',
  p5: 'p5'
})

/**
 * 開発モードのプラグイン設定
 */
var developPluginsArray = [
  providePlugin
]

/**
 * 本番モードのプラグイン設定
 */
var productionPluginsArray = [
  providePlugin,
  // http://vuejs.github.io/vue-loader/en/workflow/production.html
  new webpack.DefinePlugin({
    'process.env': 'production'
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: true
  }),
]

/**
 * プラグイン設定の切り替え
 */
var pluginsArray = process.env.NODE_ENV === 'production'
  ? productionPluginsArray
  : developPluginsArray

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

module.exports = {

  // エントリーファイル
  entry: './src/js/main.js',

  // 処理したファイルの出力先
  output: {
    path: __dirname + '/dist/js',
    filename: 'main.js'
  },

  /**
   * モジュールを探すディレクトリの指定。
   * https://webpack.js.org/configuration/resolve/
   */
  resolve: {
    modules: [
      __dirname + '/src/js',
      'node_modules'
    ]
  },

  /**
   * ソースマップの設定
   * https://webpack.js.org/configuration/devtool/
   */
  devtool: 'source-map',

  /**
   * モジュールの扱いを設定。どのファイルをなにで処理するかなど。
   * https://webpack.js.org/configuration/module/
   */
  module: {
    rules: [

      // Vue.js
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {

          // vueファイルの中をwebpackで処理するためのloader設定
          loaders: {
            js: 'babel-loader',
            scss: 'sass-loader'
          },

          /**
           * urlをrequire呼び出しに変換
           * https://vue-loader.vuejs.org/ja/options.html#transformtorequire
           * https://github.com/vuejs-templates/webpack のconfig周りを参考
           */
          transformToRequire: {
            video: 'src',
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      },

      /**
       * Riot.js
       * https://github.com/riot/tag-loader
       */
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riot-tag-loader',
        query: {
          hot: false, // set it to true if you are using hmr
          // add here all the other riot-compiler options riotjs.com/guide/compiler/
          loaders: {
            js: 'babel-loader',
            scss: 'sass-loader'
          },
        }
      },

      // JavaScript(ES6)をBabelでES5にトランスパイル
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          __dirname + '/src/js',
        ]
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js'
    }
  },

  /**
   * グローバル関数として定義するJSモジュールの指定
   */
  plugins: pluginsArray,

  /**
   * webpack-dev-serverの設定
   */
  devServer: {
    contentBase: __dirname + '/dist',
    port: 3000,
  }
}