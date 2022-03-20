# flowchaat

Zoomのミーティングチャットをニコ○○動画風にデスクトップ上に透過表示するアプリ一式

## 構成図

![構成図](https://github.com/jp7eph/flowchaat/blob/images/flowchaat_diam.png)

## 動作環境・前提

- macOSまたはWindows環境の私有PCであること。会社PCは動作保証外であるとともに一切の責任を負いません。
- 公開MQTTブローカ `mqtt.techin.jp7eph.net` に対して疎通性があること。プロキシ環境下は動作保証外。

pingコマンドによる疎通性確認方法

```shell
ping mqtt.techin.jp7eph.net
```

## ダウンロード

[リリースページ](https://github.com/jp7eph/flowchaat/releases) から最新のリリースを参照し、自分のOSに合わせたZIPファイルをダウンロードする。

- Mac(x64): `flowchaat-mac-x64-x.x.x.zip`
- Win(x64): `flowchaat-win-x64-x.x.x.zip`  
※ `x.x.x` はリリースバージョンが入る。

## マニュアル

各OSでの操作マニュアルは以下のページを参照のこと。

- [Macユーザ向け操作マニュアル](./flowchaat_app/docs/mac-install.md)
- [Windowsユーザ向け操作マニュアル](./flowchaat_app/docs/windows-install.md)

## ディレクトリ構成

<!--
    treeコマンド実行時は ./out と ./node_modules を除外する。
    tree -d -L 2 -I out -I node_modules
 -->
```console
.
├── chrome_extension        // チャットリレー機能 Chrome拡張機能
└── flowchaat_app           // チャット投影アプリ
    ├── docs 
    ├── flowchaat.iconset   // アイコンセット
    └── src
```
