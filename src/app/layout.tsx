import type { Metadata } from 'next'

import { siteConfig } from '@/config/site'
import { fontMono, fontSans } from '@/lib/font'
import { cn } from '@/lib/utils'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  creator: siteConfig.author.name,
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.github,
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-svh font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
