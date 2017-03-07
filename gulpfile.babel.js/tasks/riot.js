var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

gulp.task('riot', function(){
  return gulp.src(['riot/**/*.tag.html'])
  .pipe($.plumber({
    errorHandler: $.notify.onError("Error in Riot: <%= error.message %>")
  }))
  .pipe($.riot({
    type: 'es6',
    parsers: {
      js: {
        babelrc: false,
        presets: ["es2015-riot"],
      },
    },
  }))
  .pipe(gulp.dest(config.appPath + 'modules'));
})
