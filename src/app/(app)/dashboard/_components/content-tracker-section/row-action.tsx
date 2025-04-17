import Link from 'next/link'

import type { Row } from '@tanstack/react-table'
import { MoreVerticalIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { ContentTrackerData } from '@/types/table'

// TO-DO: CREATE CELL DETAILS COMPONENT, AND CREATE A BASE FORM FOR THIS COMPONENT...*
// TO-DO: FUNCTION FOR COPY A ROW DATA...
// TO-DO: FUNCTION FOR FAVORITE A ROW
// TO-DO: FUNCTION FOR UNFAVORITE A ROW
// TO-DO: FUNCTION FOR DELETE A ROW

interface ContentTrackerRowActionProps<TData extends ContentTrackerData> {
  row: Row<TData>
}

export function ContentTrackerRowAction<TData extends ContentTrackerData>({
  row,
}: ContentTrackerRowActionProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
          size="icon"
        >
          <MoreVerticalIcon />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/content-tracker/details/${row.original.id}`}>
            Edit
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>Make a copy</DropdownMenuItem>
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
