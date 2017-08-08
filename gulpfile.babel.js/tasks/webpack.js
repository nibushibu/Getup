const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const config = require('../config');
const $ = require('gulp-load-plugins')();


// webpackの設定ファイルの読み込み
const webpackConfig = require("../../webpack.config");

// タスクの定義。 ()=> の部分はfunction() でも可
gulp.task("webpack", () => {
  // return webpackStream(webpackConfig, webpack)
  return gulp.src('js/**/main.js')
  .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
  .pipe(webpackStream(webpackConfig, webpack))
  .pipe(gulp.dest(config.appPath + 'js'));
});
