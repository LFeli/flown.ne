import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { type Row, flexRender } from '@tanstack/react-table'

import { cn } from '@/lib/utils'

import { TableCell, TableRow } from '../ui/table'

interface RowDraggableProps<TData> {
  row: Row<TData>
  rowID: number
}

export function RowDraggable<TData>({ row, rowID }: RowDraggableProps<TData>) {
  const cells = row.getVisibleCells()
  const isSelected = row.getIsSelected()

  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: rowID,
  })

  return (
    <TableRow
      data-state={isSelected && 'selected'}
      data-dragging={isDragging}
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      {cells.map(cell => {
        const cellClassName = cell.column.columnDef.meta?.cellClassName

        return (
          <TableCell
            key={cell.id}
            className={cn(
              'relative z-0 truncate data-[dragging=true]:z-10 data-[dragging=true]:opacity-80',
              cellClassName
            )}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        )
      })}
    </TableRow>
  )
}
