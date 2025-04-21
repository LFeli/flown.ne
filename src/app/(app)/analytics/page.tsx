import { SiteFooter } from '@/components/layout/footer'
import { getVisibleMonths } from '@/utils/get-visible-months'
import { CampaignTable } from './_components/campaign-section/campaign-table'
import { ClickActivityChart } from './_components/click-activity-section/click-activity-chart'
import { TotalConversionsChart } from './_components/total-conversions-section/total-conversions-chart'

interface AnalyticsPageProps {
  searchParams: Promise<{ start?: string; end?: string }>
}

export default async function AnalyticsPage({
  searchParams,
}: AnalyticsPageProps) {
  const { start, end } = await searchParams
  const visibleMonths = getVisibleMonths(start, end)

  return (
    <main className="flex flex-1 flex-col gap-3">
      <div className="flex h-full flex-col gap-4 p-4 md:gap-6 md:p-6">
        <article className="md: grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <TotalConversionsChart />
          <ClickActivityChart />
        </article>

        <CampaignTable visibleMonths={visibleMonths} />
      </div>

      <SiteFooter />
    </main>
  )
}
