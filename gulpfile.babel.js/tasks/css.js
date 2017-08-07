let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();
let runSequence = require('run-sequence');

// PostCSS
gulp.task('postcss', () => {

  var processors = [
    require('postcss-import'),
    require('postcss-easings'),
    require('postcss-cssnext'),
    require("css-mqpacker"),
    require('postcss-style-guide')({
      dest: 'styleguide/html/index.html',
    }),
    require('perfectionist')({
      indentSize: 2,
    }),
  ];

  return gulp.src(config.css.file)
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.sourcemaps.init())
  .pipe($.postcss(processors))
  // .pipe($.stylefmt())
  .pipe($.sourcemaps.write('./'))
  .pipe($.utf8izeSourcemaps())
  .pipe(gulp.dest(config.appPath + 'css'));
});

gulp.task('colorPalette', () => {

  gulp.src(config.css.colorFile)
  .pipe($.postcss([
    require('postcss-style-guide')({
      project: 'Color Palette',
      dest: 'styleguide/html/color.html'
    })
  ]));
});

// Build CSS
gulp.task('css', callback => {
  return runSequence(['colorPalette', 'postcss'], callback);
});
