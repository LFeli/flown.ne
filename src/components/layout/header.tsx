'use client'

import { usePathname } from 'next/navigation'

import { formatToTitleCase } from '@/utils/format-to-title-case'
import { Separator } from '../ui/separator'
import { SidebarTrigger } from '../ui/sidebar'
import { ThemeSwitcher } from './theme-switcher'

export function SiteHeader() {
  const pathname = usePathname().split('/')

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16">
      <div className="flex w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex flex-1 items-center">
          <SidebarTrigger size={'lg'} className="-ml-1 size-10" />

          <Separator
            orientation="vertical"
            className="mx-4 data-[orientation=vertical]:h-6"
          />

          <h1 className="font-medium text-base">
            {formatToTitleCase(pathname[1])}
          </h1>
        </div>

        <ThemeSwitcher />
      </div>
    </header>
  )
}
