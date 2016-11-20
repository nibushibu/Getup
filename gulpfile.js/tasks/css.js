var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');
var runSequence = require('run-sequence');

// SASS
gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.sourcemaps.init())
  .pipe($.sass())
  .pipe($.postcss([
    autoprefixer()
  ]))
  .pipe($.sourcemaps.write('./'))
  .pipe($.utf8izeSourcemaps())
  .pipe(gulp.dest(config.appPath + 'css'));
});

// Build CSS
gulp.task('css', function (callback) {
  return runSequence('sass', 'kss', callback);
});
