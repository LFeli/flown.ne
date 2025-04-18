import type { ChartConfig } from '@/components/ui/chart'

export const trackerDetailsChartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-2)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig
