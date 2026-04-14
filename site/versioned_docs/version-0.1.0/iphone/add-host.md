---
title: Host を追加する
description: Mac を iPhone から使えるように Host として追加するページです。
---

やることはシンプルで、Mac に出した QR を iPhone で読むだけです。最初の 1 台は、このやり方がいちばん速くて確実です。

CodexPocket では、iPhone から見に行く Mac を `Host` と呼びます。

| Mac 側 | iPhone 側 |
| --- | --- |
| ![Mac の Pairing 画面](/img/docs/pairing-mac.jpg) | ![iPhone の QR 追加画面](/img/docs/pairing-iphone.jpg) |

## おすすめの追加方法

1 台目の Host は、空の画面に出る `QR から追加` から始めるのが最短です。すでに Host を登録済みなら、左上のサイドバーから `ホスト` を開き、右上の `+` から同じ追加導線に入れます。

1. 初回は空の画面で `QR から追加` を押す
2. 2 台目以降は左上のサイドバーから `ホスト` を開き、右上の `+` で `QR から追加` を選ぶ
3. Mac の Pairing 画面に出ている QR を読み取る
4. 読み取り結果を確認して `Host として保存` を押す

保存すると、iPhone 側で次の初回設定が自動で始まります。

- Bridge の接続確認
- Project の取り込み
- 最初の workspace の準備
- Host の保存完了

## 手入力で追加する場合

QR を使えないときは `手入力で追加` も使えます。必要になるのは主に次の情報です。

- 表示名
- Bridge Host または直接 Bridge URL
- Bearer Token

手入力は、接続先を細かく調整したいときや、QR を読み取れないときの補助手段として考えると分かりやすいです。

## 追加前に確認できること

- `接続テスト` で Mac に届くか確かめられる
- 保存後のトークンは Keychain に安全に保存される
- Host は複数登録できる
