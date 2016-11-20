var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();

// KSS
gulp.task('kss', function () {
  gulp.src('scss/**/*.scss')
  .pipe($.kss({
    overview: 'docs/template/styleguide.md',
    templateDirectory: 'docs/template/'
  }))
  .pipe(gulp.dest('docs/styleguide'));
  gulp.src(['docs/template/public/base.css', config.appPath + 'css/*.css'])
  .pipe($.concat('main.css'))
  .pipe($.replace(/url\(\.\.\//g, 'url(../../../' + config.appPath))
  .pipe($.replace(/url\(\'\.\.\//g, 'url("../../../' + config.appPath))
  .pipe(gulp.dest('docs/styleguide/public'));
  gulp.src('docs/template/public/github.css')
  .pipe(gulp.dest('docs/styleguide/public'));
});
