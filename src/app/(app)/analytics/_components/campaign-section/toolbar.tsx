import { SearchInputFilter } from '@/components/table/search-input-filter'
import type { Table } from '@tanstack/react-table'

import { CampaignSectionFilter } from './filter'

interface CampaignSectionToolbarProps<TData> {
  table: Table<TData>
  visibleMonths?: string[]
}

export function CampaignSectionToolbar<TData>({
  table,
  visibleMonths,
}: CampaignSectionToolbarProps<TData>) {
  const searchColumn = table.getColumn('campaignName')

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-x-3 md:gap-x-4">
        {searchColumn && (
          <SearchInputFilter
            table={table}
            column={searchColumn}
            placeholder="Search by name..."
          />
        )}

        <CampaignSectionFilter visibleMonths={visibleMonths} />
      </div>
    </div>
  )
}
