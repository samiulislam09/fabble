import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Fabble',
  description: 'Join us for the launch of Fabble. Fashion meets community. Stay tuned!',
  icons: {
    icon: [
      {
        url: '/fabble.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/fabble.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/fabble.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
