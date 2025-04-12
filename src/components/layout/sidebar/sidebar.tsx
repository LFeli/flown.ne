import {
  sidebarMockMain,
  sidebarMockSecondary,
  sidebarMockUser,
} from '@/mocks/sidebar'

import { Sidebar, SidebarContent, SidebarFooter } from '../../ui/sidebar'

import { AppSidebarHeader } from './sidebar-header'
import { AppSidebarNavMain } from './sidebar-nav-main'
import { AppSidebarNavSecondary } from './sidebar-nav-secondary'
import { AppSidebarNavUser } from './sidebar-nav-user'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <AppSidebarHeader />

      <SidebarContent>
        <AppSidebarNavMain items={sidebarMockMain} />
        <AppSidebarNavSecondary
          items={sidebarMockSecondary}
          className="mt-auto"
        />
      </SidebarContent>

      <SidebarFooter>
        <AppSidebarNavUser user={sidebarMockUser} />
      </SidebarFooter>
    </Sidebar>
  )
}
