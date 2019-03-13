const gulp = require('gulp')
const nunjucksRender = require('gulp-nunjucks-render')

gulp.task('nunjucks', function () {
  return gulp.src('src/templates/**/[^_]*.njk')
    .pipe(nunjucksRender({
      path: ['src/templates/'] // String or Array
    }))
    .pipe(gulp.dest('dist'))
})