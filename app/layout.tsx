import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Etsy Keyword Rank Tracker — Track Your Etsy Search Rankings',
  description: 'Monitor where your Etsy listings rank for target keywords. Track competitor movements and get optimization strategies to grow your shop.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="101c5df2-c62e-4eaa-a03c-b6bac0d48377"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
