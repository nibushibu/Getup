module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-focus'),
    require('postcss-normalize-charset'),
    require('postcss-flexbugs-fixes'),
    require('mdcss'),
    require('autoprefixer')({
      grid: true
    })
  ]
}
