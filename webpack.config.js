module.exports = {

  // ビルドの基点となるファイル
  entry: './js/main.js',

  // ビルド後のファイル
  output: {
    path: __dirname + '/app/js',
    filename: 'main.js'
  },

  // 拡張子が.jsのファイルはbabel-loaderを通してビルド(node_modulesは除外)
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },

  // SourceMap
  devtool: 'source-map'
};
