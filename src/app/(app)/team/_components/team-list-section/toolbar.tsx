import type { Table } from '@tanstack/react-table'

import { SearchInputFilter } from '@/components/table/search-input-filter'

interface TeamListTableToolbarProps<TData> {
  table: Table<TData>
}

export function TeamListTableToolbar<TData>({
  table,
}: TeamListTableToolbarProps<TData>) {
  const searchColumn = table.getColumn('name')

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-x-3 md:gap-x-4">
        {searchColumn && (
          <SearchInputFilter
            table={table}
            column={searchColumn}
            placeholder="Search by name..."
          />
        )}
      </div>
    </div>
  )
}
