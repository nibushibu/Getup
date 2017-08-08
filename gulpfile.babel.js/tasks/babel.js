const gulp = require('gulp');
const config = require('../config');
const $ = require('gulp-load-plugins')();

// Babel
gulp.task('babel', () => {
  return gulp.src(config.js.file)
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.sourcemaps.init())
  .pipe($.babel())
  .pipe($.sourcemaps.write('./'))
  .pipe($.utf8izeSourcemaps())
  .pipe(gulp.dest(config.appPath + 'js'));
});
