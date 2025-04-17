import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import type { VisitorsChartData } from '@/types/chart'

import { chartConfig } from './config'

interface VisitorsChartInteractiveProps {
  data: VisitorsChartData[]
}

export function VisitorsChartInteractive({
  data,
}: VisitorsChartInteractiveProps) {
  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-[250px] w-full"
    >
      <AreaChart data={data}>
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={chartConfig.desktop.color}
              stopOpacity={2.0}
            />
            <stop
              offset="95%"
              stopColor={chartConfig.desktop.color}
              stopOpacity={0.1}
            />
          </linearGradient>

          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={chartConfig.mobile.color}
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor={chartConfig.mobile.color}
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>

        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          tickFormatter={value => {
            const date = new Date(value)
            return date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })
          }}
        />

        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              labelFormatter={value => {
                return new Date(value).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })
              }}
              indicator="dot"
            />
          }
        />

        <Area
          dataKey="mobile"
          type="natural"
          fill="url(#fillMobile)"
          stroke={chartConfig.mobile.color}
          strokeOpacity={0}
          stackId="a"
        />

        <Area
          dataKey="desktop"
          type="natural"
          fill="url(#fillDesktop)"
          stroke={chartConfig.desktop.color}
          strokeOpacity={0}
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  )
}
