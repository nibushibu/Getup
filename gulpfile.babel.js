import runSequence from "run-sequence";
import gulp from "gulp";
import gulpLoadPlugins from "gulp-load-plugins";
gulpLoadPlugins({
  rename: {
    'gulp-minify-css': 'minifycss'
  }
});
const $ = gulpLoadPlugins();
const fontName = "symbols";
const appPath = "app/";
const licenseRegexp = /^\!|^@preserve|^@cc_on|\bMIT\b|\bMPL\b|\bGPL\b|\(c\)|License|Copyright/i;
const isLicenseComment = (() => {
  let _prevCommentLine = 0;
  return (node, comment) => {
    if (licenseRegexp.test(comment.value) || comment.line === 1 || comment.line === _prevCommentLine + 1) {
      _prevCommentLine = comment.line;
      return true;
    }
    _prevCommentLine = 0;
    return false;
  };
})();

// Webフォント
gulp.task("symbols", () => {
  return gulp.src("symbol-font-14px.sketch")
  .pipe($.sketch({
    "export": "artboards",
    formats: "svg"
  }))
  .pipe($.iconfont({
    fontName: fontName
  }))
  .on("glyphs", (glyphs) => {
    let option = {
      glyphs: glyphs.map((glyph) => {
        return {
          name: glyph.name,
          codepoint: glyph.unicode[0].charCodeAt(0)
        };
      }),
      fontName: fontName,
      fontPath: '../fonts/',
      className: 's'
    };
    gulp.src("templates/symbols.scss")
    .pipe($.consolidate("lodash", option))
    .pipe($.rename({
      basename: fontName,
      prefix: "_",
      extname: ".scss"
    }))
    .pipe(gulp.dest("scss"));
  })
  .pipe(gulp.dest(appPath + "fonts"));
});

// Compass
gulp.task("compass", () => {
  return gulp.src("scss/*.scss")
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.compass({
    config_file: "config.rb",
    sass: "scss",
    css: appPath + "css"
  }));
});

// AutoPrefixer
gulp.task("autoprefixer", () => {
  return gulp.src(appPath + "css/*.css")
  .pipe($.autoprefixer())
  .pipe(gulp.dest(appPath + "css"));
});

// KSS
gulp.task("kss", () => {
  return gulp.src("scss/**/*.scss")
  .pipe($.kss({
    overview: "docs/template/styleguide.md",
    templateDirectory: "docs/template/"
  }))
  .pipe(gulp.dest("docs/styleguide"));
  return gulp.src(["docs/template/public/base.css", appPath + "css/*.css"])
  .pipe($.concat("main.css"))
  .pipe($.replace(/url\(\.\.\//g, 'url(../../../app/'))
  .pipe($.replace(/url\(\"\.\.\//g, 'url("../../../app/'))
  .pipe(gulp.dest("docs/styleguide/public"));
  return gulp.src("docs/template/public/github.css")
  .pipe(gulp.dest("docs/styleguide/public"));
});

// gulp.task("coffee", function() {
//   return gulp.src("coffee/*.coffee").pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')})).pipe($.sourcemaps.init()).pipe($.coffee({
//     bare: true
//   }))
//   .pipe($.sourcemaps.write(""))
//   .pipe(gulp.dest(appPath + "js"));
// });

// Babel
gulp.task("babel", () => {
  return gulp.src("js/*.js")
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe($.sourcemaps.init())
  .pipe($.babel())
  .pipe($.sourcemaps.write("."))
  .pipe(gulp.dest(appPath + "js"));
});

// minify
gulp.task("minify", () => {
  return gulp.src(appPath + "css/*.css")
  .pipe($.minifycss({
    compatibility: "ie8",
    advanced: false
  }))
  .pipe(gulp.dest(appPath + "css"));
  return gulp.src(appPath + "js/*.js")
  .pipe($.uglify({
    mangle: false,
    preserveComments: isLicenseComment
  }))
  .pipe(gulp.dest(appPath + "js"));
  return gulp.src(appPath + "img/**.png")
  .pipe($.pngmin())
  .pipe(gulp.dest(appPath + "img"));
});

// Bower
gulp.task("bower", () => {
  $.bower({
    cmd: 'update'
  }).pipe(gulp.dest("bower_components"));
});

// Copy
gulp.task("copy", () => {
  return gulp.src(["bower_components/jquery/dist/jquery.min.*", "bower_components/respond/dest/respond.min.js"])
  .pipe(gulp.dest(appPath + "js/vendor"));
  return gulp.src(["bower_components/normalize-css/normalize.css"])
  .pipe($.rename({
    prefix: "_",
    extname: ".scss"
  }))
  .pipe(gulp.dest("scss"));
  return gulp.src("bower_components/font-awesome/fonts/fontawesome-*")
  .pipe(gulp.dest(appPath + "fonts"));
  return gulp.src("bower_components/font-awesome/scss/_*.scss")
  .pipe(gulp.dest("scss/font-awesome"));
});

// Concat
gulp.task("concat", () => {
  return gulp.src([
    "js/plugins-base.js"
  ])
  .pipe($.concat("plugins.js"))
  .pipe(gulp.dest(appPath + "js"));
});

// Compass
gulp.task("compass-build", (callback) => {
  runSequence('compass', 'autoprefixer', 'kss', callback);
});

// EJS
gulp.task("ejs", (callback) => {
  return gulp.src([
    "ejs/**/*.ejs",
    '!' + "ejs/**/_*.ejs"//_始まりは除外
  ])
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe(
    $.ejs({
      msg: "Hello"
    })
    .on('error', $.util.log)
  )
  .pipe($.rename({
    extname: ".html"
  }))
  .pipe(gulp.dest(appPath));
});

// Watch
gulp.task("watch", () => {
  gulp.watch("*.sketch", ["symbols"]);
  gulp.watch("scss/*.scss", ["compass-build"]);
  // gulp.watch("coffee/**/*.coffee", ["coffee"]);
  gulp.watch("js/**/*.js", ["babel"]);
  gulp.watch("ejs/**/*.ejs", ["ejs"]);
});

// Command
gulp.task("update", (callback) => {
  runSequence('bower', ['copy', 'concat'], 'watch', callback);
});

gulp.task("default", (callback) => {
  runSequence('watch', callback);
});

gulp.task("min", (callback) => {
  runSequence('minify', 'kss', callback);
});
