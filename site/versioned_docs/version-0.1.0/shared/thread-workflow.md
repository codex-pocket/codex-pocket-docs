---
title: thread workflow
description: Project 選択から thread 再開、follow-up、exec までの共通フローを整理します。
---

# thread workflow

thread workflow は、iPhone だけでも、Mac だけでも完結しません。Project は Mac 側の workspace を基準にしつつ、日常の閲覧と follow-up は iPhone 側で行うため、両方の役割を前提に見取り図を持つ必要があります。

## 基本フロー

1. iPhone 側で Host を開く
2. 対象 `Project` を選ぶ
3. 既存 `Thread` を再開するか、新規 thread を始める
4. transcript history と live output を見ながら追加の turn を送る
5. 必要に応じて branch 切替や `exec` を実行する

## thread と exec の使い分け

- `Thread`
  会話を継続しながら Codex に作業させる主導線です
- `Exec`
  one-shot の実行を別ストリームで流したいときの導線です

## follow-up の考え方

- `queue`
  current run 完了後に次の turn を順次送ります
- `steer`
  実行中の turn に追加指示を送ります

## このページで今後詳しくする項目

- transcript history と live event の統合表示
- branch 切替が Thread / Exec の作業対象にどう反映されるか
- review / approval の UI をどこで挟むか
- git 未初期化 workspace の初期化導線

## 関連ページ

- [pairing と bridge](./pairing-and-bridge)
- [iPhone から始める](../iphone/)
- [Mac から始める](../mac/)
