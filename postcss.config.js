module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0,
      autoprefixer: { grid: true }
    }),
    require('postcss-normalize-charset'),
    require('postcss-flexbugs-fixes'),
    ctx.env === 'production'
      ? require('postcss-csso')({ restructure: false })
      : false
  ]
})
