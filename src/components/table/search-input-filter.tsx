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
    <article className="relative w-full max-w-48 md:max-w-60">
      <Input
        id="Search"
        value={filterValue}
        onChange={event => column?.setFilterValue(event.target.value)}
        className="h-8 pl-10 text-sm md:h-10 md:text-base"
        placeholder={placeholder}
      />

      <Label
        htmlFor="search"
        className="absolute top-0 left-3 translate-y-1/2 transform md:top-1"
        asChild
      >
        <SearchIcon className="size-4" />
      </Label>
    </article>
  )
}
