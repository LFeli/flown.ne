import {
  BarChartIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from 'lucide-react'

export const sidebarMockUser = {
  name: 'Lucas Araújo',
  email: 'lfeli@example.com',
  avatarUrl: 'https://github.com/LFeli.png',
}

export const sidebarMockMain = [
  {
    title: 'Dashboard',
    url: '#',
    icon: LayoutDashboardIcon,
  },
  {
    title: 'Lifecycle',
    url: '#',
    icon: ListIcon,
  },
  {
    title: 'Analytics',
    url: '#',
    icon: BarChartIcon,
  },
  {
    title: 'Projects',
    url: '#',
    icon: FolderIcon,
  },
  {
    title: 'Team',
    url: '#',
    icon: UsersIcon,
  },
]

export const sidebarMockSecondary = [
  {
    title: 'Settings',
    url: '#',
    icon: SettingsIcon,
  },
  {
    title: 'Get Help',
    url: '#',
    icon: HelpCircleIcon,
  },
  {
    title: 'Search',
    url: '#',
    icon: SearchIcon,
  },
]
