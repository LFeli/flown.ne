import Link from 'next/link'

import { CrownIcon, InfinityIcon } from 'lucide-react'

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../../ui/sidebar'

export function AppSidebarHeader() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size={'lg'}
            className="data-[slot=sidebar-menu-button]:!p-1.5"
          >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-green-50">
              <InfinityIcon className="size-5" />
            </div>

            <span className="flex flex-col">
              <h4 className="font-semibold text-base">Flown.ne Inc.</h4>

              <span className="flex gap-x-1.5 text-muted-foreground text-xs">
                <CrownIcon className="size-3" />
                <span>Premium</span>
              </span>
            </span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  )
}
