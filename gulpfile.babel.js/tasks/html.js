const gulp = require('gulp');
const config = require('../config');
const $ = require('gulp-load-plugins')();

// EJS
gulp.task('html', callback => {
  return gulp.src([
    'src/ejs/**/*.ejs',
    '!' + 'src/ejs/**/_*.ejs'//_始まりは除外
  ])
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.ejs())
  .pipe($.rename({
    extname: '.html'
  }))
  .pipe(gulp.dest(config.appPath));
});
