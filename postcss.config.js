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
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    ctx.env === 'production'
      ? require('postcss-csson')({ restructure: false })
      : false
  ]
})
