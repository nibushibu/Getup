module.exports = {
  entry: {
    'main': __dirname + '/js/main.js',
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query:{
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
};
