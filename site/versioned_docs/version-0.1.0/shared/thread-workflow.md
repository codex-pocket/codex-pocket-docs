---
title: Project を開いて Thread を始める
description: Host 追加後に、iPhone から Project と Thread を開く流れをまとめます。
---

Host の追加が終わったら、次は iPhone から実際の作業に入ります。普段 Mac で開いている作業フォルダを `Project` として開き、その中の `Thread` を再開するか、新しく始めます。

![Project から Thread と Composer を経て作業ログを見る流れ](/img/docs/thread-workflow.svg)

## 基本フロー

1. `ホーム` または `プロジェクト` から対象の `Project` を選ぶ
2. 既存の `Thread` を開くか `新しい Thread` を押す
3. `作業ログ` と `回答` を見ながら進み具合を確認する
4. Composer から追加の指示を送る
5. 必要に応じて `Exec`、`Fork`、`ブランチ`、`スキル` を使う

## `Thread` と `Exec` の使い分け

- `Thread`
  会話の流れを残しながら作業を続けるときに使います
- `Exec`
  1 回だけ確認したいことを別枠で実行したいときに使います

迷ったら `Thread` を使えば十分です。`Exec` は、いまの流れを汚さずに単発で試したいときに向いています。

## 追加指示の送り方

- `キュー`
  今の実行が終わってから次の依頼を送ります
- `ステア`
  進行中の実行にそのまま追加指示を送ります

大きく割り込ませたくないときは `キュー`、その場で少し方向を変えたいときは `ステア` と考えると使い分けやすくなります。

## 接続が一時的に切れたとき

iPhone 側の表示が止まっても、Mac 側の Codex が作業を続けていることがあります。まずは次を試してください。

- `最新へ戻る` で末尾まで移動する
- 画面を開いたまま少し待つ
- `Project` や `Thread` を開き直す

## 関連ページ

- [Project を開く](../usage/open-project)
- [Thread を確認する](../usage/threads)
- [Branch / Skills / Exec を使う](../usage/branch-skill-exec)
