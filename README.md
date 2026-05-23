# ∅ NullChat

### Your messages dissolve into nothing

**True peer-to-peer chat where messages travel directly between users.**  
No servers storing or reading your conversations. Everything exists only in memory and disappears when you close the tab.

Built by [Ares](https://www.linkedin.com/in/kishann23/) · [Reddit](https://www.reddit.com/user/imurares/)

---

## Quick Start (Local Dev)

```bash
git clone <your-repo>
cd nullchat
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy to Vercel (Recommended — Free)

```bash
npm install -g vercel
npm run build
vercel --prod
```

## Deploy to Cloudflare Pages (Free)

```bash
npm run build
npx wrangler pages deploy out --project-name nullchat
```

## Deploy to Netlify (Free)

```bash
npm run build
npx netlify deploy --prod --dir=out
```

---

## Signaling Server

NullChat uses WebRTC for P2P connections. The signaling server (Cloudflare Workers) only helps establish connections — it never sees message content.

The default workers are already configured. To deploy your own:
1. Edit `cloudflare-worker/wrangler.toml` — change the worker name
2. `cd cloudflare-worker && npm install && wrangler deploy`
3. Update URLs in `lib/cloudflare-workers-pool.ts` and `lib/server-config.ts`

---

## Tech Stack

- **Frontend:** Next.js 15, React, TypeScript
- **P2P:** simple-peer (WebRTC), PeerJS (fallback)
- **Signaling:** Cloudflare Workers
- **Deployment:** Static export

---

MIT License · Based on [GhostChat](https://github.com/Teycir/GhostChat) by Teycir
