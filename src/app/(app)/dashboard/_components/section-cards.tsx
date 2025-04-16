import { ActiveAccountsCard } from './cards/active-accounts-card'
import { GrowthRateCard } from './cards/growth-rate-card'
import { NewCustomersCard } from './cards/new-customers-card'
import { TotalRevenueCard } from './cards/total-revenue-card'

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 xl:grid-cols-2 2xl:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <TotalRevenueCard />
      <NewCustomersCard />
      <ActiveAccountsCard />
      <GrowthRateCard />
    </div>
  )
}
