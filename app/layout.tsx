import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NullChat - Secure P2P Chat | WebRTC Messaging | No Server Storage',
  description: 'Free open-source peer-to-peer chat app with WebRTC. Messages stored in memory only, self-destruct timers, no accounts required. Built by Ares.',
  keywords: ['p2p chat', 'webrtc chat', 'peer to peer messaging', 'ephemeral chat', 'private messaging', 'secure chat', 'no server chat', 'memory only chat', 'self-destructing messages', 'anonymous chat', 'nextjs chat', 'typescript chat', 'open source chat'],
  authors: [{ name: 'Ares' }],
  creator: 'Ares',
  publisher: 'NullChat',
  manifest: '/manifest.json',
  metadataBase: new URL('https://nullchat.pages.dev'),
  alternates: {
    canonical: 'https://nullchat.pages.dev',
  },
  openGraph: {
    title: 'NullChat - Secure P2P WebRTC Chat',
    description: 'Free peer-to-peer chat with WebRTC. No servers, no storage, no accounts. Messages vanish when you close the tab.',
    url: 'https://nullchat.pages.dev',
    siteName: 'NullChat',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/landingpage.png',
        width: 1200,
        height: 630,
        alt: 'NullChat - Secure P2P Chat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NullChat - Secure P2P WebRTC Chat',
    description: 'Free peer-to-peer chat with WebRTC. No servers, no storage, no accounts.',
    images: ['/assets/landingpage.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body suppressHydrationWarning>
        <div className="ghost-wisp ghost-right">⬛</div>
        <div className="ghost-wisp ghost-left">⬛</div>
        {children}
      </body>
    </html>
  )
}
