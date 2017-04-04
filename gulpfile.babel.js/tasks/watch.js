var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();

// Watch
gulp.task('watch', function () {
  gulp.watch('*.sketch', ['sketch']);
  gulp.watch('svg/*.svg', ['icons']);
  gulp.watch('iconfont/*.svg', ['iconfont']);
  gulp.watch(['css/**/*.css', 'riot/**/*.css'], ['css']);
  gulp.watch('js/**/*.js', ['babel']);
  gulp.watch('ejs/**/*.ejs', ['ejs']);
  gulp.watch('sprite/**/*', ['sprite']);
  gulp.watch('riot/**/*.tag.html', ['riot']);
});
