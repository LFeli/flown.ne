import { SiteFooter } from '@/components/layout/footer'

import { CampaignPerformanceTable } from './_components/campaign-performance-section/campaign-performance-table'
import { ClickActivityChart } from './_components/click-activity-over-time-section/click-activity-chart'
import { TotalConversionsChart } from './_components/total-conversions-overview-section/total-conversions-chart'

export default function AnalyticsPage() {
  return (
    <main className="flex flex-1 flex-col gap-3 ">
      <div className="flex h-full flex-col gap-4 p-4 md:gap-6 md:p-6">
        <article className="md: grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <TotalConversionsChart />
          <ClickActivityChart />
        </article>

        <CampaignPerformanceTable />
      </div>
      <SiteFooter />
    </main>
  )
}
