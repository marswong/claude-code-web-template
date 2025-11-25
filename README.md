# gemini-web-template

The most reliable web template for Gemini.

## Usage

```bash
npx degit marswong/claude-code-web-template#gemini app
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

- To avoid unknown issues, only use `next`, `shadcn`, `lucide-react` and `tailwindcss@3`, don't introduce any other package
- Build for model `gemini-3-pro-preview`, so all package versions and documentations should be published before the date `20250101`
- Leverage local MCP servers to search for resources

## Reference

- [next](https://nextjs.org)
- [shadcn](https://ui.shadcn.com)
- [lucide-react](https://lucide.dev/guide/packages/lucide-react)
- [tailwindcss](https://v3.tailwindcss.com)
