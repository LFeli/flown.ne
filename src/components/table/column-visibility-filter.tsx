import type { Table } from '@tanstack/react-table'
import { ChevronDownIcon, ColumnsIcon } from 'lucide-react'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface ColumnVisibilityFilterProps<TData> {
  table: Table<TData>
}

export function ColumnVisibilityFilter<TData>({
  table,
}: ColumnVisibilityFilterProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} size={'sm'} className="md:h-10">
          <ColumnsIcon />
          <span className="hidden md:block">Customize Columns</span>

          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="md:hidden">
          Customize Columns
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="md:hidden" />

        {table
          .getAllColumns()
          .filter(
            column =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide()
          )
          .map(column => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={value => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
