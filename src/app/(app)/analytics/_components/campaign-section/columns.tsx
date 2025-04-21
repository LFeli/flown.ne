'use client'

import type { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import type { AnalyticCampaignData } from '@/types/table'

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
]
