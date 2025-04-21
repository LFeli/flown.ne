'use client'

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
import React from 'react'

import { TableHeaderTemplate } from '@/components/table/table-header-template'
import { Table, TableBody } from '@/components/ui/table'

import { RowCommon } from '@/components/table/row-common'
import { TableEmptyState } from '@/components/table/table-empty-state'
import { monthsMap } from '@/constants/months'
import type { AnalyticCampaignData } from '@/types/table'

// by default the months columns is hidden for not generated shift layout on refresh
const defaultVisibility: VisibilityState = Object.fromEntries(
  Object.values(monthsMap).map(monthKey => [monthKey, false])
)
defaultVisibility.totalImpressions = false

interface CampaignTableWrapperProps<
  TData extends AnalyticCampaignData,
  TValue,
> {
  data: TData[]
  columns: ColumnDef<TData, TValue>[]
  visibleMonths?: string[]
}

export function CampaignTableWrapper<
  TData extends AnalyticCampaignData,
  TValue,
>({ data, columns, visibleMonths }: CampaignTableWrapperProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(defaultVisibility)
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])

  React.useEffect(() => {
    if (!visibleMonths) {
      return
    }

    const visibility: VisibilityState = {
      id: true,
    }

    for (const [monthNumber, monthKey] of Object.entries(monthsMap)) {
      visibility[monthKey] = visibleMonths.includes(monthNumber)
    }

    const hasVisibleMonths = visibleMonths.length > 0
    visibility.totalImpressions = hasVisibleMonths

    setColumnVisibility(visibility)
  }, [visibleMonths])

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
