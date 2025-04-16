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
      <div className="flex h-full w-full">
        <AppSidebar variant="inset" />

        <SidebarInset className="flex h-svh flex-1 flex-col overflow-hidden">
          <SiteHeader />

          {/* Scrollable Content */}
          <div className="flex-1 overflow-auto">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
