let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();
let runSequence = require('run-sequence');

// SVG Sprite
gulp.task('icons', () => {
  return gulp.src('svg/**.svg')
  .pipe($.svgmin())
  .pipe($.svgstore())
  .pipe($.cheerio({
    run: function ($, file) {
      $('svg').addClass('hide');
      $('[fill]').removeAttr('fill');
    },
    parserOptions: { xmlMode: true }
  }))
  .pipe($.rename({
    basename: 'icons'
  }))
  .pipe(gulp.dest(config.appPath + 'img'));
});
