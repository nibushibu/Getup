module.exports = ctx => {
  if(ctx.env === 'minify'){
    return {
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
        require('postcss-easings'),
        require('postcss-mixins'),
        require('postcss-cssnext')({
          warnForDuplicates: false
        }),
        require("css-mqpacker"),
        require("postcss-flexibility"),
        require('postcss-style-guide')({
          dest: 'styleguide/html/index.html',
        }),
        // require('perfectionist')({
        //   indentSize: 2,
        // }),
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
