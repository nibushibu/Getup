# Getup ✊

Webサイト制作のためのボイラープレート

## コマンド一覧

### 開発用タスク
```bash
yarn run start
```

### プロダクションファイルのビルド

```bash
yarn run start
```

## 開発サーバーの設定について

SPAを想定して、MAMPなどで用意されたローカルのサーバー環境に接続する前提の設定になっています。
`package.json`の`scripts`の以下の行をローカル環境に合わせて設定してください。

### 初期状態

```
"server": "browser-sync start --proxy 'localhost:8104' --files 'dist/**'"
```

### 任意のローカル環境を設定

```
"server": "browser-sync start --proxy 'ローカルサーバーを設定' --files 'dist/**'"
```

### 別のローカル環境を参照せずに、distディレクトリを開く場合

```
"server": "browser-sync start --server 'dist' --files 'dist/**'"
```

この場合、`dist/.htaccess`などは機能しません。
