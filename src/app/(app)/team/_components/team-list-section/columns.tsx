import { Badge } from '@/components/ui/badge'
import type { ProjectMember } from '@/types/pages/team'
import type { ColumnDef } from '@tanstack/react-table'

const statusMap = {
  active: 'default',
  inactive: 'destructive',
  'on-leave': 'secondary',
} as const

export const columns: ColumnDef<ProjectMember>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => {
      const id = row.original.id

      return (
        <Badge variant={'secondary'}>
          <span className="rounded-full px-1 font-mono">{id}</span>
        </Badge>
      )
    },
  },

  {
    accessorKey: 'name',
    header: 'Name',
  },

  {
    accessorKey: 'email',
    header: 'Email',
  },

  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      const role = row.original.role

      return (
        <Badge variant={'outline'}>
          <span className="rounded-full px-1 font-mono">{role}</span>
        </Badge>
      )
    },
  },

  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status
      const variant = statusMap[status] ?? 'default'

      return (
        <Badge variant={variant}>
          <span className="rounded-full px-1 font-mono">{status}</span>
        </Badge>
      )
    },
  },

  {
    accessorKey: 'joinedAt',
    header: 'Joined Year',
  },
]
