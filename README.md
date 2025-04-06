# Next.js Boilerplate

An opinionated Next.js boilerplate.

**Features**

- Next.js
- TypeScript
- Tailwind CSS
- Stylelint
- Husky

## How to use

```bash
npx create-next-app --example https://github.com/keinobi/nextjs-boilerplate --use-npm myapp
```

## Notes

- `src/app/manifest.json` を意図的に `_manifest.json` としています。これは現在のNext.js(v15.2)ではルートを移動する度にmanifestが読み込まれるので、devでのログを抑制するためです。
