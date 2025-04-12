import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider
      attribute={'class'}
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
      <Toaster closeButton richColors />
    </ThemeProvider>
  )
}
