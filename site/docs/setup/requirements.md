---
title: はじめる前に必要なもの
description: セットアップ前にそろえておくものを確認するページです。
---

CodexPocket を使い始める前に、次のものをそろえてください。

## 必要な端末

- macOS 26 以降の Mac
- iOS 26 以降の iPhone

現在の iPhone アプリは iPhone 専用です。iPad は対象外です。

## Mac 側で必要なもの

- 普段どおり Codex を使える Mac 環境
- `CodexPocketMac`

CodexPocket は、Mac 上の Codex 実行環境を iPhone から操作します。つまり、Mac 側で Codex が動くことが前提です。

### `codex` がターミナルから使えること

ターミナルを開き、まず次を実行します。

```bash
codex --version
codex
```

確認したいのは次の 2 点です。

- `codex --version` でバージョンが表示される
- `codex` を実行すると Codex CLI が起動する

起動だけ確認したい場合は、画面が開いた時点で `Ctrl+C` で終了して構いません。

続けて、CodexPocketMac が使うサブコマンドも確認します。

```bash
codex app-server --help
```

このコマンドがエラーなく表示されれば、CodexPocketMac から `codex` を呼び出せる可能性が高い状態です。詳しい確認手順は [Codex CLI をインストールする](../mac/install-codex-cli) にまとめています。

### `codex` が最新版か確認できること

`codex --version` で今のバージョンを確認したあと、導入元に応じて更新します。Homebrew で入れているか分からないときは、先に次を実行します。

```bash
which codex
```

`/opt/homebrew/Caskroom/...` や `/usr/local/Caskroom/...` を指していれば、Homebrew で入っている状態です。その場合は次で更新できます。

```bash
brew update
brew info codex
brew upgrade codex
codex --version
```

`brew info codex` でインストール済みと配布中のバージョンを見比べ、更新後に `codex --version` をもう一度実行します。Homebrew 以外で入れている場合は、最初に使った方法で更新したあと、同じく `codex --version` と `codex app-server --help` をやり直してください。

### 開きたい Project（作業フォルダ）が 1 件以上あること

ここでいう `Project` は、iPhone に表示される作業フォルダのことです。Mac の Codex App で開いている workspace、または `CodexPocketMac` の `プロジェクト` に手動追加した作業ディレクトリが Project になります。

- Codex App を使う場合は、開きたいフォルダが Codex App の workspace 一覧に入っていること
- `CodexPocketMac` の `プロジェクト` に、そのフォルダが見えていること

どのフォルダを Project にすればよいか迷うときは、「ふだん Codex との thread を続けているリポジトリ」や「iPhone から開いて続きを見たい作業フォルダ」を 1 件選べば十分です。追加方法は [Project を作成する](../mac/create-project) を見てください。

## Git を使う場合に必要なもの

次の機能を使いたい場合だけ `git` が必要です。

- 現在のブランチ表示
- ブランチ切り替え
- 新しいブランチ作成

Thread の閲覧や通常の依頼送信だけなら、Git がなくても使えます。

## ネットワークと権限

- 初回設定では、Mac と iPhone が同じローカルネットワークにいること
- iPhone でローカルネットワークへのアクセスを許可すること
- 別 Wi-Fi やモバイル回線で使う Host には Managed Relay 情報が保存されていること
- QR で追加する場合は、iPhone でカメラを使えること

## 最初にあると安心なもの

- `CodexPocketMac` の `プロジェクト` に 1 件以上見えていること
- `Bridge` が動いていること
- `ペアリング` 画面をすぐ開けること

Project が 1 件もないままでも Pairing 自体はできますが、接続した直後から使い始めたいなら 1 件見えているほうが分かりやすくなります。
