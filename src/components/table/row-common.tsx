import { type Row, flexRender } from '@tanstack/react-table'

import { cn } from '@/lib/utils'

import { TableCell, TableRow } from '../ui/table'

interface RowCommonProps<TData> {
  row: Row<TData>
}

export function RowCommon<TData>({ row }: RowCommonProps<TData>) {
  const cells = row.getVisibleCells()

  return (
    <TableRow data-state={row.getIsSelected() && 'selected'}>
      {cells.map(cell => (
        <TableCell
          key={cell.id}
          className={cn(
            'truncate py-3 pl-4',
            cell.column.columnDef.meta?.cellClassName
          )}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  )
}
