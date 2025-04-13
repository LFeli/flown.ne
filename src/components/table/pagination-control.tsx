import type { Table } from '@tanstack/react-table'
import {
  ChevronLeftIcon,
  ChevronRight,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-react'

import { Button } from '../ui/button'

interface PaginationControlProps<TData> {
  table: Table<TData>
  paginationType: 'simple' | 'double'
}

export function PaginationControl<TData>({
  table,
  paginationType = 'simple',
}: PaginationControlProps<TData>) {
  const canGetPreviousPage = table.getCanPreviousPage()
  const canGetNextPage = table.getCanNextPage()

  const pageIndex = table.getState().pagination.pageIndex
  const pageCount = table.getPageCount()

  function handleSetPage(indexPage: number) {
    table.setPageIndex(Math.max(0, Math.min(pageCount - 1, indexPage)))
  }

  return (
    <div className="flex items-center space-x-4">
      {paginationType === 'double' && (
        <Button
          variant={'outline'}
          size={'icon'}
          className="size-8 bg-background p-0 dark:bg-background"
          onClick={() => handleSetPage(pageIndex - 5)}
          disabled={!canGetPreviousPage}
        >
          <ChevronsLeftIcon className="size-4" />
        </Button>
      )}

      <Button
        variant={'outline'}
        size={'icon'}
        className="size-8 bg-background p-0 dark:bg-background"
        onClick={() => table.previousPage()}
        disabled={!canGetPreviousPage}
      >
        <ChevronLeftIcon className="size-4" />
      </Button>

      <Button
        variant={'outline'}
        size={'icon'}
        className="size-8 bg-background p-0 dark:bg-background"
        onClick={() => table.nextPage()}
        disabled={!canGetNextPage}
      >
        <ChevronRight className="size-4" />
      </Button>

      {paginationType === 'double' && (
        <Button
          variant={'outline'}
          size={'icon'}
          className="size-8 bg-background p-0 dark:bg-background"
          onClick={() => handleSetPage(pageIndex + 5)}
          disabled={!canGetPreviousPage}
        >
          <ChevronsRightIcon className="size-4" />
        </Button>
      )}
    </div>
  )
}
