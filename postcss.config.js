module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
      autoprefixer: { grid: true }
    }),
    require('postcss-import'),
    require('postcss-normalize-charset'),
    require('postcss-flexbugs-fixes'),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    ctx.env === 'production'
      ? require('postcss-csso')({ restructure: false })
      : false
  ]
})
