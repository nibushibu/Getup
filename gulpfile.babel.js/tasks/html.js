let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();

// EJS
gulp.task('ejs', callback => {
  return gulp.src([
    'ejs/**/*.ejs',
    '!' + 'ejs/**/_*.ejs'//_始まりは除外
  ])
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe(
    $.ejs()
    .on('error', $.util.log)
  )
  .pipe($.rename({
    extname: '.html'
  }))
  .pipe(gulp.dest(config.appPath));
});
