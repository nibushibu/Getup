module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-preset-env')({
      stage: false,
      autoprefixer: { grid: true }
    }),
    require('postcss-import'),
    require('postcss-normalize-charset'),
    require('postcss-custom-media'),
    ctx.env === 'production' ? require('cssnano')({ preset: 'lite' }) : false
  ]
})
