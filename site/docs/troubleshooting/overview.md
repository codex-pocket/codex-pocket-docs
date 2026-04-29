---
title: 困ったときは
slug: /troubleshooting/
description: Pairing、Project 表示、再接続、ログ確認で困ったときの入口ページです。
---

CodexPocket は、Mac で動く `CodexPocketMac` と、iPhone の `CodexPocket` が組み合わさって動きます。Mac の前を離れて使う場面でも、困りごとの多くは次の 4 つに分かれます。

- `Pairing` が完了しない
- `Project` が表示されない
- いったん使えていた `Host` に再接続できない
- どこを見れば原因が分からない

まずは「Mac 側の Bridge が動いているか」と「Host に Managed Relay 情報が保存されているか」を確認すると、切り分けが早くなります。初回設定や Relay 未設定の Host では、iPhone が同じネットワークから見に行けることも確認してください。

## 症状から探す

| 症状 | 読むページ |
| --- | --- |
| QR が読めない、保存後に止まる、認証に失敗する | [Pairing できないとき](./cannot-pair) |
| Pairing は済んだのに Project が見えない | [Project が表示されないとき](./cannot-see-projects) |
| 以前つながっていた Host に戻れない | [再接続と再 Pairing](./reconnect-host) |
| まず Mac 側のログと検出状態を見たい | [ログを確認する](./check-logs) |
| LAN / Relay や接続条件を見直したい | [接続に必要なネットワーク条件](../shared/network-requirements) |

## 先に確認すると早い 5 項目

1. Mac の `一般` で `ランタイム` が `実行中` になっている
2. Mac の `一般` に `Bridge の前提条件を満たしていません` や legacy launchd の警告が出ていない
3. Mac の `ペアリング` で QR を表示できる
4. iPhone の `ホスト` で対象 Host に `接続テスト` を実行できる
5. 初回設定や Relay 未設定の Host では、Mac と iPhone が同じネットワークにいる

Managed Relay が保存済みの Host は、外出先や別ネットワークでも Relay へ自動で切り替わります。切り替わらない場合は、Mac 側の CodexPocketMac が起動しているか、Host に Relay 情報が保存されているかを確認してください。

## 症状別の入口

### Pairing が終わらない

次のようなときは、まずこちらを見てください。

- QR を読み取れない
- `Host として保存` のあとに設定が止まる
- `認証に失敗しました` や `Bridge URL または Token が未設定です` と出る

[Pairing できないとき](./cannot-pair)

### Project が見えない

次のようなときに向いています。

- Pairing は済んだのに `プロジェクト` が空のまま
- いつも Mac で使っている workspace が iPhone に出てこない
- Host は見えるが Thread へ進めない

[Project が表示されないとき](./cannot-see-projects)

### つながっていた Host に再接続できない

次のようなときはこちらです。

- 以前は使えていたのに `切断` になった
- ライブ更新が止まった
- Mac 側の設定を変えてからつながらなくなった

[再接続と再 Pairing](./reconnect-host)

### まずログを見たい

Mac 側で詳しく確認したいときは、次のページから入るのが早いです。

- `Codex CLI` や `git` の検出状態を見たい
- `Bridge` が起動しない理由を知りたい
- `stdout` と `stderr` の保存先を知りたい

[ログを確認する](./check-logs)

## 先に見るとよい場所

- Mac アプリの `一般`
- Mac アプリの `ログ`
- Mac アプリの `詳細`
- iPhone の `ホスト`

CodexPocket は Mac 側に本体があるので、迷ったら先に Mac アプリを見るのが近道です。

## 解決しない場合

ここまで確認しても解決できない場合は、公開可能な不具合報告は [GitHub Issues](https://github.com/codex-pocket/codex-pocket-docs/issues) へ、非公開の問い合わせは [contact form (English only)](https://forms.gle/FCzeECQAWNvr3UD8A) よりご連絡ください。

## 関連ページ

- [接続に必要なネットワーク条件](../shared/network-requirements)
- [Pairing する](../shared/pairing-and-bridge)
- [接続を確認する](../shared/check-connection)
- [Mac を準備する](../mac/)
- [iPhone アプリを使い始める](../iphone/)
