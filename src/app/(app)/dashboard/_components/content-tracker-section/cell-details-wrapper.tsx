'use client'

import { useIsMobile } from '@/hooks/use-mobile'
import type { ContentTrackerData } from '@/types/table'

interface CellDetailsWrapperProps {
  item: ContentTrackerData
}

export function CellDetailsWrapper({ item }: CellDetailsWrapperProps) {
  const isMobile = useIsMobile()
}
