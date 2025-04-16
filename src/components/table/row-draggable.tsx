import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { type Row, flexRender } from '@tanstack/react-table'

import { cn } from '@/lib/utils'

import { TableCell, TableRow } from '../ui/table'

interface RowDraggableProps<TData> {
  id: number
  row: Row<TData>
}

export function RowDraggable<TData>({ id, row }: RowDraggableProps<TData>) {
  const cells = row.getVisibleCells()
  const isSelected = row.getIsSelected()

  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id,
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
      className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
    >
      {cells.map(cell => {
        const cellClassName = cell.column.columnDef.meta?.cellClassName

        return (
          <TableCell key={cell.id} className={cn(cellClassName)}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        )
      })}
    </TableRow>
  )
}
