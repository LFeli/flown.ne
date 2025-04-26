import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import { ActiveMembersCard } from './active-members-card'
import { OnLeaveMembersCard } from './on-leave-members-card'
import { TotalMembersCard } from './total-members-card'
import { UniqueRolesCard } from './unique-roles-card'

export function TeamStatsCardWrapper() {
  return (
    <div className="*:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs dark:*:data-[slot=card]:bg-card">
      <Carousel className="md:hidden">
        <CarouselContent>
          <CarouselItem className="flex items-stretch">
            <TotalMembersCard />
          </CarouselItem>

          <CarouselItem className="flex items-stretch">
            <ActiveMembersCard />
          </CarouselItem>

          <CarouselItem className="flex items-stretch">
            <OnLeaveMembersCard />
          </CarouselItem>

          <CarouselItem className="flex items-stretch">
            <UniqueRolesCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="hidden items-stretch md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-4">
        <TotalMembersCard />
        <ActiveMembersCard />
        <OnLeaveMembersCard />
        <UniqueRolesCard />
      </div>
    </div>
  )
}
