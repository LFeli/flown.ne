import { SectionCards } from './_components/section-cards'
import { TotalVisitorsChart } from './_components/total-visitors-chart'

export default function DashboardPage() {
  return (
    <main className="flex flex-1 flex-col gap-3">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />

        <div className="px-4 lg:px-6">
          <TotalVisitorsChart />
        </div>

        <span>my table here...</span>
      </div>
    </main>
  )
}
