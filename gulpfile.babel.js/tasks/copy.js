let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();
let runSequence = require('run-sequence');

// Copy Javascript
gulp.task('copyJs', () => {
  return gulp.src(config.copy.js)
  .pipe(gulp.dest(config.appPath + 'js/vendor'));
});

// Copy CSS
gulp.task('copyCss', () => {
  return gulp.src(config.copy.css)
  .pipe(gulp.dest('css'));
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

// Concat JS
gulp.task('concatJs', () => {
  return gulp.src(config.concat.js)
  .pipe($.concat('plugins.js'))
  .pipe(gulp.dest(config.appPath + 'js'));
});

// Command
gulp.task('copy', callback => {
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
