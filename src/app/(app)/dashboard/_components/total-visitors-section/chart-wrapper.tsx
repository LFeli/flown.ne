import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { ChartTimeRange, VisitorsChartData } from '@/types/chart'
import { VisitorsChartInteractive } from './chart-interactive'
import { chartPeriodLabel } from './config'

interface VisitorsChartWrapperProps {
  data: VisitorsChartData[]
  timeRange: ChartTimeRange
  onTimeRangeChange: (timeRange: ChartTimeRange) => void
}

export function VisitorsChartWrapper({
  data,
  timeRange,
  onTimeRangeChange,
}: VisitorsChartWrapperProps) {
  return (
    <Card className="bg-gradient-to-t from-primary/5 to-card shadow-xs">
      <CardHeader className="relative">
        <CardTitle>Total Visitors</CardTitle>

        <CardDescription>
          <span className="@[540px]/card:block hidden">
            Total for the {chartPeriodLabel[timeRange].toLowerCase()}
          </span>

          <span className="@[540px]/card:hidden">
            Last {chartPeriodLabel[timeRange].toLowerCase()}
          </span>
        </CardDescription>

        <div className="absolute top-0 right-4">
          <Select value={timeRange} onValueChange={onTimeRangeChange}>
            <SelectTrigger
              className="flex @[767px]/card:hidden w-40"
              aria-label="Select a value"
            >
              <SelectValue
                placeholder={chartPeriodLabel[timeRange].toLowerCase()}
              />
            </SelectTrigger>

            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="px-6 pt-4">
        <VisitorsChartInteractive data={data} />
      </CardContent>
    </Card>
  )
}
