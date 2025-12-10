import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Nutrition Assistant',
  description: 'Your personal AI-powered nutrition assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
