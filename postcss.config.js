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
    require('postcss-custom-properties'),
    require('cssnano')({
      preset: 'default',
    }),
  ]
})
