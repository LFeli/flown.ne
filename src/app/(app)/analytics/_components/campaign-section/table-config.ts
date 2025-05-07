'use client'

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

import { defaultVisibility } from '@/constants/analytics'
import { monthsMap } from '@/constants/months'

import type { AnalyticCampaignData } from '@/types/table'

interface CampaignTableConfigProps<TData extends AnalyticCampaignData, TValue> {
  data: TData[]
  columns: ColumnDef<TData, TValue>[]
  months?: string[]
}

export function CampaignTableConfig<
  TData extends AnalyticCampaignData,
  TValue,
>({ data, columns, months }: CampaignTableConfigProps<TData, TValue>) {
  const memoData = React.useMemo(() => data, [data])
  const memoColumns = React.useMemo(() => columns, [columns])

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(defaultVisibility)
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])

  React.useEffect(() => {
    if (!months) {
      return
    }

    const visibility: VisibilityState = {
      id: true,
    }

    for (const [monthNumber, monthKey] of Object.entries(monthsMap)) {
      visibility[monthKey] = months.includes(monthNumber)
    }

    const hasVisibleMonths = months.length > 0
    visibility.totalImpressions = hasVisibleMonths

    setColumnVisibility(visibility)
  }, [months])

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
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const header = table.getHeaderGroups()
  const rows = table.getRowModel().rows

  return { table, header, rows }
}
