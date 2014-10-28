"use strict"
gulp = require("gulp")
csso = require("gulp-csso")
bower = require("gulp-bower")
concat = require("gulp-concat")
rename = require("gulp-rename")
sketch = require("gulp-sketch")
coffee = require("gulp-coffee")
uglify = require("gulp-uglify")
compass = require("gulp-compass")
pngmin = require("gulp-pngmin")
iconfont = require("gulp-iconfont")
uglifyjs = require("gulp-uglifyjs")
prefixer = require("gulp-autoprefixer")
consolidate = require("gulp-consolidate")
plumber = require("gulp-plumber")
fontName = "symbols" # set name of your symbol font
template = "fontawesome-style" # you can also choose 'foundation-style'

licenseRegexp =
  /^\!|^@preserve|^@cc_on|\bMIT\b|\bMPL\b|\bGPL\b|\(c\)|License|Copyright/i

isLicenseComment = do ->
  _prevCommentLine = 0
  (node, comment) ->
    if licenseRegexp.test(comment.value) or
    comment.line is 1 or
    comment.line is _prevCommentLine + 1
      _prevCommentLine = comment.line
      return true
    _prevCommentLine = 0
    false

gulp.task "symbols", ->
  # you can also choose 'symbol-font-16px.sketch'
  # set path to font (from your CSS file if relative)
  # set class name in your CSS
  # set path to export your CSS

  # if you don't need sample.html, remove next 4 lines
  # set path to export your sample HTML
  # set path to export your fonts

  gulp
  .src("symbol-font-14px.sketch")
  .pipe(sketch( # set path to export your fonts
    export: "artboards"
    formats: "svg"
  ))
  .pipe(iconfont(fontName: fontName))
  .on("codepoints", (codepoints) ->
    options =
      glyphs: codepoints
      fontName: fontName
      fontPath: "../fonts/"
      className: "s"

    gulp
    .src("templates/" + template + ".css")
    .pipe(consolidate("lodash", options))
    .pipe(rename(basename: fontName))
    .pipe(gulp.dest("symbols/css/"))
    .pipe(rename(
      basename: fontName
      prefix: "_"
      extname: ".scss"
    ))
    .pipe gulp.dest("scss/")

    gulp
    .src("templates/" + template + ".html")
    .pipe(consolidate("lodash", options))
    .pipe(rename(basename: "sample"))
    .pipe gulp.dest("symbols/")
  )
  .pipe(gulp.dest("symbols/fonts/"))
  .pipe gulp.dest("public/fonts/")

gulp.task "compass", ->
  gulp
  .src("./scss/*.scss")
  .pipe(plumber())
  .pipe compass(
    config_file: "./config.rb"
    sass: "scss"
    css: "public/css"
  )

gulp.task "prefixer", ->
  gulp
  .src("./public/css/*.css")
  .pipe(prefixer())
  .pipe gulp.dest("./public/css/")

gulp.task "coffee", ->
  gulp
  .src("./coffee/*.coffee")
  .pipe(plumber())
  .pipe(coffee(bare: true))
  .pipe gulp.dest("./public/js/")

gulp.task "min", ->
  gulp
  .src("./public/css/*.css")
  .pipe(csso(false))
  .pipe gulp.dest("./public/css/")
  gulp
  .src("./public/js/*.js")
  .pipe(uglify(
    mangle: false
    preserveComments: isLicenseComment
  ))
  .pipe gulp.dest("./public/js/")
  gulp
  .src("./public/img/sprite-*")
  .pipe(pngmin())
  .pipe gulp.dest("./public/img/")

gulp.task "bower", ->
  bower()
  .pipe gulp.dest("./bower_components/")

gulp.task "copy", ["bower"], ->
  gulp
  .src([
    "bower_components/jquery/dist/jquery.min.js"
    "bower_components/box-sizing-polyfill/boxsizing.htc"
    "bower_components/modernizr/modernizr.js"
  ])
  .pipe gulp.dest("public/js/vendor/")

gulp.task "modernizr", ["copy"], ->
  gulp
  .src("public/js/vendor/modernizr.js")
  .pipe(uglify(
    mangle: false
    preserveComments: isLicenseComment
  ))
  .pipe(rename(suffix: ".min"))
  .pipe gulp.dest("public/js/vendor/")

gulp.task "fa-font", ["modernizr"], ->
  gulp
  .src(["bower_components/font-awesome/fonts/*"])
  .pipe gulp.dest("public/fonts/")

gulp.task "fa-scss", ["fa-font"], ->
  gulp
  .src(["bower_components/font-awesome/scss/_*.scss"])
  .pipe gulp.dest("scss/font-awesome/")

gulp.task "concat", ["fa-scss"], ->
  gulp
  .src([
    "js/plugins-base.js"
    "bower_components/jquery.transit/jquery.transit.js"
  ])
  .pipe(concat("plugins.js"))
  .pipe(uglify(
    mangle: false
    preserveComments: isLicenseComment
  ))
  .pipe gulp.dest("public/js/")

gulp.task "watch", ->
  gulp.watch "*.sketch/Data", ["symbols"]
  gulp.watch "scss/*.scss", ["compass"]
  gulp.watch "coffee/**/*.coffee", ["coffee"]
  gulp.watch "public/css/*.css", ["prefixer"]

gulp.task "default", [
  "concat"
  "watch"
]
