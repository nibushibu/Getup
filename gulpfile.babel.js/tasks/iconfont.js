const gulp = require('gulp')
const config = require('../config')
const $ = require('gulp-load-plugins')()
const fontName = 'iconfont'

// Sketch
gulp.task('sketch', () => {
  return gulp.src('src/symbol-font-14px.sketch')
  .pipe($.sketch({
    'export': 'artboards',
    formats: 'svg'
  }))
  .pipe(gulp.dest('src/iconfont'))
})

// iconfont
gulp.task('iconfont', () => {
  return gulp.src('src/iconfont/*.svg')
  .pipe($.iconfont({
    fontName: fontName
  }))
  .on('glyphs', glyphs => {
    var option = {
      glyphs: glyphs.map( glyph => {
        return {
          name: glyph.name,
          codepoint: glyph.unicode[0].charCodeAt(0)
        }
      }),
      fontName: fontName,
      fontPath: '../fonts/',
      className: 'i'
    }
    gulp.src('src/templates/iconfont.scss')
    .pipe($.consolidate('lodash', option))
    .pipe($.rename({
      prefix: '_',
      basename: fontName,
      extname: '.scss'
    }))
    .pipe(gulp.dest('src/scss'))
  })
  .pipe(gulp.dest(config.appPath + 'fonts'))
  .pipe(gulp.dest('styleguide/fonts'))
})
