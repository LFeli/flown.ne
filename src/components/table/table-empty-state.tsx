import type { ColumnDef } from '@tanstack/react-table'
import { TableCell, TableRow } from '../ui/table'

interface TableEmptyStateProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
}

export function TableEmptyState<TData, TValue>({
  columns,
}: TableEmptyStateProps<TData, TValue>) {
  return (
    <TableRow>
      <TableCell colSpan={columns.length} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  )
}
