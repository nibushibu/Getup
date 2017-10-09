const gulp = require('gulp');
const config = require('../config');
const $ = require('gulp-load-plugins')();
const runSequence = require('run-sequence');

// Copy CSS
gulp.task('copyScss', () => {
  return gulp.src(config.copy.scss)
  .pipe($.rename({
    prefix: '_',
    extname: '.scss'
  }))
  .pipe(gulp.dest('src/scss'));
});

// Copy fonts
gulp.task('copyFont', () => {
  return gulp.src([
    'node_modules/slick-carousel/slick/fonts/*'
  ])
  .pipe(gulp.dest(config.appPath + 'css/fonts'));
});

// Copy Images
gulp.task('copyImg', () =>{
  return gulp.src([
    'node_modules/slick-carousel/slick/ajax-loader.gif'
  ])
  .pipe(gulp.dest(config.appPath + 'css'))
})

// Command
gulp.task('copy', callback => {
  return runSequence(
    [
      'copyScss',
      'copyFont',
      'copyImg',
    ],
    callback
  );
});
