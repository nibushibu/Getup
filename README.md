# Getup ✊

Riot.js を使って静的な HTML や SPA を制作するためのテンプレートです。

## 開発用コマンド一覧

### 開発用タスク
```bash
npm run start
```

#### IE11 向けに Babel によるトランスパイル工程を追加する場合

```bash
npm run start-babel
```

### プロダクションファイルのビルド

```bash
npm run build
```

#### IE11 向けに Babel によるトランスパイル工程を追加する場合

```bash
npm run build-babel
```

## コーディングスタイルガイドライン（🚧 整備中 🚧）

### HTML/CSS 

HTML と CSS は原則 [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#Protocol) に準拠します。

- [Google HTML/CSS Style Guide（英語）](https://google.github.io/styleguide/htmlcssguide.html#Protocol)

主に意識する点は以下の通りです。

- すべて小文字
- 半角スペース2つでのインデント
- CSSのクラス名は半角英数字小文字のケバブケース（ハイフン区切り）

#### CSS 命名規則

ITCSS と BEM に基づいて命名します。

#### IDセレクター、要素セレクターは基本使わず、スタイルの詳細度は原則 010 を保つ。

CSS ファイルに記述するスタイルは、極力 010 （クラス1つ分）の詳細度を保ちましょう

##### 詳細度が 010 になる記述例

```css
.c-class-name { }
.c-class-name > * { }
.c-class-name > * + * { }
```

#### ステート（状態変化）によるスタイルの変化は属性値を使う

```css
.c-button { }

/* data 属性値 */
.c-button[data-active] { }

/* WAI-ARIA 属性値 */
.c-button[aria-selected="true"] { }
```

##### 理由

### JavaScript

[JavaScript Standard Style](https://standardjs.com/readme-ja.html) に準拠して考えます。

- [JavaScript Standard Style（日本語）](https://standardjs.com/readme-ja.html)

### デフォルトでマージンを持つ要素

- `h1`
- `h2`
- `h3`
- `h4`
- `h5`
- `h6`
- `ul`
- `ol`
- `p`