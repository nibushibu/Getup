var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')();
var fs = require('fs');
var path = require('path');

// SpriteSmithで使うディレクトリ取得関数
var getFolders = function (dir) {
  return fs.readdirSync(dir)
  .filter(function (file) {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });
}

// SpriteSmith
gulp.task('sprite', function () {
  var folders = getFolders('sprite');

  folders.map(function (folder) {
    var spriteData = gulp.src(folder + '/*.png', {cwd: 'sprite'})
    .pipe($.spritesmith({
      imgName: 'sprite-' + folder + '.png',
      imgPath:  '../img/sprite-' + folder + '.png',
      cssName: '_sprite-' + folder + '.css',
      algorithm: 'binary-tree',
      padding: 4,
      // cssFormat: 'scss',
      cssTemplate: 'templates/sprite.handlebars'
    }));

    spriteData.img.pipe(gulp.dest(config.appPath + 'img'));
    spriteData.css.pipe(
      gulp.dest('css').on('end', function(){
        console.log('complete sprite task');
      })
    );
  });
});
