module.exports = ctx => {

  var plugins = [
    // require('postcss-devtools'),
    require('postcss-import'),
    require('postcss-focus'),
    // require('css-mqpacker'),
    // require('perfectionist')({
    //   indentSize: 2,
    // }),
    require('autoprefixer'),
  ]

  if(ctx.env === 'minify'){
    return {
      map: { inline: false },
      plugins: [
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
  if(ctx.env === 'guide'){
    return {
      map: { inline: false },
      plugins: [
        ...plugins,
        require('postcss-style-guide')({
          dest: 'styleguide/html/index.html',
        }),
      ]
    }
  }
  else{
    return {
      map: { inline: false },
      plugins: [
        ...plugins,
      ]
    }
  }
}
