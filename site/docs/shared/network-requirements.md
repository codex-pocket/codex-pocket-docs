---
title: 接続に必要なネットワーク条件
description: CodexPocket を接続するためのネットワーク前提を説明します。
---

CodexPocket の初回設定では、Mac と iPhone が同じローカルネットワークから見える必要があります。設定後に Managed Relay 情報が保存された Host は、ローカル接続に届かないとき Relay へ自動で切り替わります。

## 基本条件

- 初回設定時は Mac と iPhone が同じネットワークにいる
- Mac 側の Bridge が起動している
- iPhone でローカルネットワークが許可されている
- QR を読むなら iPhone でカメラが許可されている
- Mac がスリープしていない
- 別 Wi-Fi やモバイル回線で使う Host には Managed Relay 情報が保存されている

## 接続の仕組み

CodexPocket は、主に次の 3 つで Mac を見つけます。

- Bonjour
- ローカル URL
- Managed Relay

ペアリングで iPhone に渡されるのは、ローカル接続候補、接続用トークン、Managed Relay の接続情報です。通常は意識しなくて構いませんが、仕組みとしては「同じネットワーク内で見える Mac を探し、届かなければ Relay 経由でつなぐ」と考えると分かりやすくなります。

手入力で追加するときは、`Bridge URL` に `http://<bridge-host>:43123` の形を入れるのが基本です。

## つながりやすいネットワーク

- 自宅の Wi-Fi
- 端末同士の通信が許可されている社内 LAN
- Mac と iPhone が同じセグメントにいる検証用ネットワーク
- Managed Relay 情報が保存済みの Host を使う別 Wi-Fi やモバイル回線

Wi-Fi 名が同じでも、端末同士の通信が遮断されているネットワークではローカル接続に届きません。Managed Relay 情報が保存済みなら、その場合も Relay に切り替わります。

## つながりにくくなる例

- Mac と iPhone が別の Wi-Fi にいる
- Managed Relay 未設定のまま iPhone がモバイル回線側に逃げている
- ゲスト Wi-Fi などで端末間通信が制限されている
- VPN やネットワーク設定の影響で Bonjour やローカル URL に届かない
- 初回設定前に iPhone 側でローカルネットワークを拒否している
- Mac がスリープしている
- Bridge が止まっている
- Host に Managed Relay 情報が保存されていない

## このページで扱わない接続

- Managed Relay を使わないインターネット越しの直接接続
- 将来のバックエンド構成

まずは「初回設定は同じ場所の同じネットワークで行い、その後は Relay へ自動切り替えできる」と考えるのが基本です。うまくいかないときも、Host に Managed Relay 情報が保存されているかを先に見ると原因を切り分けやすくなります。
