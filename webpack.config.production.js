/**
 * 必要なモジュールファイルの読み込み
 */
var webpack = require('webpack')

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

      // JavaScript(ES6)をBabelでES5にトランスパイル
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          __dirname + 'src',
          __dirname + 'test'
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
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: 'popper.js',
      p5: 'p5'
    })
  ]
}