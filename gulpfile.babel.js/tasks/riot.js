const gulp = require('gulp');
const config = require('../config');
const $ = require('gulp-load-plugins')();
const runSequence = require('run-sequence');

gulp.task('riot', () => {
  return gulp.src(['riot/**/*.+(tag|tag.html)'])
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
  .pipe($.concat("tags.js"))
  .pipe(gulp.dest(config.appPath + 'js'));
})
