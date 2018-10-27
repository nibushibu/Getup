module.exports = ctx => {

  var plugins = [
    // require('postcss-devtools'),
    require('postcss-import'),
    require('postcss-focus'),
    // require('css-mqpacker'),
    // require('perfectionist')({
    //   indentSize: 2,
    // }),
    require('postcss-normalize-charset'),
    require('autoprefixer')({
      grid: true
    }),
  ]

  if (ctx.env === 'guide') {
    return {
      map: ctx.options.map,
      plugins: [
        ...plugins,
        require('postcss-style-guide')({
          dest: 'docs/styleguide/index.html'
        }),
      ]
    }
  } else {
    return {
      map: ctx.options.map,
      plugins: [
        ...plugins,
        require('cssnano')({
          preset: ['default', {
            MergeRules: false,
            normalizeString: {
              preferredQuote: 'single'
            }
          }]
        })
      ]
    }
  }
}