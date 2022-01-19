# flowchaat

Zoomのコメントをニコ○○動画風にデスクトップ上に透過表示するアプリ一式

## 構成図

![構成図](https://github.com/jp7eph/flowchaat/blob/images/flowchaat_diam.png)

## 使用方法

### 動作環境・前提

- 公開MQTTブローカ `mqtt.techin.jp7eph.net` に対して疎通性があること。プロキシ環境下は動作保証外。

pingコマンドによる疎通性確認方法

```shell
ping mqtt.techin.jp7eph.net
```

### ダウンロード

1. [リリースページ](https://github.com/jp7eph/flowchaat/releases) から最新のリリースを参照し、自分のOSに合わせたZIPファイルをダウンロードする。

### アプリ実行方法

#### for Windows

1. ダウンロードしたZIPを解凍し、 `flowchaat.exe` を実行する。
1. 実行時に下記ダイアログが表示された場合は `詳細情報` を選択し、 `実行` を選択する。
1. アプリが起動する。

![win実行時警告画面1](https://github.com/jp7eph/flowchaat/blob/images/win_exec_warn_dialog.png)
![win実行時警告画面2](https://github.com/jp7eph/flowchaat/blob/images/win_exec_option.png)

#### for Mac

1. ダウンロードしたZIPを解凍し、 `flowchaat` を実行する。
1. 実行時に下記エラーが表示された場合は、 `システム環境設定 > セキュリティーとプライバシー` から `このまま開く` を選択する。
1. アプリが起動する。

![mac実行時警告画面](https://github.com/jp7eph/flowchaat/blob/images/mac_exec_warn_dialog.png)
![macセキュリティオプション](https://github.com/jp7eph/flowchaat/blob/images/mac_security_option.png)

### 動作確認方法

**2022/1/25 23:59(日本時間)** までテスト字幕が流れるようにしています。

アプリを起動して `こちらはテスト字幕です` という文字が画面上を流れればOK。

### アプリ終了方法

タスクバーにあるアイコン(吹き出しが3つ重なったアイコン) を右クリックし、 `終了` を選択する。

### アンインストール方法

レジストリ等に登録していないため、ダウンロードしたZIPファイルを削除するだけ。
