'use client'

import type { ColumnDef } from '@tanstack/react-table'
import { toast } from 'sonner'

import { RowDragHandle } from '@/components/table/row-drag-handle'
import { Badge } from '@/components/ui/badge'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { ContentTrackerData } from '@/types/table'
import { CheckCircle2Icon, LoaderIcon, MoreVerticalIcon } from 'lucide-react'
import { ContentTrackerRowAction } from './row-action'

export const columns: ColumnDef<ContentTrackerData>[] = [
  {
    id: 'drag',
    header: () => null,
    cell: ({ row }) => <RowDragHandle id={row.original.id} />,
  },

  {
    accessorKey: 'header',
    header: 'Header',
    cell: ({ row }) => {
      // return <TableCellViewer item={row.original} /> to-do: make cell viewer sheet and in mobile use a drawer
      const header = row.original.header

      return <span>{header}</span>
    },
    enableHiding: false,
  },

  {
    accessorKey: 'type',
    header: 'Section Type',
    cell: ({ row }) => (
      <div className="w-32">
        <Badge variant="outline" className="px-1.5 text-muted-foreground">
          {row.original.type}
        </Badge>
      </div>
    ),
  },

  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge
        variant="outline"
        className="flex gap-1 px-1.5 text-muted-foreground [&_svg]:size-3"
      >
        {row.original.status === 'Done' ? (
          <CheckCircle2Icon className="text-green-500 dark:text-green-400" />
        ) : (
          <LoaderIcon />
        )}
        {row.original.status}
      </Badge>
    ),
  },

  {
    accessorKey: 'target',
    header: () => <div className="w-full text-right">Target</div>,
    cell: ({ row }) => (
      <form
        onSubmit={e => {
          e.preventDefault()
          toast.promise(new Promise(resolve => setTimeout(resolve, 1000)), {
            loading: `Saving ${row.original.header}`,
            success: 'Done',
            error: 'Error',
          })
        }}
      >
        <Label htmlFor={`${row.original.id}-target`} className="sr-only">
          Target
        </Label>

        <Input
          className="h-8 w-16 border-transparent bg-transparent text-right shadow-none hover:bg-input/30 focus-visible:border focus-visible:bg-background"
          defaultValue={row.original.target}
          id={`${row.original.id}-target`}
        />
      </form>
    ),
  },

  {
    accessorKey: 'limit',
    header: () => <div className="w-full text-right">Limit</div>,
    cell: ({ row }) => (
      <form
        onSubmit={e => {
          e.preventDefault()
          toast.promise(new Promise(resolve => setTimeout(resolve, 1000)), {
            loading: `Saving ${row.original.header}`,
            success: 'Done',
            error: 'Error',
          })
        }}
      >
        <Label htmlFor={`${row.original.id}-limit`} className="sr-only">
          Limit
        </Label>

        <Input
          className="h-8 w-16 border-transparent bg-transparent text-right shadow-none hover:bg-input/30 focus-visible:border focus-visible:bg-background"
          defaultValue={row.original.limit}
          id={`${row.original.id}-limit`}
        />
      </form>
    ),
  },

  {
    accessorKey: 'reviewer',
    header: 'Reviewer',
    cell: ({ row }) => {
      const isAssigned = row.original.reviewer !== 'Assign reviewer'

      if (isAssigned) {
        return row.original.reviewer
      }

      return (
        <>
          <Label htmlFor={`${row.original.id}-reviewer`} className="sr-only">
            Reviewer
          </Label>
          <Select>
            <SelectTrigger
              className="h-8 w-40"
              id={`${row.original.id}-reviewer`}
            >
              <SelectValue placeholder="Assign reviewer" />
            </SelectTrigger>

            <SelectContent align="end">
              <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>

              <SelectItem value="John Doe">John Doe</SelectItem>
            </SelectContent>
          </Select>
        </>
      )
    },
  },

  {
    id: 'actions',
    cell: () => <ContentTrackerRowAction />,
  },
]
