import type { Table } from '@tanstack/react-table'

interface SelectedRowsIndicatorProps<TData> {
  table: Table<TData>
}

export function SelectedRowsIndicator<TData>({
  table,
}: SelectedRowsIndicatorProps<TData>) {
  const filteredRowsLength = table.getFilteredSelectedRowModel().rows.length
  const totalRowsLength = table.getFilteredRowModel().rows.length

  return (
    <div className="hidden flex-1 text-muted-foreground text-sm lg:flex">
      {filteredRowsLength} of {totalRowsLength} row(s) selected.
    </div>
  )
}
