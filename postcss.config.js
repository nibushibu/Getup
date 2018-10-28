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
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      grid: true
    })
  ]

  var minify = [
    require('cssnano')({
      preset: [
        'default',
        {
          MergeRules: false,
          normalizeString: {
            preferredQuote: 'single'
          }
        }
      ]
    })
  ]

  if (ctx.env === 'guide') {
    return {
      map: ctx.options.map,
      plugins: [
        ...plugins,
        require('postcss-style-guide')({
          dest: 'docs/styleguide/index.html'
        }),
        ...minify
      ]
    }
  } else {
    return {
      map: ctx.options.map,
      plugins: [...plugins, ...minify]
    }
  }
}
