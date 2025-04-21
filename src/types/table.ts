import type { RowData } from '@tanstack/react-table'

/**
 * Module augmentation for `@tanstack/react-table` to extend `ColumnMeta` with custom options.
 */
declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    omitOnNestedRow?: boolean
    headerClassName?: string
    cellClassName?: string
  }
}

export interface ContentTrackerData {
  id: number
  header: string
  type: string
  status: string
  target: string
  limit: string
  reviewer: string
}

export interface AnalyticCampaignData {
  campaignId: string
  campaignName: string
  conversions: number
  revenue: number
  clicks: number
  monthsImpressions: {
    january: number
    february: number
    march: number
    april: number
    may: number
    june: number
    july: number
    august: number
    september: number
    october: number
    november: number
    december: number
  }
}

export type ProjectStatus = 'active' | 'archived' | 'in-review' | 'draft'

export interface ProjectData {
  id: string
  name: string
  description: string
  owner: {
    name: string
    avatarUrl?: string
  }
  contributors: {
    name: string
    avatarUrl?: string
  }[]
  status: ProjectStatus
  startDate: string
  endDate?: string
  lastUpdated: string
  tags: string[]
}
