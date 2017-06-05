let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();
let runSequence = require('run-sequence');

gulp.task('riot', () => {
  return gulp.src(['riot/**/*.tag'])
  .pipe($.plumber({
    errorHandler: $.notify.onError("Error in Riot: <%= error.message %>")
  }))
  .pipe($.riot({
    type: 'es6',
    parsers: {
      js: {
        babelrc: true,
      },
    },
  }))
  .pipe($.concat("modules.js"))
  .pipe(gulp.dest(config.appPath + 'js'));
})
