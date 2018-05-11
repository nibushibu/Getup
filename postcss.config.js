module.exports = ctx => {
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
  else{
    return {
      map: { inline: false },
      plugins: [
        require('postcss-import'),
        require('postcss-focus'),
        require('css-mqpacker'),
        require('postcss-flexibility'),
        require('postcss-style-guide')({
          dest: 'styleguide/html/index.html',
        }),
        // require('perfectionist')({
        //   indentSize: 2,
        // }),
        require('autoprefixer'),
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
