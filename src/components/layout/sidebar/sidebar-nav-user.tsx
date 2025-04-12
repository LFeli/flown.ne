'use client'

import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import type { SidebarUser } from '@/types/sidebar'
import { ProfileButton } from './profile-button'

interface AppSidebarNavUserProps {
  user: SidebarUser
}

export function AppSidebarNavUser({ user }: AppSidebarNavUserProps) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <ProfileButton user={user} isMobile={isMobile} />
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
