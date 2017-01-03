var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

// SASS
gulp.task('postcss', function () {

  var processors = [
    require('precss'),
    require('postcss-cssnext'),
    require('postcss-map'),
    require('postcss-map')({
      maps: [
        'css/breakpoint.yml',
      ]
    })
  ];

  return gulp.src(config.css.file)
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.sourcemaps.init())
  .pipe($.postcss(processors))
  .pipe($.sourcemaps.write('./'))
  .pipe($.utf8izeSourcemaps())
  .pipe(gulp.dest(config.appPath + 'css'));
});

// Build CSS
gulp.task('css', function (callback) {
  return runSequence('postcss', 'kss', callback);
});
