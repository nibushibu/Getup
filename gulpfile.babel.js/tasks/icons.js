var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

// SVG Sprite
gulp.task('icons', function () {
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
