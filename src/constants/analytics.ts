import type { VisibilityState } from '@tanstack/react-table'

import { monthsMap } from './months'

export const defaultVisibility: VisibilityState = Object.fromEntries([
  ...Object.values(monthsMap).map(key => [key, false]),
  ['totalImpressions', false],
])

export const toggleColumnsVisibility = ['conversions', 'revenue', 'clicks']
