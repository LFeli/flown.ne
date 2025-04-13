import { type Row, flexRender } from '@tanstack/react-table'

import { cn } from '@/lib/utils'

import { TableCell, TableRow } from '../ui/table'

interface RowCommonProps<TData> {
  row: Row<TData>
}

export function RowCommon<TData>({ row }: RowCommonProps<TData>) {
  const cells = row.getVisibleCells()
  const isSelected = row.getIsSelected()

  return (
    <TableRow data-state={isSelected && 'selected'}>
      {cells.map(cell => {
        const cellClassName = cell.column.columnDef.meta?.cellClassName

        return (
          <TableCell key={cell.id} className={cn('truncate', cellClassName)}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        )
      })}
    </TableRow>
  )
}
