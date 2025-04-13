import { SearchIcon } from 'lucide-react'

import type { Column, Table } from '@tanstack/react-table'

import { Input } from '../ui/input'
import { Label } from '../ui/label'

interface SearchInputFilterProps<TData> {
  table: Table<TData>
  column: Column<TData>
  placeholder?: string
}

export function SearchInputFilter<TData>({
  table,
  column,
  placeholder = 'Search...',
}: SearchInputFilterProps<TData>) {
  const getColumn = table.getColumn(column.id)
  const filterValue = (getColumn?.getFilterValue() as string) ?? ''

  return (
    <article className="relative w-full max-w-60">
      <Input
        id="Search"
        value={filterValue}
        onChange={event => column?.setFilterValue(event.target.value)}
        className="h-10 bg-background pl-10 dark:bg-background"
        placeholder={placeholder}
      />

      <Label
        htmlFor="search"
        className="absolute top-1 left-3 translate-y-1/2 transform"
        asChild
      >
        <SearchIcon className="size-4" />
      </Label>
    </article>
  )
}
