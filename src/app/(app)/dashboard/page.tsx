import { SiteFooter } from '@/components/layout/footer'

import { ContentTrackerTable } from './_components/content-tracker-section/content-tracker-table'
import { SectionCards } from './_components/kpi-card-section/section-cards'
import { TotalVisitorsChart } from './_components/total-visitors-section/total-visitors-chart'

export default function DashboardPage() {
  return (
    <main className="flex flex-1 flex-col gap-3">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />

        <div className="space-y-4 px-4 md:space-y-6 lg:px-6">
          <TotalVisitorsChart />
          <ContentTrackerTable />
        </div>

        <SiteFooter />
      </div>
    </main>
  )
}
