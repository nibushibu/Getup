"use strict"
gulp = require "gulp"
csso = require "gulp-csso"
bower = require "gulp-bower"
concat = require "gulp-concat"
rename = require "gulp-rename"
sketch = require "gulp-sketch"
coffee = require "gulp-coffee"
uglify = require "gulp-uglify"
compass = require "gulp-compass"
pngmin = require "gulp-pngmin"
iconfont = require "gulp-iconfont"
uglifyjs = require "gulp-uglifyjs"
prefixer = require "gulp-autoprefixer"
consolidate = require "gulp-consolidate"
sourcemaps = require 'gulp-sourcemaps'
plumber = require "gulp-plumber"
runSequence = require "run-sequence"
fontName = "symbols" # set name of your symbol font
template = "fontawesome-style" # you can also choose 'foundation-style'
appPath = "public/"


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

  # osType = $.os.type()
  # if osType is 'Darwin'

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
    .pipe(rename(
      basename: fontName
      prefix: "_"
      extname: ".scss"
    ))
    .pipe(gulp.dest("scss/"))
  )
  .pipe gulp.dest("./#{appPath}fonts/")

gulp.task "compass", ->
  gulp
  .src("./scss/*.scss")
  .pipe(plumber())
  .pipe compass(
    config_file: "./config.rb"
    sass: "scss"
    css: "#{appPath}css"
  )

gulp.task "prefixer", ->
  gulp
  .src("./#{appPath}css/*.css")
  .pipe(prefixer())
  .pipe gulp.dest("./#{appPath}css/")

gulp.task "coffee", ->
  gulp
  .src("./coffee/*.coffee")
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(coffee(bare: true))
  .pipe(sourcemaps.write("./"))
  .pipe gulp.dest("./#{appPath}js/")

gulp.task "min", ->
  gulp
  .src("./#{appPath}css/*.css")
  .pipe(csso(true))
  .pipe gulp.dest("./#{appPath}css/")
  gulp
  .src("./#{appPath}js/*.js")
  .pipe(uglify(
    mangle: false
    preserveComments: isLicenseComment
  ))
  .pipe gulp.dest("./#{appPath}js/")
  gulp
  .src("./#{appPath}img/sprite-*")
  .pipe(pngmin())
  .pipe gulp.dest("./#{appPath}img/")

gulp.task "bower", ->
  bower()
  .pipe gulp.dest("./bower_components/")

gulp.task "copy", ->
  gulp
  .src([
    "bower_components/jquery/dist/jquery.min.*"
    "bower_components/box-sizing-polyfill/boxsizing.htc"
    "bower_components/modernizr/modernizr.js"
  ])
  .pipe gulp.dest("#{appPath}js/vendor/")

gulp.task "modernizr", ->
  gulp
  .src("#{appPath}js/vendor/modernizr.js")
  .pipe(uglify(
    mangle: false
    preserveComments: isLicenseComment
  ))
  .pipe(rename(suffix: ".min"))
  .pipe gulp.dest("#{appPath}js/vendor/")

gulp.task "fa-font", ->
  gulp
  .src(["bower_components/font-awesome/fonts/*"])
  .pipe gulp.dest("#{appPath}fonts/")

gulp.task "fa-scss", ->
  gulp
  .src(["bower_components/font-awesome/scss/_*.scss"])
  .pipe gulp.dest("scss/font-awesome/")

gulp.task "concat", ->
  gulp
  .src([
    "js/plugins-base.js"
    # "bower_components/soundmanager/script/soundmanager2-jsmin.js"
  ])
  .pipe(concat("plugins.js"))
  # .pipe(uglify(
  #   mangle: false
  #   preserveComments: isLicenseComment
  # ))
  .pipe gulp.dest("#{appPath}js/")

gulp.task "watch", ->
  gulp.watch "*.sketch", ["symbols"]
  gulp.watch "scss/*.scss", ["compass"]
  gulp.watch "coffee/**/*.coffee", ["coffee"]
  gulp.watch "#{appPath}css/*.css", ["prefixer"]

# gulp.task "default", [
#   "concat"
#   "watch"
# ]

gulp.task "default", (callback) -> runSequence(
  'bower'
  [
    'copy'
    'modernizr'
    'fa-font'
    'fa-scss'
    'concat'
  ]
  'watch'
  callback
)
