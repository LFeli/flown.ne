'use client'

import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { RowCommon } from '@/components/table/row-common'
import { TableEmptyState } from '@/components/table/table-empty-state'
import { TablePartialHeader } from '@/components/table/table-partial-header'
import { monthsMap } from '@/constants/months'
import type { AnalyticCampaignData } from '@/types/table'
import clsx from 'clsx'
import { CampaignSectionToolbar } from './toolbar'

interface CampaignTableWrapperProps<
  TData extends AnalyticCampaignData,
  TValue,
> {
  data: TData[]
  columns: ColumnDef<TData, TValue>[]
  visibleMonths?: string[]
}

// by default the months columns is hidden for not generated shift layout on refresh
const defaultVisibility: VisibilityState = Object.fromEntries(
  Object.values(monthsMap).map(monthKey => [monthKey, false])
)
defaultVisibility.totalImpressions = false

// ✅ Derive valid month keys from monthsMap values
const monthKeys = Object.values(
  monthsMap
) as (keyof AnalyticCampaignData['monthsImpressions'])[]

const isMonthKey = (
  key: string
): key is keyof AnalyticCampaignData['monthsImpressions'] =>
  monthKeys.includes(key as keyof AnalyticCampaignData['monthsImpressions'])

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
      <CampaignSectionToolbar table={table} visibleMonths={visibleMonths} />

      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TablePartialHeader
            table={table}
            columnsKey={monthKeys}
            totalKey="totalImpressions"
            label="Partial of impressions:"
          />

          <TableHeaderTemplate header={header} />

          <TableBody>
            {rows.length ? (
              rows.map(r => <RowCommon key={r.id} row={r} />)
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
