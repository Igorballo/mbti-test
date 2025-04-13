import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CHRYSALEAD | MBTI TEST',
  description: 'CHRYSALEAD | MBTI TEST',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
