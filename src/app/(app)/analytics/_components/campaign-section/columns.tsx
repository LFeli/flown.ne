'use client'

import type { ColumnDef, Row, Table } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { monthRange, monthsMap } from '@/constants/months'
import type { AnalyticCampaignData } from '@/types/table'

import { CampaignTableRowAction } from './row-action'

type MonthKey = keyof AnalyticCampaignData['monthsImpressions']

// ✅ Derive valid month keys from monthsMap values
const monthKeys = Object.values(
  monthsMap
) as (keyof AnalyticCampaignData['monthsImpressions'])[]

// ✅ Type guard to check if a string is a MonthKey
const isMonthKey = (
  key: string
): key is keyof AnalyticCampaignData['monthsImpressions'] =>
  monthKeys.includes(key as keyof AnalyticCampaignData['monthsImpressions'])

export const columns: ColumnDef<AnalyticCampaignData>[] = [
  {
    accessorKey: 'campaignId',
    header: 'Campaign ID',
    cell: ({ row }) => {
      const campaignId = row.original.campaignId

      return (
        <Badge
          variant={'secondary'}
          className="truncate px-1.5 font-mono text-muted-foreground"
        >
          {campaignId}
        </Badge>
      )
    },

    meta: {
      cellClassName: 'w-32 min-w-32',
    },
  },

  {
    accessorKey: 'campaignName',
    header: 'Campaign Name',
    cell: ({ row }) => {
      const campaignName = row.original.campaignName

      return (
        <div className="w-40 min-w-40 truncate">
          <Badge variant="outline" className="px-1.5 text-muted-foreground">
            {campaignName}
          </Badge>
        </div>
      )
    },

    meta: {
      cellClassName: 'min-w-72',
    },
  },

  {
    accessorKey: 'conversions',
    header: 'Conversions',
    cell: ({ row }) => {
      const conversions = row.original.conversions

      return (
        <span className="truncate text-right font-medium tabular-nums">
          {conversions}
        </span>
      )
    },

    meta: {
      cellClassName: 'w-28 min-w-28',
    },
  },

  {
    accessorKey: 'revenue',
    header: 'Revenue',
    cell: ({ row }) => {
      const revenue = row.original.revenue

      return (
        <span className="truncate text-right font-medium tabular-nums">
          {revenue}
        </span>
      )
    },

    meta: {
      cellClassName: 'w-24 min-w-24',
    },
  },

  {
    accessorKey: 'clicks',
    header: 'Clicks',
    cell: ({ row }) => {
      const clicks = row.original.clicks

      return (
        <span className="truncate text-right font-medium tabular-nums">
          {clicks}
        </span>
      )
    },

    meta: {
      cellClassName: 'w-24 min-w-24',
    },
  },

  // generate months columns dynamic.
  ...monthRange.map(monthNumber => {
    const monthKey = monthsMap[monthNumber] as MonthKey
    const label = monthKey.charAt(0).toUpperCase() + monthKey.slice(1, 3)

    return {
      id: monthKey,
      header: label,
      cell: ({ row }: { row: Row<AnalyticCampaignData> }) => {
        const value = row.original.monthsImpressions[monthKey]

        return (
          <span className="text-right font-medium font-mono text-muted-foreground tabular-nums">
            {value}
          </span>
        )
      },
      footer: ({
        table,
      }: {
        table: Table<AnalyticCampaignData>
      }) =>
        table.getFilteredRowModel().rows.reduce((sum, r) => {
          const value = r.original.monthsImpressions[monthKey]
          return sum + (value ?? 0) // add fallback for undefined
        }, 0),

      meta: {
        cellClassName: 'min-w-20 w-20',
      },
    }
  }),

  {
    id: 'totalImpressions',
    header: 'Total Impressions',
    cell: ({
      row,
      table,
    }: {
      row: Row<AnalyticCampaignData>
      table: Table<AnalyticCampaignData>
    }) => {
      const visibleMonthColumns = table
        .getVisibleLeafColumns()
        .map(column => column.id)
        .filter(isMonthKey)

      const totalImpressions = visibleMonthColumns.reduce(
        (sum, month) => sum + row.original.monthsImpressions[month],
        0
      )

      return (
        <span className="text-center font-medium tabular-nums">
          {totalImpressions}
        </span>
      )
    },
    footer: ({ table }) => {
      const vis = table
        .getVisibleLeafColumns()
        .map(c => c.id)
        .filter(isMonthKey)
      return table
        .getFilteredRowModel()
        .rows.reduce(
          (sum, r) =>
            sum +
            vis.reduce(
              (rowSum, m) => rowSum + r.original.monthsImpressions[m],
              0
            ),
          0
        )
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => <CampaignTableRowAction row={row} />,

    meta: {
      cellClassName: 'w-12 min-w-12',
    },
  },
]
