var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

// Copy Javascript
gulp.task('copyJs', function () {
  return gulp.src(config.copy.js)
  .pipe(gulp.dest(config.appPath + 'js/vendor'));
});

// Copy CSS
gulp.task('copyCss', function () {
  return gulp.src(config.copy.css)
  .pipe(gulp.dest('css'));
});

// Copy fonts
gulp.task('copyFont', function () {
  return gulp.src([
    'node_modules/slick-carousel/slick/fonts/*'
  ])
  .pipe(gulp.dest(config.appPath + 'fonts'));
});

// Copy Images
gulp.task('copyImg', function(){
  return gulp.src([
    'node_modules/slick-carousel/slick/ajax-loader.gif'
  ])
  .pipe(gulp.dest(config.appPath + 'img'))
})

// Concat JS
gulp.task('concatJs', function () {
  return gulp.src(config.concat.js)
  .pipe($.concat('plugins.js'))
  .pipe(gulp.dest(config.appPath + 'js'));
});

// Command
gulp.task('copy', function (callback) {
  return runSequence(
    [
      'copyJs',
      'copyCss',
      'copyFont',
      'copyImg',
      'concatJs'
    ],
    callback
  );
});
