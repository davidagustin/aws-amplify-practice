import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StreamFlix - Watch Movies & TV Shows',
  description: 'Stream your favorite movies and TV shows with StreamFlix',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  )
} 