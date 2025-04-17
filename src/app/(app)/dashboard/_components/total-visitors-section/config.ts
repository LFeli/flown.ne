import type { ChartConfig } from '@/components/ui/chart'
import type { ChartTimeRange } from '@/types/chart'

export const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-2)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig

export const chartPeriodLabel: Record<ChartTimeRange, string> = {
  '7d': 'Last 7 days',
  '30d': 'Last 30 days',
  '90d': 'Last 3 months',
}

export const chartPeriodMap: Record<ChartTimeRange, number> = {
  '7d': 7,
  '30d': 30,
  '90d': 90,
}
