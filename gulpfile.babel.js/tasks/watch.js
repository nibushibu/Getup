const gulp = require('gulp');
const config = require('../config');
const $ = require('gulp-load-plugins')();

// Watch
gulp.task('watch', () => {
  gulp.watch('*.sketch', ['sketch']);
  gulp.watch('svg/*.svg', ['icons']);
  gulp.watch('iconfont/*.svg', ['iconfont']);
  gulp.watch(['css/**/*.css', 'riot/**/*.css'], ['css']);
  gulp.watch('js/**/*.js', ['webpack']);
  gulp.watch('ejs/**/*.ejs', ['ejs']);
  gulp.watch('sprite/**/*', ['sprite']);
  gulp.watch('riot/**/*.+(tag|tag.html)', ['riot']);
});
