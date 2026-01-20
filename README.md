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

- To avoid unknown issues, only use `next@16`, `better-sqlite3`, `shadcn`, `lucide-react` and `tailwindcss@3`, don't introduce any other package
- Build for model `claude-opus-4-5-20251101`, so all package versions and documentations should be published before the date `20251101`
- Exception: The `openai` package is included for AI-related features development

## OpenAI Integration

This template includes the OpenAI JS SDK for AI-related features development.

### Setup

Set your OpenAI API key as an environment variable:

```bash
export OPENAI_API_KEY='your-api-key-here'
```

Or create a `.env.local` file:

```
OPENAI_API_KEY=your-api-key-here
OPENAI_MODEL=gpt-4  # Optional, defaults to gpt-4
```

### Usage

Import the OpenAI client from the lib directory:

```javascript
import openai from '@/lib/openai';

// Example: Create a chat completion
const completion = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: 'Hello!' }],
});
```

### Example API Route

An example chat API route is included at `src/app/api/chat/route.js`:

```bash
# POST request to /api/chat
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, how are you?"}'
```

## Reference

- [next](https://nextjs.org)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- [shadcn](https://ui.shadcn.com)
- [lucide-react](https://lucide.dev/guide/packages/lucide-react)
- [tailwindcss](https://v3.tailwindcss.com)
