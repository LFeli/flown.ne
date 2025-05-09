import { SiteHeader } from '@/components/layout/header'
import { AppSidebar } from '@/components/layout/sidebar/sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function AppLayout({
  children,
  modals,
}: Readonly<{
  children: React.ReactNode
  modals: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <div className="flex h-full w-full">
        <AppSidebar variant="inset" />

        <SidebarInset className="flex h-svh flex-1 flex-col overflow-hidden">
          <SiteHeader />

          {/* Scrollable Content */}
          <div className="flex flex-1 flex-col overflow-auto">
            {children}
            {modals}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
