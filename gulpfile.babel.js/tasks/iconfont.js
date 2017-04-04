var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var fontName = 'symbols';

// Sketch
gulp.task('sketch', function () {
  return gulp.src(config.iconfont.sketch)
  .pipe($.sketch({
    'export': 'artboards',
    formats: 'svg'
  }))
  .pipe(gulp.dest('svg'));
});

// iconfont
gulp.task('iconfont', function() {
  return gulp.src('iconfont/*.svg')
  .pipe($.iconfont({
    fontName: fontName
  }))
  .on('glyphs', function (glyphs) {
    var option = {
      glyphs: glyphs.map(function (glyph) {
        return {
          name: glyph.name,
          codepoint: glyph.unicode[0].charCodeAt(0)
        };
      }),
      fontName: fontName,
      fontPath: '../fonts/',
      className: 's'
    };
    gulp.src('templates/symbols.css')
    .pipe($.consolidate('lodash', option))
    .pipe($.rename({
      basename: fontName,
      extname: '.css'
    }))
    .pipe(gulp.dest('css'));
  })
  .pipe(gulp.dest(config.appPath + 'fonts'));
});
