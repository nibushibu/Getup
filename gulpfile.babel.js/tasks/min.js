var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var licenseRegexp = /^\!|^@preserve|^@cc_on|\bMIT\b|\bMPL\b|\bGPL\b|\(c\)|License|Copyright/i;
var isLicenseComment = (function () {
  var _prevCommentLine = 0;
  return (node, comment) => {
    if (licenseRegexp.test(comment.value) || comment.line === 1 || comment.line === _prevCommentLine + 1) {
      _prevCommentLine = comment.line;
      return true;
    }
    _prevCommentLine = 0;
    return false;
  };
})();

gulp.task('min', (callback) => {
  return runSequence(
    [
      'minifyCss',
      'minifyJs',
      'minifyPng'
    ],
    callback
  );
});

// minify CSS
gulp.task('minifyCss', () => {
  return gulp.src(config.appPath + 'css/*.css')
  .pipe($.postcss([require('csswring')]))
  .pipe(gulp.dest(config.appPath + 'css'));
});

// minify JavaScript
gulp.task('minifyJs', () => {
  return gulp.src(config.appPath + 'js/*.js')
  .pipe($.uglify({
    mangle: false,
    preserveComments: isLicenseComment
  }).on('error', gutil.log))
  .pipe(gulp.dest(config.appPath + 'js'));
});

// minify PNG Images
gulp.task('minifyPng', () => {
  return gulp.src(config.appPath + 'img/**.png')
  .pipe($.pngmin())
  .pipe(gulp.dest(config.appPath + 'img'));
});
