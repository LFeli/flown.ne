'use client'

import React from 'react'

import { useIsMobile } from '@/hooks/use-mobile'
import { chartDataMock } from '@/mocks/chart'

import type { ChartTimeRange, VisitorsChartData } from '@/types/chart'
import { VisitorsChartWrapper } from './chart-wrapper'
import { chartPeriodMap } from './config'

export function TotalVisitorsChart() {
  const [timeRange, setTimeRange] = React.useState<ChartTimeRange>('30d')
  const isMobile = useIsMobile()

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange('7d')
    }
  }, [isMobile])

  const filteredData: VisitorsChartData[] = React.useMemo(() => {
    const referenceDate = new Date('2024-05-12')
    const daysToSubtract = chartPeriodMap[timeRange] ?? 90

    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)

    return chartDataMock.filter(({ date }) => new Date(date) >= startDate)
  }, [timeRange])

  return (
    <VisitorsChartWrapper
      data={filteredData}
      timeRange={timeRange}
      onTimeRangeChange={setTimeRange}
    />
  )
}
