var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();

// Watch
gulp.task('watch', function () {
  gulp.watch('*.sketch', ['sketch']);
  gulp.watch('svg/*.svg', ['iconfont']);
  gulp.watch('css/*.css', ['css']);
  gulp.watch('js/**/*.js', ['webpack']);
  gulp.watch('ejs/**/*.ejs', ['ejs']);
  gulp.watch('sprite/**/*', ['sprite']);
});
