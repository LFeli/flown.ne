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
  // {
  //   accessorKey: 'status',
  //   header: 'Status',
  //   cell: ({ row }) => {
  //     const status = row.original.status
  //     const colorMap = {
  // active: 'success',
  // draft: 'secondary',
  // 'in-review': 'warning',
  // archived: 'destructive',
  //     }
  //     return <Badge variant={'default'}>{status.replace(/-/g, ' ')}</Badge>
  //   },
  //   meta: {
  //     cellClassName: 'w-28',
  //   },
  // },

  // },
  // {
  //   accessorKey: 'name',
  //   header: 'Project',
  //   cell: ({ row }) => <div className="font-medium">{row.original.name}</div>,
  //   meta: {
  //     cellClassName: 'min-w-48',
  //   },
  // },
  // {
  //   accessorKey: 'description',
  //   header: 'Description',
  //   cell: ({ row }) => (
  //     <div className="max-w-[320px] truncate text-muted-foreground text-sm">
  //       {row.original.description}
  //     </div>
  //   ),
  //   meta: {
  //     cellClassName: 'w-[360px]',
  //   },
  // },
  // {
  //   accessorKey: 'owner',
  //   header: 'Owner',
  //   cell: ({ row }) => {
  //     const owner = row.original.owner
  //     return (
  //       <div className="flex items-center gap-2">
  //         <Avatar className="h-6 w-6">
  //           <AvatarImage src={owner.avatarUrl} />
  //           <AvatarFallback>{owner.name.charAt(0)}</AvatarFallback>
  //         </Avatar>
  //         <span className="text-sm">{owner.name}</span>
  //       </div>
  //     )
  //   },
  //   meta: {
  //     cellClassName: 'min-w-40',
  //   },
  // },
  // {
  //   accessorKey: 'contributors',
  //   header: 'Contributors',
  //   cell: ({ row }) => {
  //     const contributors = row.original.contributors ?? []
  //     return (
  //       <div className="-space-x-2 flex overflow-hidden">
  //         {contributors.map((contrib, i) => (
  //           <Avatar key={i} className="h-6 w-6 border-2 border-background">
  //             <AvatarImage src={contrib.avatarUrl} />
  //             <AvatarFallback>{contrib.name.charAt(0)}</AvatarFallback>
  //           </Avatar>
  //         ))}
  //       </div>
  //     )
  //   },
  //   meta: {
  //     cellClassName: 'min-w-28',
  //   },
  // },
  // {
  //   accessorKey: 'status',
  //   header: 'Status',
  //   cell: ({ row }) => {
  //     const status = row.original.status
  //     const colorMap = {
  //       active: 'success',
  //       draft: 'secondary',
  //       'in-review': 'warning',
  //       archived: 'destructive',
  //     }
  //     return <Badge variant={'default'}>{status.replace(/-/g, ' ')}</Badge>
  //   },
  //   meta: {
  //     cellClassName: 'w-28',
  //   },
  // },
  // {
  //   accessorKey: 'startDate',
  //   header: 'Start',
  //   cell: ({ row }) => <span>{row.original.startDate}</span>,
  //   meta: {
  //     cellClassName: 'min-w-32',
  //   },
  // },
  // {
  //   accessorKey: 'endDate',
  //   header: 'End',
  //   cell: ({ row }) => {
  //     const end = row.original.endDate
  //     return (
  //       <span className={cn(!end && 'text-muted-foreground italic')}>
  //         {end ? <span>{end}</span> : 'Ongoing'}
  //       </span>
  //     )
  //   },
  //   meta: {
  //     cellClassName: 'min-w-32',
  //   },
  // },
  // {
  //   accessorKey: 'tags',
  //   header: 'Tags',
  //   cell: ({ row }) => (
  //     <div className="flex flex-wrap gap-1">
  //       {row.original.tags.map((tag, i) => (
  //         <Badge key={i} variant="outline" className="text-xs">
  //           {tag}
  //         </Badge>
  //       ))}
  //     </div>
  //   ),
  //   meta: {
  //     cellClassName: 'min-w-40',
  //   },
  // },
]
