module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0,
      autoprefixer: { grid: true }
    }),
    require('postcss-focus'),
    require('postcss-normalize-charset'),
    require('postcss-flexbugs-fixes'),
    require('postcss-custom-properties'),
    require('mdcss')({
      examples: {
        css: ['../dist/css/main.css']
      }
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ]
})
