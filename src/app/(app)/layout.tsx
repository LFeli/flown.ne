import { AppSidebar } from '@/components/layout/sidebar/sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />

      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}
