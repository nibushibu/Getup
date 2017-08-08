const gulp = require('gulp');
const config = require('../config');
const $ = require('gulp-load-plugins')();
const gutil = require('gulp-util');
const runSequence = require('run-sequence');
const licenseRegexp = /^\!|^@preserve|^@cc_on|\bMIT\b|\bMPL\b|\bGPL\b|\(c\)|License|Copyright/i;

gulp.task('min', callback => {
  return runSequence(
    [
      'minifyCss',
      'minifyJs',
      'minifyPng',
      'minifySvg'
    ],
    callback
  );
});

// minify CSS
gulp.task('minifyCss', () => {
  return gulp.src(config.appPath + 'css/*.css')
  .pipe($.postcss([
    require("css-mqpacker"),
    require('perfectionist')({
      format: 'compressed'
    })
  ]))
  .pipe(gulp.dest(config.appPath + 'css'));
});

// minify JavaScript
gulp.task('minifyJs', () => {
  return gulp.src(config.appPath + 'js/*.js')
  .pipe($.uglify({
    mangle: false,
    output: {
      comments: licenseRegexp
    }
  }).on('error', gutil.log))
  .pipe(gulp.dest(config.appPath + 'js'));
});

// minify PNG Images
gulp.task('minifyPng', () => {
  return gulp.src(config.appPath + 'img/**/*.png')
  .pipe($.pngmin())
  .pipe(gulp.dest(config.appPath + 'img'));
});

// minify SVG
gulp.task('minifySvg', () => {
  return gulp.src(config.appPath + 'img/**/*.svg')
  .pipe($.svgo())
  .pipe(gulp.dest(config.appPath + 'img'));
});
