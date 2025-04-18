import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import type { TrackerDetailsChartData } from '@/types/chart'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import { trackerDetailsChartConfig } from './tracker-details-chart-config'

interface TrackerDetailsInteractiveChartProps {
  data: TrackerDetailsChartData[]
}

export function TrackerDetailsInteractiveChart({
  data,
}: TrackerDetailsInteractiveChartProps) {
  return (
    <ChartContainer config={trackerDetailsChartConfig} className="p-4">
      <AreaChart accessibilityLayer data={data}>
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={trackerDetailsChartConfig.desktop.color}
              stopOpacity={2.0}
            />
            <stop
              offset="95%"
              stopColor={trackerDetailsChartConfig.desktop.color}
              stopOpacity={0.1}
            />
          </linearGradient>

          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={trackerDetailsChartConfig.mobile.color}
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor={trackerDetailsChartConfig.mobile.color}
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>

        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="month"
          interval={0}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={0}
          tick={({ x, y, payload, index }) => {
            const totalTicks = 6
            let anchor: 'start' | 'middle' | 'end' = 'middle'

            if (index === 0) anchor = 'start'
            else if (index === totalTicks - 1) anchor = 'end'

            return (
              <text
                x={x}
                y={y + 10}
                textAnchor={anchor}
                className="text-muted-foreground"
                fontSize={12}
              >
                {payload.value.slice(0, 3)}
              </text>
            )
          }}
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />

        <Area
          dataKey="mobile"
          type="natural"
          fill={trackerDetailsChartConfig.mobile.color}
          fillOpacity={0.6}
          stroke={trackerDetailsChartConfig.mobile.color}
          stackId="a"
        />
        <Area
          dataKey="desktop"
          type="natural"
          fill={trackerDetailsChartConfig.desktop.color}
          fillOpacity={0.4}
          stroke={trackerDetailsChartConfig.desktop.color}
          stackId="a"
        />
      </AreaChart>

      {/* <CartesianGrid vertical={false} />

        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={value => value.slice(0, 3)}
          hide
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />

        <Area
          dataKey="mobile"
          type="natural"
          fill={trackerDetailsChartConfig.mobile.color}
          fillOpacity={0.6}
          stroke={trackerDetailsChartConfig.mobile.color}
          stackId="a"
        />
        <Area
          dataKey="desktop"
          type="natural"
          fill={trackerDetailsChartConfig.desktop.color}
          fillOpacity={0.4}
          stroke={trackerDetailsChartConfig.desktop.color}
          stackId="a"
        />
       */}
    </ChartContainer>
  )
}
