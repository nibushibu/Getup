var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var licenseRegexp = /^\!|^@preserve|^@cc_on|\bMIT\b|\bMPL\b|\bGPL\b|\(c\)|License|Copyright/i;
var isLicenseComment = (function () {
  var _prevCommentLine = 0;
  return function (node, comment) {
    if (licenseRegexp.test(comment.value) || comment.line === 1 || comment.line === _prevCommentLine + 1) {
      _prevCommentLine = comment.line;
      return true;
    }
    _prevCommentLine = 0;
    return false;
  };
})();

gulp.task('min', function (callback) {
  return runSequence(
    [
      'minifyCss',
      'minifyJs',
      'minifyPng'
    ],
    'kss',
    callback
  );
});

// minify CSS
gulp.task('minifyCss', function () {
  return gulp.src(config.appPath + 'css/*.css')
  .pipe($.postcss([require('csswring')]))
  .pipe(gulp.dest(config.appPath + 'css'));
});

// minify JavaScript
gulp.task('minifyJs', function () {
  return gulp.src(config.appPath + 'js/*.js')
  .pipe($.uglify({
    mangle: false,
    preserveComments: isLicenseComment
  }))
  .pipe(gulp.dest(config.appPath + 'js'));
});

// minify PNG Images
gulp.task('minifyPng', function () {
  return gulp.src(config.appPath + 'img/**.png')
  .pipe($.pngmin())
  .pipe(gulp.dest(config.appPath + 'img'));
});
