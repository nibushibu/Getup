import presetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'
import postcssNormalizeCharset from 'postcss-normalize-charset'
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes'
import postcssCustomMedia from 'postcss-custom-media'
import postcssMediaMinmax from 'postcss-media-minmax'
import postcssCsso from 'postcss-csso'

module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    presetEnv({
      stage: 0,
      autoprefixer: { grid: true }
    }),
    postcssImport,
    postcssNormalizeCharset,
    postcssFlexbugsFixes,
    postcssCustomMedia,
    postcssMediaMinmax,
    ctx.env === 'production' ? postcssCsso({ restructure: false }) : false
  ]
})
