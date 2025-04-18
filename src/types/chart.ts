export interface TrackerDetailsChartData {
  month: string
  desktop: number
  mobile: number
}

export interface VisitorsChartData {
  date: string
  desktop: number
  mobile: number
}

export type ChartTimeRange = '7d' | '30d' | '90d'
