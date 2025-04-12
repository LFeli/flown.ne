import type { LucideIcon } from 'lucide-react'

export interface SidebarItem {
  items: {
    title: string
    url: string
    icon: LucideIcon
  }[]
}

export interface SidebarUser {
  name: string
  email: string
  avatarUrl: string
}
