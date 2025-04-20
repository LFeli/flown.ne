'use client'

import { Badge } from '@/components/ui/badge'
import type { AnalyticCampaignPerformanceData } from '@/types/table'
import type { ColumnDef } from '@tanstack/react-table'
import { AnalyticCampaignPerformanceRowAction } from './row-action'

export const columns: ColumnDef<AnalyticCampaignPerformanceData>[] = [
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
      cellClassName: 'w-48 min-w-48',
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

  {
    id: 'january',
    header: 'Jan',
    cell: ({ row }) => {
      const january = row.original.monthsImpressions.january

      return (
        <span className="text-right font-medium font-mono text-muted-foreground tabular-nums">
          {january}
        </span>
      )
    },

    meta: {
      cellClassName: 'min-w-20 w-20',
    },
  },

  {
    id: 'february',
    header: 'Feb',
    cell: ({ row }) => {
      const february = row.original.monthsImpressions.february

      return (
        <span className="text-right font-medium font-mono text-muted-foreground tabular-nums">
          {february}
        </span>
      )
    },

    meta: {
      cellClassName: 'min-w-20 w-20',
    },
  },

  {
    id: 'march',
    header: 'Mar',
    cell: ({ row }) => {
      const march = row.original.monthsImpressions.march

      return (
        <span className="text-right font-medium font-mono text-muted-foreground tabular-nums">
          {march}
        </span>
      )
    },

    meta: {
      cellClassName: 'min-w-20 w-20',
    },
  },

  {
    id: 'april',
    header: 'Apr',
    cell: ({ row }) => {
      const april = row.original.monthsImpressions.april

      return (
        <span className="text-right font-medium font-mono text-muted-foreground tabular-nums">
          {april}
        </span>
      )
    },

    meta: {
      cellClassName: 'min-w-20 w-20',
    },
  },

  {
    id: 'may',
    header: 'May',
    cell: ({ row }) => {
      const may = row.original.monthsImpressions.may

      return (
        <span className="text-right font-medium font-mono text-muted-foreground tabular-nums">
          {may}
        </span>
      )
    },

    meta: {
      cellClassName: 'min-w-20 w-20',
    },
  },

  {
    id: 'june',
    header: 'Jun',
    cell: ({ row }) => {
      const june = row.original.monthsImpressions.june

      return (
        <span className="text-right font-medium font-mono text-muted-foreground tabular-nums">
          {june}
        </span>
      )
    },

    meta: {
      cellClassName: 'min-w-20 w-20',
    },
  },

  {
    id: 'july',
    header: 'Jul',
    cell: ({ row }) => {
      const july = row.original.monthsImpressions.july

      return (
        <span className="text-right font-medium font-mono text-muted-foreground tabular-nums">
          {july}
        </span>
      )
    },

    meta: {
      cellClassName: 'min-w-20 w-20',
    },
  },

  {
    id: 'august',
    header: 'Aug',
    cell: ({ row }) => {
      const august = row.original.monthsImpressions.august

      return (
        <span className="text-right font-medium font-mono text-muted-foreground tabular-nums">
          {august}
        </span>
      )
    },

    meta: {
      cellClassName: 'min-w-20 w-20',
    },
  },

  {
    id: 'september',
    header: 'Sep',
    cell: ({ row }) => {
      const september = row.original.monthsImpressions.september

      return (
        <span className="text-right font-medium font-mono text-muted-foreground tabular-nums">
          {september}
        </span>
      )
    },

    meta: {
      cellClassName: 'min-w-20 w-20',
    },
  },

  {
    id: 'october',
    header: 'Oct',
    cell: ({ row }) => {
      const october = row.original.monthsImpressions.october

      return (
        <span className="text-right font-medium font-mono text-muted-foreground tabular-nums">
          {october}
        </span>
      )
    },

    meta: {
      cellClassName: 'min-w-20 w-20',
    },
  },

  {
    id: 'november',
    header: 'Nov',
    cell: ({ row }) => {
      const november = row.original.monthsImpressions.november

      return (
        <span className="text-right font-medium font-mono text-muted-foreground tabular-nums">
          {november}
        </span>
      )
    },

    meta: {
      cellClassName: 'min-w-20 w-20',
    },
  },

  {
    id: 'december',
    header: 'Dec',
    cell: ({ row }) => {
      const december = row.original.monthsImpressions.december

      return (
        <span className="text-right font-medium font-mono text-muted-foreground tabular-nums">
          {december}
        </span>
      )
    },

    meta: {
      cellClassName: 'min-w-20 w-20',
    },
  },

  {
    id: 'totalImpressions',
    header: 'Total Impressions',
    cell: ({ row, table }) => {
      const visibleMonths = table
        .getVisibleLeafColumns()
        .map(col => col.id)
        .filter(id =>
          [
            'january',
            'february',
            'march',
            'april',
            'may',
            'june',
            'july',
            'august',
            'september',
            'october',
            'november',
            'december',
          ].includes(id)
        )

      const monthsImpressions = row.original.monthsImpressions

      const total = visibleMonths.reduce((sum, month) => {
        return (
          sum +
          (monthsImpressions[month as keyof typeof monthsImpressions] || 0)
        )
      }, 0)

      return (
        <span className="text-center font-medium tabular-nums">{total}</span>
      )
    },

    meta: {
      cellClassName: 'min-w-32 w-32',
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => <AnalyticCampaignPerformanceRowAction row={row} />,

    meta: {
      cellClassName: 'w-12 min-w-12',
    },
  },
]
