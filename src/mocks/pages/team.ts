import type { ProjectMember, TeamOption } from '@/types/pages/team'

export const teamOptions: TeamOption[] = [
  { id: 'ai', label: 'AI Integrations' },
  { id: 'growth', label: 'Growth Team' },
  { id: 'core', label: 'Core Platform' },
]

export const members: ProjectMember[] = [
  {
    id: 'mem-1a23',
    name: 'Alicia Vega',
    email: 'alicia@company.com',
    role: 'AI Engineer',
    joinedAt: '2023-03-21',
    status: 'active',
    teamId: 'ai',
  },
  {
    id: 'mem-4b67',
    name: 'Jonah Clarke',
    email: 'jonah@company.com',
    role: 'Developer',
    joinedAt: '2022-11-15',
    status: 'on-leave',
    teamId: 'ai',
  },
  {
    id: 'mem-8c92',
    name: 'Mei Chen',
    email: 'mei@company.com',
    role: 'QA',
    joinedAt: '2023-01-05',
    status: 'active',
    teamId: 'core',
  },
  {
    id: 'mem-7d44',
    name: 'Felix Turner',
    email: 'felix@company.com',
    role: 'Manager',
    joinedAt: '2021-09-10',
    status: 'active',
    teamId: 'ai',
  },
  {
    id: 'mem-5f31',
    name: 'Nadia Kim',
    email: 'nadia@company.com',
    role: 'Designer',
    joinedAt: '2023-07-25',
    status: 'inactive',
    teamId: 'growth',
  },
]
