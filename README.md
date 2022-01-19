# flowchaat

Zoomのコメントをニコ○○動画風にデスクトップ上に透過表示するアプリ一式

## 構成図

![構成図](https://github.com/jp7eph/flowchaat/blob/images/flowchaat_diam.png)

## 使い方

### 動作環境・前提

- 公開MQTTサーバ `mqtt.techin.jp7eph.net` に対して疎通性があること。プロキシ環境下は動作保証外。

pingコマンドによる疎通性確認方法

```shell
ping mqtt.techin.jp7eph.net
```

### ダウンロード〜実行

1. [リリースページ](https://github.com/jp7eph/flowchaat/releases) から最新のリリースを参照し、自分のOSに合わせたZIPファイルをダウンロードする。
1. ダウンロードしたZIPを解答し、その中にある `flowchaat` (Windowsの場合は `flowchaat.exe`) を実行する。

### 動作確認方法

**2021/1/25 23:59(日本時間)** までテスト字幕が流れるようにしています。

アプリを起動して `こちらはテスト字幕です` という文字が画面上を流れればOK。

### アプリ終了方法
