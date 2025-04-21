'use client'

import { Badge } from '@/components/ui/badge'
import type { ProjectData } from '@/types/table'
import type { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<ProjectData>[] = [
  {
    accessorKey: 'id',
    header: 'Project ID',
    cell: ({ row }) => {
      const campaignId = row.original.id

      return (
        <Badge
          variant={'secondary'}
          className="w-full max-w-28 truncate px-1.5 font-mono text-muted-foreground"
        >
          {campaignId}
        </Badge>
      )
    },

    meta: {
      cellClassName: 'w-32 min-w-32',
    },
  },
]
