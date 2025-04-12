import { SiteFooter } from '@/components/layout/footer'
import { SiteHeader } from '@/components/layout/header'
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

      <SidebarInset>
        <SiteHeader />

        <div className="flex flex-1 flex-col">{children}</div>

        <SiteFooter />
      </SidebarInset>
    </SidebarProvider>
  )
}
