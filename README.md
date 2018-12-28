# Getup ✊

Webサイト制作のためのボイラープレート

## npm / yarn スクリプトについて

package.jsonに記載されているスクリプト

### start タスク

```bash
yarn start
```

後述の`watch`タスクと`server`タスクを実行

### watch タスク

```bash
yarn watch
```
以下の監視タスクを実行

タスク名 | 概要 | 入力元 | 出力先
---|---|---|---
watch-riot | Riot.jsのタグファイルをjsファイルに変換 | /src/riot/** | /dist/js/tags.js
watch-js | BubleでJSファイルをトランスパイル | /src/js/** | /dist/js
watch-scss | SASS（.scss）をCSSにコンパイルしPostCSSで変換 | /src/scss/** | /dist/css
watch-html | EJS（.ejs）をhtmlにコンパイル。<br>ejsのコンパイルにはgulp-ejsを利用（gulpfile.babel.js/tasks/html.jsを参照） | /src/ejs/** | /dist

#### CSSについて

SCSSをCSSにコンパイルしたあと、PostCSSでAutoPrefixerなどの変換をしてものをdistディレクトリに出力する設計になっています。

PostCSSの設定は`postcss.config.js`の内容を参考してください。

#### Riot.jsタグについて

設定は`riot.config.js`を参照。

### server タスク

`dist`ディレクトリを http://localhost:3000 に公開。

### copy タスク

必要なJSライブラリのファイルなどをdistにコピー

```bash
yarn copy
```

以下のタスクを実行

タスク名 | 概要
---|---
copy | JSライブラリを1ファイルにまとめるほか、必要な画像ファイルなどのコピー

コピータスクの詳細は `tasks/copy.js` を参照）

### min タスク

JS、CSS、画像のminify（圧縮）。
…といいながら、現在、CSSとJSはコンパイル・トランスパイル時にMinifyする設定にしているため、画像の圧縮のみ。

タスク名 | 概要
---|---
min-image | dist/imgディレクトリ内の画像を圧縮。ファイルをそのまま上書きするので念のため注意。

## 設定ファイルについて

プロジェクトによっては、コンパイル後のCSSなどの出力先を変更することがあると思います。
その際に

## package.jsonの設定

```js
  "config": {
    "distDir": "dist"
  },
```
**distDir** = SCSSのコンパイル後のCSSの出力先。


`task/copy.js`

```js
// concat javascript plugins
concat([
  'node_modules/html5-boilerplate/dist/js/plugins.js',
  // ...中略...
], 'dist/js/vendors.js')
```
**concat()** = 第一引数で配列として渡したパスを第二引数のパス（vendors.js）にまとめるコマンド。JSプラグインなどは`node_modules`からこのコマンドで1ファイルにまとめてコピーしています。

## Riot.js

```js
export default {
  from: 'src/riot',
  to: 'dist/js/tags.js',
  type: 'buble',
  style: 'myCssParser'
}
```

**from** = Riotタグファイルの在り処<br>
**to** = RiotタグファイルをまとめてJSにコンパイルしたファイルの出力先