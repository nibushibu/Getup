var gulp = require('gulp');
var requireDir = require('require-dir');
requireDir('./tasks', { recurse: true });
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

gulp.task('default', function (callback) {
  return runSequence('watch', callback);
});
