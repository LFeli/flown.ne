import type { Column } from '@tanstack/react-table'
import { ArrowDownIcon, ArrowUpIcon, ChevronsUpDownIcon } from 'lucide-react'
import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface ColumnSortFilterProps<TData, TValue>
  extends HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function ColumnSortFilter<TData, TValue>({
  column,
  title,
  className,
}: ColumnSortFilterProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={className}>{title}</div>
  }

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size={'sm'} className="cursor-pointer">
            <span className="truncate font-extrabold leading-relaxed">
              {title}
            </span>

            {column.getIsSorted() === 'desc' ? (
              <ArrowDownIcon className="ml-2 size-4" />
            ) : column.getIsSorted() === 'asc' ? (
              <ArrowUpIcon className="ml-2 size-4" />
            ) : (
              <ChevronsUpDownIcon className="ml-2 size-4" />
            )}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className="mr-2 size-4 text-muted-foreground/70" />
            <span>Asc</span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className="mr-2 size-4 text-muted-foreground/70" />
            <span>Desc</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
