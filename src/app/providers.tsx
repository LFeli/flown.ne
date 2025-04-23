import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'

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
      <TooltipProvider>
        {children}
        <Toaster closeButton richColors />
      </TooltipProvider>
    </ThemeProvider>
  )
}
