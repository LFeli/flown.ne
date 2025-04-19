import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import { ActiveAccountsCard } from './active-accounts-card'
import { GrowthRateCard } from './growth-rate-card'
import { NewCustomersCard } from './new-customers-card'
import { TotalRevenueCard } from './total-revenue-card'

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs dark:*:data-[slot=card]:bg-card">
      <Carousel className="px-4 md:hidden">
        <CarouselContent>
          <CarouselItem>
            <TotalRevenueCard />
          </CarouselItem>

          <CarouselItem>
            <NewCustomersCard />
          </CarouselItem>

          <CarouselItem>
            <ActiveAccountsCard />
          </CarouselItem>

          <CarouselItem>
            <GrowthRateCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="hidden px-4 md:grid md:grid-cols-2 md:gap-4 lg:px-6 xl:grid-cols-4">
        <TotalRevenueCard />
        <NewCustomersCard />
        <ActiveAccountsCard />
        <GrowthRateCard />
      </div>
    </div>
  )
}
