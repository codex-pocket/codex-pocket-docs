# Contributing

## Scope

- `site/` は公開 docs site のソースです

## Rules

- 非公開の要件、設計、審査素材、内部検証メモはこの公開 repo に置かない
- 実装判断が変わる差分は、関連 repo のコード変更と同じタイミングで更新する
- backend / relay の内容に触れるときは関連 repo の設計文書とも整合させる

## Verification

```bash
cd site
npm ci
npm run build
```
