# Contributing

## Scope

- `product/` は実装判断の正本です
- `site/` は公開 docs site のソースです

## Rules

- product docs と公開 docs の責務を混ぜない
- 実装判断が変わる差分は、関連 repo のコード変更と同じタイミングで更新する
- backend / relay の内容に触れるときは関連 repo の設計文書とも整合させる

## Verification

```bash
cd site
npm ci
npm run build
```
