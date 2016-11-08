var runSequence = require('run-sequence');
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins();
var fs = require('fs');
var path = require('path');
var webpack = require('webpack-stream');
var autoprefixer = require('autoprefixer');
var fontName = 'symbols';
var appPath = 'app/';
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

// SpriteSmithで使うディレクトリ取得関数
var getFolders = function (dir) {
  return fs.readdirSync(dir)
  .filter(function (file) {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });
}

// Sketch
gulp.task('sketch', function () {
  return gulp.src('symbol-font-14px.sketch')
  .pipe($.sketch({
    'export': 'artboards',
    formats: 'svg'
  }))
  .pipe(gulp.dest('svg'));
});

// iconfont
gulp.task('iconfont', function() {
  return gulp.src('svg/*.svg')
  .pipe($.iconfont({
    fontName: fontName
  }))
  .on('glyphs', function (glyphs) {
    var option = {
      glyphs: glyphs.map(function (glyph) {
        return {
          name: glyph.name,
          codepoint: glyph.unicode[0].charCodeAt(0)
        };
      }),
      fontName: fontName,
      fontPath: '../fonts/',
      className: 's'
    };
    gulp.src('templates/symbols.scss')
    .pipe($.consolidate('lodash', option))
    .pipe($.rename({
      basename: fontName,
      prefix: '_',
      extname: '.scss'
    }))
    .pipe(gulp.dest('scss'));
  })
  .pipe(gulp.dest(appPath + 'fonts'));
});

// SASS
gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.sourcemaps.init())
  .pipe($.sass())
  .pipe($.postcss([
    require('autoprefixer')
  ]))
  .pipe($.sourcemaps.write('./'))
  .pipe($.utf8izeSourcemaps())
  .pipe(gulp.dest(appPath + 'css'));
});

// SpriteSmith
gulp.task('sprite', function () {
  var folders = getFolders('sprite');

  folders.map(function (folder) {
    var spriteData = gulp.src(folder + '/*.png', {cwd: 'sprite'})
    .pipe($.spritesmith({
      imgName: 'sprite-' + folder + '.png',
      imgPath:  '../img/sprite-' + folder + '.png',
      cssName: '_sprite-' + folder + '.scss',
      algorithm: 'binary-tree',
      padding: 4,
      // cssFormat: 'scss',
      cssTemplate: 'templates/sprite.handlebars'
    }));

    spriteData.img.pipe(gulp.dest(appPath + 'img'));
    spriteData.css.pipe(
      gulp.dest('scss').on('end', function(){
        console.log('complete sprite task');
      })
    );
  });
});

// KSS
gulp.task('kss', function () {
  gulp.src('scss/**/*.scss')
  .pipe($.kss({
    overview: 'docs/template/styleguide.md',
    templateDirectory: 'docs/template/'
  }))
  .pipe(gulp.dest('docs/styleguide'));
  gulp.src(['docs/template/public/base.css', appPath + 'css/*.css'])
  .pipe($.concat('main.css'))
  .pipe($.replace(/url\(\.\.\//g, 'url(../../../' + appPath))
  .pipe($.replace(/url\(\'\.\.\//g, 'url("../../../' + appPath))
  .pipe(gulp.dest('docs/styleguide/public'));
  gulp.src('docs/template/public/github.css')
  .pipe(gulp.dest('docs/styleguide/public'));
});

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
  .pipe(gulp.dest(appPath + 'js'));
});


// minify CSS
gulp.task('minifyCss', function () {
  return gulp.src(appPath + 'css/*.css')
  .pipe($.postcss([
    require('csswring')
  ]))
  .pipe(gulp.dest(appPath + 'css'));
});

// minify JavaScript
gulp.task('minifyJs', function () {
  return gulp.src(appPath + 'js/*.js')
  .pipe($.uglify({
    mangle: false,
    preserveComments: isLicenseComment
  }))
  .pipe(gulp.dest(appPath + 'js'));
});

// minify PNG Images
gulp.task('minifyPng', function () {
  return gulp.src(appPath + 'img/**.png')
  .pipe($.pngmin())
  .pipe(gulp.dest(appPath + 'img'));
});

// Copy Javascript
gulp.task('copyJs', function () {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.*'
  ])
  .pipe(gulp.dest(appPath + 'js/vendor'));
});

// Copy CSS(SCSS)
gulp.task('copyCss', function () {
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/slick-carousel/slick/slick.scss',
    'node_modules/slick-carousel/slick/slick-theme.scss'
  ])
  .pipe($.rename({
    prefix: '_',
    extname: '.scss'
  }))
  .pipe(gulp.dest('scss'));
});

// Copy fonts
gulp.task('copyFont', function () {
  return gulp.src([
    'node_modules/slick-carousel/slick/fonts/*'
  ])
  .pipe(gulp.dest(appPath + 'fonts'));
});

// Copy Images
gulp.task('copyImg', function(){
  return gulp.src([
    'node_modules/slick-carousel/slick/ajax-loader.gif'
  ])
  .pipe(gulp.dest(appPath + 'img'))
})

// Concat
gulp.task('concat', function () {
  return gulp.src([
    'js/plugins-base.js',
    'node_modules/gsap/src/minified/TweenMax.min.js',
    'node_modules/gsap/src/minified/TimelineMax.min.js',
    'node_modules/gsap/src/minified/plugins/ScrollToPlugin.min.js',
    'node_modules/slick-carousel/slick/slick.min.js',
    'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
    'node_modules/scrollmagic/scrollmagic/minified/plugins/jquery.ScrollMagic.min.js',
    'node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
    'node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
  ])
  .pipe($.concat('plugins.js'))
  .pipe(gulp.dest(appPath + 'js'));
});

// Build CSS
gulp.task('buildCss', function (callback) {
  return runSequence('sass', 'kss', callback);
});

// EJS
gulp.task('ejs', function (callback) {
  return gulp.src([
    'ejs/**/*.ejs',
    '!' + 'ejs/**/_*.ejs'//_始まりは除外
  ])
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe(
    $.ejs()
    .on('error', $.util.log)
  )
  .pipe($.rename({
    extname: '.html'
  }))
  .pipe(gulp.dest(appPath));
});

// Watch
gulp.task('watch', function () {
  gulp.watch('*.sketch', ['sketch']);
  gulp.watch('svg/*.svg', ['iconfont']);
  gulp.watch('scss/*.scss', ['buildCss']);
  gulp.watch('js/**/*.js', ['webpack']);
  gulp.watch('ejs/**/*.ejs', ['ejs']);
  gulp.watch('sprite/**/*', ['sprite']);
});

// Command
gulp.task('update', function (callback) {
  return runSequence(
    [
      'copyJs',
      'copyCss',
      'copyFont',
      'copyImg',
      'concat'
    ],
    'watch',
    callback
  );
});

gulp.task('default', function (callback) {
  return runSequence('watch', callback);
});

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
