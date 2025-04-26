import type { Table } from '@tanstack/react-table'

import { PageSizeSelector } from '@/components/table/page-size-selector'
import { PaginationControl } from '@/components/table/pagination-control'
import { PaginationInfoDisplay } from '@/components/table/pagination-info-display'

interface TeamListTableFooterProps<TData> {
  table: Table<TData>
}

export function TeamListTableFooter<TData>({
  table,
}: TeamListTableFooterProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex w-full flex-col-reverse items-start justify-between gap-4 md:flex-row md:items-center lg:space-x-8">
        <PageSizeSelector table={table} />

        <div className="flex w-full items-center justify-between gap-4 md:w-fit md:justify-start">
          <div className="flex items-center font-medium text-sm">
            <PaginationInfoDisplay table={table} />
          </div>

          <PaginationControl table={table} />
        </div>
      </div>
    </div>
  )
}
