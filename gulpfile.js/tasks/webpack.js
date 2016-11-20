var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var webpack = require('webpack-stream');

// WebPack (Babel)
gulp.task('webpack', function () {
  return gulp.src([
    'js/main.js'
  ])
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.sourcemaps.init())
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe($.sourcemaps.write('./'))
  .pipe($.utf8izeSourcemaps())
  .pipe(gulp.dest(config.appPath + 'js'));
});
