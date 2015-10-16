var runSequence = require("run-sequence");
var gulp = require("gulp");
var gulpLoadPlugins = require("gulp-load-plugins");
gulpLoadPlugins({
  rename: {
    'gulp-minify-css': 'minifycss'
  }
});
var plugins = gulpLoadPlugins();
var fontName = "symbols";
var appPath = "app/";
var licenseRegexp = /^\!|^@preserve|^@cc_on|\bMIT\b|\bMPL\b|\bGPL\b|\(c\)|License|Copyright/i;
var isLicenseComment = (() => {
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

// Webフォント
gulp.task("symbols", () => {
  gulp.src("symbol-font-14px.sketch").pipe(plugins.sketch({
    "export": "artboards",
    formats: "svg"
  })).pipe(plugins.iconfont({
    fontName: fontName
  })).on("glyphs", (glyphs) => {
    var option = {
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
    gulp.src("templates/symbols.scss").pipe(plugins.consolidate("lodash", option)).pipe(plugins.rename({
      basename: fontName,
      prefix: "_",
      extname: ".scss"
    })).pipe(gulp.dest("scss"));
  }).pipe(gulp.dest(appPath + "fonts"));
});

// Compass
gulp.task("compass", () => {
  gulp.src("scss/*.scss").pipe(plugins.plumber()).pipe(plugins.compass({
    config_file: "config.rb",
    sass: "scss",
    css: appPath + "css"
  }));
});

// AutoPrefixer
gulp.task("autoprefixer", () => {
  gulp.src(appPath + "css/*.css").pipe(plugins.autoprefixer()).pipe(gulp.dest(appPath + "css"));
});

// KSS
gulp.task("kss", () => {
  gulp.src("scss/**/*.scss").pipe(plugins.kss({
    overview: "docs/template/styleguide.md",
    templateDirectory: "docs/template/"
  })).pipe(gulp.dest("docs/styleguide"));
  gulp.src(["docs/template/public/base.css", appPath + "css/*.css"]).pipe(plugins.concat("main.css")).pipe(plugins.replace(/url\(\.\.\//g, 'url(../../../app/')).pipe(plugins.replace(/url\(\"\.\.\//g, 'url("../../../app/')).pipe(gulp.dest("docs/styleguide/public"));
  gulp.src("docs/template/public/github.css").pipe(gulp.dest("docs/styleguide/public"));
});

// gulp.task("coffee", function() {
//   gulp.src("coffee/*.coffee").pipe(plugins.plumber()).pipe(plugins.sourcemaps.init()).pipe(plugins.coffee({
//     bare: true
//   })).pipe(plugins.sourcemaps.write("")).pipe(gulp.dest(appPath + "js"));
// });

// Babel
gulp.task("babel", () => {
  gulp.src("js/*.js")
  .pipe(plugins.plumber())
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.babel())
  .pipe(plugins.sourcemaps.write("."))
  .pipe(gulp.dest(appPath + "js"));
});

// minify
gulp.task("minify", () => {
  gulp.src(appPath + "css/*.css").pipe(plugins.minifycss({
    compatibility: "ie8",
    advanced: false
  })).pipe(gulp.dest(appPath + "css"));
  gulp.src(appPath + "js/*.js").pipe(plugins.uglify({
    mangle: false,
    preserveComments: isLicenseComment
  })).pipe(gulp.dest(appPath + "js"));
  gulp.src(appPath + "img/**.png").pipe(plugins.pngmin()).pipe(gulp.dest(appPath + "img"));
});

// Bower
gulp.task("bower", () => {
  plugins.bower({
    cmd: 'update'
  }).pipe(gulp.dest("bower_components"));
});

//
gulp.task("copy", () => {
  gulp.src(["bower_components/jquery/dist/jquery.min.*", "bower_components/respond/dest/respond.min.js"]).pipe(gulp.dest(appPath + "js/vendor"));
  gulp.src(["bower_components/normalize-css/normalize.css"]).pipe(plugins.rename({
    prefix: "_",
    extname: ".scss"
  })).pipe(gulp.dest("scss"));
});

gulp.task("fa", () => {
  gulp.src("bower_components/font-awesome/fonts/fontawesome-*").pipe(gulp.dest(appPath + "fonts"));
  gulp.src("bower_components/font-awesome/scss/_*.scss").pipe(gulp.dest("scss/font-awesome"));
});

gulp.task("concat", () => {
  gulp.src(["js/plugins-base.js"]).pipe(plugins.concat("plugins.js")).pipe(gulp.dest(appPath + "js"));
});

gulp.task("compass-build", (callback) => {
  runSequence('compass', 'autoprefixer', 'kss', callback);
});

gulp.task("watch", () => {
  gulp.watch("*.sketch", ["symbols"]);
  gulp.watch("scss/*.scss", ["compass-build"]);
  // gulp.watch("coffee/**/*.coffee", ["coffee"]);
  gulp.watch("js/**/*.js", ["babel"]);
});

gulp.task("update", (callback) => {
  runSequence('bower', ['copy', 'fa', 'concat'], 'watch', callback);
});

gulp.task("default", (callback) => {
  runSequence('watch', callback);
});

gulp.task("min", (callback) => {
  runSequence('minify', 'kss', callback);
});
