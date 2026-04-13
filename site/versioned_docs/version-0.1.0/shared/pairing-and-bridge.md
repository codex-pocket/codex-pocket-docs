---
title: pairing と bridge
description: iPhone と Mac をつなぐ pairing と bridge の役割分担を整理します。
---

# pairing と bridge

CodexPocket では、iPhone は Codex を操作するための UI であり、実際の実行環境は Mac 側にあります。`pairing` と `bridge` は、その 2 つを安全かつ短時間で結びつけるための土台です。

## 役割分担

- `iPhone app`
  Host / Project の選択、thread の閲覧、Composer、skills、exec の UI を持ちます
- `macOS companion app`
  pairing QR、bridge 起動停止、Project 管理、logs を持ちます
- `bridge runtime`
  iPhone からの API 呼び出しを受け、Codex CLI、`codex app-server`、git の状態を中継します

## 初回リリース時の前提

- 接続は同一 LAN を前提にする
- primary setup path は native macOS companion app とする
- end-user には Node.js や npm を要求しない
- QR import を主導線とし、手入力は補助導線として扱う

## 初回 pairing の流れ

1. Mac 側で bridge を起動する
2. companion app から pairing QR または Pairing Code を表示する
3. iPhone 側で Host を追加する
4. bridge の疎通確認と Project catalog 収集を完了させる
5. Project ごとの thread / branch / skills / commands を iPhone 側で開ける状態にする

## bridge が持つべきこと

- `GET /v1/health` で到達性を確認できる
- Projects、Threads、Branches、Skills、Commands、Exec の API を公開する
- transcript history と live event を iPhone 側が扱いやすい形で返す
- token、Authorization header、pairing payload などの秘匿情報をログへ残さない

## 端末再登録と複数 Mac の扱い

- 同じ Mac の再 pair は `bridgeID` ベースで既存 Host を更新する
- 別の Mac を追加するときは新しい Host として共存させる
- Host 保存前に bridge 検証を完了させ、整合しない設定は黙って上書きしない

## 今後ここに増やすもの

- QR import と manual entry の画面差分
- Host data collection 中の状態遷移
- LAN 前提から relay へ拡張するときに変わる点

## 関連ページ

- [iPhone の初期セットアップ](../iphone/getting-started)
- [Mac の初期セットアップ](../mac/getting-started)
- [thread workflow](./thread-workflow)
