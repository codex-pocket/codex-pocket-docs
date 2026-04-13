---
title: iPhone の初期セットアップ
description: iPhone app 側から CodexPocket を使い始めるときの最短導線です。
---

# iPhone の初期セットアップ

このページは、iPhone app を入口に CodexPocket を使い始めるときの最短導線をまとめるための土台です。実際の画面キャプチャや手順詳細は今後足しますが、情報の置き場所はこの流れで固定します。

## 事前に Mac 側で用意されている前提

- macOS companion app が起動している
- bridge が開始済みで、pairing QR または手入力コードを表示できる
- 最初のリリースでは iPhone と Mac が同一 LAN 上にある

## iPhone 側の初回フロー

1. `Add Host` から QR import または手入力で Host を追加する
2. bridge 検証と Project catalog 収集が終わるまで待つ
3. 追加された Host を開き、対象 Project を選ぶ
4. thread 一覧、branch、skills、commands が取得できることを確認する

## pairing 完了後に触る主要画面

- `Projects`
  workspace ごとに thread / exec / branch の起点を切り替えます
- `Threads`
  既存 thread の再開と transcript の閲覧を行います
- `Composer`
  追加の turn、slash command、skill、exec を送ります
- `Settings`
  app language、theme、font size、follow-up behavior などを調整します

## このページで今後詳しくする項目

- QR import と手入力の差分
- Host 追加に失敗したときの再試行手順
- iCloud 同期された Host を別端末で復元するときの注意点
- branch 切替と `exec` を iPhone から始めるときの前提

## 関連ページ

- [iPhone から始める](../iphone/)
- [Mac 側で用意する内容](../mac/getting-started)
- [pairing と bridge の全体像](../shared/pairing-and-bridge)
