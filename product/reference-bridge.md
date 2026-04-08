# JS Reference Bridge

`mac-cli` を使った JS reference path の手順です。shipping path ではなく、native Swift bridge との wire parity 比較や legacy CLI 動作確認が必要なときだけ使います。

## Prerequisites

- Node.js 20 以上
- `npm`
- `codex`

## Setup

```bash
cd /path/to/codex-pocket
npm --prefix mac-app/mac-cli install

node mac-app/mac-cli/bin/codex-pocket-mac.js init \
  --name "My Mac" \
  --config-dir "$PWD/build/codex-pocket" \
  --install-dir "$PWD/build/bin" \
  --remote-config "$PWD/build/codex-remote.env" \
  --no-launchd \
  --overwrite \
  --qr

node mac-app/mac-cli/bin/codex-pocket-mac.js project add \
  --config-dir "$PWD/build/codex-pocket" \
  --name "CodexPocket" \
  --working-directory "$PWD" \
  --session-name "codex-pocket" \
  --launch-command "codex"
```

## Run

```bash
node mac-app/mac-cli/bin/codex-pocket-mac.js serve \
  --config-dir "$PWD/build/codex-pocket"
```

## Verify

```bash
node mac-app/mac-cli/bin/codex-pocket-mac.js pair \
  --config-dir "$PWD/build/codex-pocket" \
  --json
```

期待結果:

- `version: 3` の pairing payload を返す
- `bridge.endpoints` に Bonjour と hostname ベースの local URL が入る
- `init --qr` を付けた場合は iPhone 取り込み用の ASCII QR を表示できる
