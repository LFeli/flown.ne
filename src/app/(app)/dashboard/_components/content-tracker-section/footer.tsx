import { PageSizeSelector } from '@/components/table/page-size-selector'
import { PaginationControl } from '@/components/table/pagination-control'
import { PaginationInfoDisplay } from '@/components/table/pagination-info-display'
import type { Table } from '@tanstack/react-table'

interface ContentTableFooterProps<TData> {
  table: Table<TData>
}

export function ContentTableFooter<TData>({
  table,
}: ContentTableFooterProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex w-full flex-col-reverse items-start justify-between gap-4 md:flex-row md:items-center lg:space-x-8">
        <PageSizeSelector table={table} />

        <div className="flex w-full items-center justify-between gap-4 md:w-fit md:justify-start">
          <div className="flex items-center font-medium text-sm">
            <PaginationInfoDisplay table={table} />
          </div>

          <PaginationControl table={table} paginationType="double" />
        </div>
      </div>
    </div>
  )
}
