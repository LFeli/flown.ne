import { useSortable } from '@dnd-kit/sortable'
import { GripVerticalIcon } from 'lucide-react'

import { Button } from '../ui/button'

interface RowDragHandleProps {
  rowID: number
}

export function RowDragHandle({ rowID }: RowDragHandleProps) {
  const { attributes, listeners } = useSortable({
    id: rowID,
  })

  return (
    <Button
      variant={'ghost'}
      size={'icon'}
      className="size-7 text-muted-foreground hover:bg-transparent"
      {...attributes}
      {...listeners}
    >
      <GripVerticalIcon className="size-3 text-muted-foreground" />
      <span className="sr-only">Drag to reorder</span>
    </Button>
  )
}
