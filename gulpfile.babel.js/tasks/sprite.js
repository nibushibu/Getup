let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();
let fs = require('fs');
let path = require('path');

// SpriteSmithで使うディレクトリ取得関数
let getFolders =  dir => {
  return fs.readdirSync(dir)
  .filter( file => {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });
}

// SpriteSmith
gulp.task('sprite', () => {
  var folders = getFolders('sprite');

  folders.map( folder => {
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
      gulp.dest('css').on('end', () => {
        console.log('complete sprite task');
      })
    );
  });
});
