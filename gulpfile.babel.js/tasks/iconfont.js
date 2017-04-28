let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();
let fontName = 'iconfont';

// Sketch
gulp.task('sketch', () => {
  return gulp.src(config.iconfont.sketch)
  .pipe($.sketch({
    'export': 'artboards',
    formats: 'svg'
  }))
  .pipe(gulp.dest('svg'));
});

// iconfont
gulp.task('iconfont', () => {
  return gulp.src('iconfont/*.svg')
  .pipe($.iconfont({
    fontName: fontName
  }))
  .on('glyphs', glyphs => {
    var option = {
      glyphs: glyphs.map( glyph => {
        return {
          name: glyph.name,
          codepoint: glyph.unicode[0].charCodeAt(0)
        };
      }),
      fontName: fontName,
      fontPath: '../fonts/',
      className: 'i'
    };
    gulp.src('templates/iconfont.css')
    .pipe($.consolidate('lodash', option))
    .pipe($.rename({
      basename: fontName,
      extname: '.css'
    }))
    .pipe(gulp.dest('css'));
  })
  .pipe(gulp.dest(config.appPath + 'fonts'))
  .pipe(gulp.dest('styleguide/fonts'));
});
