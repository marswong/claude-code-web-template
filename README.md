# claude-code-web-template

The most reliable web template for Claude Code.

## Usage

```bash
npx degit marswong/claude-code-web-template app
cd app
npm install
npm run dev
```

for realtime preview:
```bash
npm run build
npm start
```

port is set to `3000` by default, to set a custom port, please add the `--port` args:
```bash
npm start -- --port 1989
```

## Philosophy

- To avoid unknown issues, only use `next@16`, `better-sqlite3`, `shadcn`, `lucide-react`, `openai` and `tailwindcss@3`, don't introduce any other package
- Build for model `claude-opus-4-5-20251101`, so all package versions and documentations should be published before the date `20251101`

## Reference

- [next](https://nextjs.org)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- [openai](https://github.com/openai/openai-node)
- [shadcn](https://ui.shadcn.com)
- [lucide-react](https://lucide.dev/guide/packages/lucide-react)
- [tailwindcss](https://v3.tailwindcss.com)
