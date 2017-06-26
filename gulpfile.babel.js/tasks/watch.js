let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();

// Watch
gulp.task('watch', () => {
  gulp.watch('*.sketch', ['sketch']);
  gulp.watch('svg/*.svg', ['icons']);
  gulp.watch('iconfont/*.svg', ['iconfont']);
  gulp.watch(['css/**/*.css', 'riot/**/*.css'], ['css']);
  gulp.watch('js/**/*.js', ['babel']);
  gulp.watch('ejs/**/*.ejs', ['ejs']);
  gulp.watch('sprite/**/*', ['sprite']);
  gulp.watch('riot/**/*.+(tag|tag.html)', ['riot']);
});
