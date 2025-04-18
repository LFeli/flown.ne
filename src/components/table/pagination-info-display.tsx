import type { Table } from '@tanstack/react-table'

interface PaginationInfoDisplayProps<TData> {
  table: Table<TData>
}

export function PaginationInfoDisplay<TData>({
  table,
}: PaginationInfoDisplayProps<TData>) {
  return (
    <div className="flex w-32 items-center justify-start font-medium text-sm md:justify-center">
      Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
    </div>
  )
}
