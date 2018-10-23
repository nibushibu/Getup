const gulp = require('gulp');
const config = require('../config');
const $ = require('gulp-load-plugins')();
const runSequence = require('run-sequence');

// Copy fonts
function copyFont(cb) {
  return gulp.src([
      'node_modules/slick-carousel/slick/fonts/*'
    ])
    .pipe(gulp.dest(config.appPath + 'css/fonts'));
}

// Copy Images
function copyImg(cb) {
  return gulp.src([
      'node_modules/slick-carousel/slick/ajax-loader.gif'
    ])
    .pipe(gulp.dest(config.appPath + 'css'))
}

// Concat JS
function concatJs(cb) {
  return gulp.src(config.js)
    .pipe($.concat('vendors.js'))
    .pipe(gulp.dest(config.appPath + 'js'));
}

// Command
function copy(cb) {
  parallel(
    'copyFont',
    'copyImg',
    'concatJs'
  );
}

module.exports.copy = copy;