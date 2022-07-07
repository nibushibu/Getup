# Getup ✊

Riot.js を使って静的な HTML や SPA を制作するためのテンプレートです。

## 開発用コマンド一覧

### 開発用タスク
```bash
npm run start
```

### プロダクションファイルのビルド

```bash
npm run build
```

## コーディングスタイルガイドライン（🚧 整備中 🚧）

### HTML/CSS 

HTML と CSS は原則 [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#Protocol) に準拠することを目指します。

- [Google HTML/CSS Style Guide（英語）](https://google.github.io/styleguide/htmlcssguide.html#Protocol)

主に意識する点は以下の通りです。

- すべて小文字
- インデントは半角スペース2つ
- CSSのクラス名は半角英数字小文字のケバブケース（ハイフン区切り）

#### CSS 命名規則

ITCSS と BEM に基づいて命名します。

ITCSS のレイヤー名は意味性をよりわかりやすく以下のようにアレンジしています。

|レイヤー名|役割|
|---|---|
|Setting|CSS 変数などを定義|
|Tools|Mixin などを定義するレイヤー（SASS を使っていないので未使用）|
|Generic|リセット CSS（sanitize.css）|
|Elements|デフォルトの要素セレクタスタイルなどを定義|
|Objects|サイトのデザインに依存しない汎用的なクラスを定義|
|Components|サイトのデザインに直結したクラスを定義|
|Utilities|緊急的な上書き用のユーティリティクラスを定義|

#### IDセレクター、要素セレクターは基本使わず、スタイルの詳細度は原則 010 を保つ。

CSS ファイルに記述するスタイルは、極力 010 （クラス1つ分）の詳細度を保つことで、記述順でスタイルの優先順をコントロールします（それが ITCSS の基本的な方法論です）。
（ただし、後述のステート管理に関しては例外となります）

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

- BEM の Modifier で表現するよりも、ステートが明示的になる。
- ステートによる変化はほとんどの場合、ステートではない Modifier クラスのスタイルよりも優先されるべきであることが多い。
- Getup で利用している Riot.js では、class 属性値の中に設定する文字列を変化させるよりも、任意の属性値をつけるほうが幾分シンプルに書けるため

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

#### 余白は上と左に統一する

原則として、 **余白は文章が進む方向と逆の方向に持つ** 形に統一します。

余白とは隣り合う要素の関連性や距離を表しますが、要素自身が余白の設定を持つ場合、そのほとんどはコンテキスト上の自分のひとつ前の要素に対する距離（関連度）を表すことがほとんどです。

たとえば、見出しは通常、本文よりも大きい余白を持ちますが、それは前の要素から新しい章に入った事を示すためです。（見出しは本文よりも前の要素に対する距離・関連度が大きい）

余白が前の要素に対する距離・関連度を表すのであれば、コンテキストの方向と逆（上）に余白を持つほうが自然です。

逆に、`p` タグでの余白を下に持つとどうなるかも考えてみます。

`p` タグの後に、また `p` タグが続く場合と、新たに `h2` などの見出しタグが続く場合を比較すると、通常であれば後者のほうが `p` タグの後の余白は大きくなる事が期待されます。

しかし、`p` 自身は自分のあとにどのような要素が入るかを知ることはできないため、余白を下（コンテキストの進む方向）に取ってしまうと、`p` → `p` よりも `p` → `h2` の間のほうが余白が大きくなる、という期待される表示を実現する事ができません。

以上のことから、余白は原則、コンテキストの方向と逆（つまり上や左）にとることが自然であると考えます。
