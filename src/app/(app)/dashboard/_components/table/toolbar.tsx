import { SearchInputFilter } from '@/components/table/search-input-filter'
import type { ContentTrackerData } from '@/types/table'
import type { Table } from '@tanstack/react-table'

interface ContentTrackerToolbarProps<TData> {
  table: Table<TData>
}

export function ContentTrackerToolbar<TData>({
  table,
}: ContentTrackerToolbarProps<TData>) {
  const searchColumn = table.getColumn('header')

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-x-3 md:gap-x-4">
        {searchColumn && (
          <SearchInputFilter
            table={table}
            column={searchColumn}
            placeholder="Search by header..."
          />
        )}
      </div>
    </div>
  )
}
