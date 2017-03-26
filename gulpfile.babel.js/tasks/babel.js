var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();

// Babel
gulp.task('babel', function () {
  return gulp.src(config.js.file)
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.sourcemaps.init())
  .pipe($.babel())
  .pipe($.sourcemaps.write('./'))
  .pipe($.utf8izeSourcemaps())
  .pipe(gulp.dest(config.appPath + 'js'));
});
