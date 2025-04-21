'use client'

import React from 'react'

import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { RowCommon } from '@/components/table/row-common'
import { TableEmptyState } from '@/components/table/table-empty-state'
import { TableHeaderTemplate } from '@/components/table/table-header-template'
import { Table, TableBody } from '@/components/ui/table'
import type { ProjectData } from '@/types/table'

interface ProjectDirectoryTableWrapperProps<TData extends ProjectData, TValue> {
  data: TData[]
  columns: ColumnDef<TData, TValue>[]
}

export function ProjectDirectoryTableWrapper<
  TData extends ProjectData,
  TValue,
>({ data, columns }: ProjectDirectoryTableWrapperProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      columnVisibility,
      sorting,
    },

    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  const rows = table.getRowModel().rows
  const header = table.getHeaderGroups()

  return (
    <div className="space-y-4">
      {/* toolbar here... */}

      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeaderTemplate header={header} />

          <TableBody className="**:data-[slot=table-cell]:first:w-8">
            {rows.length ? (
              rows.map(row => <RowCommon key={row.id} row={row} />)
            ) : (
              <TableEmptyState columns={columns} />
            )}
          </TableBody>
        </Table>
      </div>

      {/* footer here... */}
    </div>
  )
}
