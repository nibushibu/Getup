'use strict';

var gulp = require("gulp");
var csso = require('gulp-csso');
var bower = require('gulp-bower');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var sketch = require("gulp-sketch");
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var compass = require('gulp-compass');
var pngmin = require('gulp-pngmin');
var iconfont = require('gulp-iconfont');
var uglifyjs = require('gulp-uglifyjs');
var prefixer = require('gulp-autoprefixer');
var consolidate = require('gulp-consolidate');
var plumber = require('gulp-plumber');



var fontName = 'symbols'; // set name of your symbol font
var template = 'fontawesome-style'; // you can also choose 'foundation-style'

var isLicenseComment, licenseRegexp;
licenseRegexp = /^\!|^@preserve|^@cc_on|\bMIT\b|\bMPL\b|\bGPL\b|\(c\)|License|Copyright/mi;
isLicenseComment = (function() {
  var _prevCommentLine;
  _prevCommentLine = 0;
  return function(node, comment) {
    if (licenseRegexp.test(comment.value) || comment.line === 1 || comment.line === _prevCommentLine + 1) {
      _prevCommentLine = comment.line;
      return true;
    }
    _prevCommentLine = 0;
    return false;
  };
})();


gulp.task('symbols', function(){
  gulp.src('symbol-font-14px.sketch') // you can also choose 'symbol-font-16px.sketch'
    .pipe(sketch({
      export: 'artboards',
      formats: 'svg'
    }))
    .pipe(iconfont({ fontName: fontName }))
    .on('codepoints', function(codepoints) {
      var options = {
        glyphs: codepoints,
        fontName: fontName,
        fontPath: '../fonts/', // set path to font (from your CSS file if relative)
        className: 's' // set class name in your CSS
      };
      gulp.src('templates/' + template + '.css')
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename:fontName }))
        .pipe(gulp.dest('symbols/css/')) // set path to export your CSS
        .pipe(rename({
          basename:fontName,
          prefix:'_',
          extname:'.scss'
        }))
        .pipe(gulp.dest('scss/'))

      // if you don't need sample.html, remove next 4 lines
      gulp.src('templates/' + template + '.html')
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename:'sample' }))
        .pipe(gulp.dest('symbols/')); // set path to export your sample HTML

    })
    .pipe(gulp.dest('symbols/fonts/')) // set path to export your fonts
    .pipe(gulp.dest('public/fonts/')); // set path to export your fonts
});

gulp.task('compass', function() {
  gulp.src('./scss/*.scss')
    .pipe(plumber())
    .pipe(compass({
      config_file: './config.rb',
      sass: 'scss',
      css: 'public/css'
    }))
});

gulp.task('prefixer', function() {
  gulp.src('./public/css/*.css')
    .pipe(prefixer())
    .pipe(gulp.dest('./public/css/'))
});

gulp.task('coffee', function() {
  gulp.src('./coffee/*.coffee')
    .pipe(plumber())
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('min', function(){
  gulp.src('./public/css/*.css')
    .pipe(csso(false))
    .pipe(gulp.dest('./public/css/'));
  gulp.src('./public/js/*.js')
    .pipe(uglify({
      mangle: false,
      preserveComments:isLicenseComment
    }))
    .pipe(gulp.dest('./public/js/'))
  gulp.src('./public/img/sprite-*')
    .pipe(pngmin())
    .pipe(gulp.dest('./public/img/'));
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('./bower_components/'));
});

gulp.task('copy', ['bower'], function() {
  return gulp.src([
    "bower_components/dist/jquery.min.js",
    "bower_components/box-sizing-polyfill/boxsizing.htc",
    "bower_components/modernizr/modernizr.js"
  ])
    .pipe(gulp.dest('public/js/vendor/'));
});

gulp.task('modernizr',['copy'],function(){
  return gulp.src('public/js/vendor/modernizr.js')
    .pipe(uglify({
      mangle: false,
      preserveComments:isLicenseComment
    }))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('public/js/vendor/'));
});

gulp.task('fa-font', ['modernizr'], function(){
  return gulp.src([
    "bower_components/font-awesome/fonts/*"
  ])
    .pipe(gulp.dest('public/fonts/'));
});

gulp.task('fa-scss', ['fa-font'], function(){
  return gulp.src([
    "bower_components/font-awesome/scss/_*.scss"
  ])
    .pipe(gulp.dest('scss/font-awesome/'));
});

gulp.task('concat',['fa-scss'],function(){
  gulp.src([
    "js/plugins-base.js",
    "bower_components/jquery.transit/jquery.transit.js"
    ])
    .pipe(concat('plugins.js'))
    .pipe(uglify({
      mangle: false,
      preserveComments:isLicenseComment
    }))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function(){
    gulp.watch('*.sketch/Data', ['symbols']);
    gulp.watch('scss/*.scss',['compass']);
    gulp.watch('coffee/**/*.coffee',['coffee']);
    gulp.watch('public/css/*.css', ['prefixer']);
});

gulp.task('default', ['concat', 'watch']);
