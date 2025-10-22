import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TopMedia - Coming Soon',
  description: 'We\'re crafting the future of media. Get ready for an innovative platform that will transform how you create, share, and experience content.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
