import { useSortable } from '@dnd-kit/sortable'
import { GripVerticalIcon } from 'lucide-react'

import { Button } from '../ui/button'

interface RowDragHandleProps {
  id: number
}

export function RowDragHandle({ id }: RowDragHandleProps) {
  const { attributes, listeners } = useSortable({
    id,
  })

  return (
    <Button
      variant={'ghost'}
      size={'icon'}
      className="size-7 cursor-pointer text-muted-foreground hover:bg-transparent"
      {...attributes}
      {...listeners}
    >
      <GripVerticalIcon className="size-3 text-muted-foreground" />
      <span className="sr-only">Drag to reorder</span>
    </Button>
  )
}
