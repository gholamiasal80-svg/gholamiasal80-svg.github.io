import type { Metadata } from 'next'
import { Space_Grotesk, Crimson_Text } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PaperTexture } from '@/components/paper-texture'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-crimson-text',
})

export const metadata: Metadata = {
  title: {
    default: 'SAL - Portfolio',
    template: '%s | SAL',
  },
  description: 'Designer and artist portfolio - See through my world with me',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${crimsonText.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <PaperTexture />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
