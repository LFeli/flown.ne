import type { Table } from '@tanstack/react-table'

interface PaginationInfoDisplayProps<TData> {
  table: Table<TData>
}

export function PaginationInfoDisplay<TData>({
  table,
}: PaginationInfoDisplayProps<TData>) {
  return (
    <div className="flex w-32 items-center justify-center font-medium text-sm">
      Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
    </div>
  )
}
