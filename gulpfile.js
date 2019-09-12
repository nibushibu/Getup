const gulp = require('gulp')
const nunjucksRender = require('gulp-nunjucks-render')

gulp.task('nunjucks', function () {
  return gulp.src('src/nunjucks/**/[^_]*.njk')
    .pipe(nunjucksRender({
      path: ['src/nunjucks/'] // String or Array
    }))
    .pipe(gulp.dest('dist'))
})