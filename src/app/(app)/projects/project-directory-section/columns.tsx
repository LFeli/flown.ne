'use client'

import type { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import type { ProjectData, ProjectStatus } from '@/types/table'

const statusColorMap: Record<
  ProjectStatus,
  'secondary' | 'destructive' | 'default' | 'outline'
> = {
  active: 'secondary',
  draft: 'outline',
  'in-review': 'default',
  archived: 'destructive',
}

export const columns: ColumnDef<ProjectData>[] = [
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      const description = row.original.description

      return (
        <Tooltip>
          <TooltipTrigger className="max-w-60 truncate text-muted-foreground text-sm">
            <span className="w-full">{description}</span>
          </TooltipTrigger>

          <TooltipContent className="max-w-56 p-2">
            {description}
          </TooltipContent>
        </Tooltip>
      )
    },
    meta: {
      cellClassName: 'w-3xs min-w-3xs',
    },
  },

  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status

      return (
        <Badge
          variant={statusColorMap[status]}
          className="rounded-full px-3 py-1"
        >
          {status.replace(/-/g, ' ')}
        </Badge>
      )
    },
  },
]
