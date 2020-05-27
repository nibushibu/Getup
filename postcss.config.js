module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      autoprefixer: { grid: true }
    }),
    require('postcss-focus'),
    require('postcss-normalize-charset'),
    require('postcss-flexbugs-fixes'),
    require('mdcss')({
      examples: {
        css: ['../dist/css/main.css']
      }
    }),
  ]
}
