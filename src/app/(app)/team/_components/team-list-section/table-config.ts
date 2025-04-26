import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import React from 'react'

import type { ProjectMember } from '@/types/pages/team'

interface TeamListTableConfigProps<TData extends ProjectMember, TValue> {
  data: TData[]
  columns: ColumnDef<TData, TValue>[]
}

export function TeamListTableConfig<TData extends ProjectMember, TValue>({
  data,
  columns,
}: TeamListTableConfigProps<TData, TValue>) {
  const memoData = React.useMemo(() => data, [data])
  const memoColumns = React.useMemo(() => columns, [columns])

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

  const table = useReactTable({
    data: memoData,
    columns: memoColumns,
    state: {
      columnFilters,
      columnVisibility,
      sorting,
    },

    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,

    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const rows = table.getRowModel().rows
  const header = table.getHeaderGroups()

  return { table, rows, header }
}
