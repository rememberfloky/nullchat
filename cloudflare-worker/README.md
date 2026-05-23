# NullChat Signaling Server (Cloudflare Workers)

Free PeerJS signaling server using Cloudflare Workers + Durable Objects.
Handles WebRTC handshakes — never sees message content.

## Step 1 — Login to Cloudflare

```bash
cd cloudflare-worker
npm install
npx wrangler login
```

This opens your browser to authenticate. You need a free Cloudflare account.

## Step 2 — Deploy

```bash
npx wrangler deploy
```

Output will show your live URL:
```
✅ Deployed: https://nullchat-signaling.YOUR-SUBDOMAIN.workers.dev
```

## Step 3 — Update NullChat to use your worker

Edit `lib/cloudflare-workers-pool.ts`:
```
wss://nullchat-signaling.YOUR-SUBDOMAIN.workers.dev/peerjs/peerjs
```

Edit `lib/server-config.ts`:
```
host: 'nullchat-signaling.YOUR-SUBDOMAIN.workers.dev'
```

Then rebuild: `npm run build`

## Free Tier Limits

- 100,000 requests/day
- Durable Objects: 1M reads + 1M writes/day
- Global edge network, zero cold starts
- No credit card needed

## How It Works

```
User A ──── WebSocket ────► Cloudflare Worker ◄──── WebSocket ──── User B
               (SDP offer/answer exchange only — no messages)
                    │
                    ▼
         Direct P2P connection established
         (Worker no longer involved)
```
