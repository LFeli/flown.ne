import type { ProjectMember } from '@/types/pages/team'
import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import { ActiveMembersCard } from './active-members-card'
import { OnLeaveMembersCard } from './on-leave-members-card'
import { TotalMembersCard } from './total-members-card'
import { UniqueRolesCard } from './unique-roles-card'

interface TeamStatsCardWrapperProps {
  members: ProjectMember[]
}

export function TeamStatsCardWrapper({ members }: TeamStatsCardWrapperProps) {
  const { totalMembers, activeCount, onLeaveCount, uniqueRoleCount } =
    React.useMemo(() => {
      const activeMembers = members.filter(member => member.status === 'active')
      const onLeaveMembers = members.filter(
        member => member.status === 'on-leave'
      )
      const uniqueRoles = new Set(members.map(member => member.role))

      return {
        totalMembers: members.length,
        activeCount: activeMembers.length,
        onLeaveCount: onLeaveMembers.length,
        uniqueRoleCount: uniqueRoles.size,
      }
    }, [members])

  return (
    <div className="*:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs dark:*:data-[slot=card]:bg-card">
      <Carousel className="md:hidden">
        <CarouselContent>
          <CarouselItem className="flex items-stretch">
            <TotalMembersCard total={totalMembers} />
          </CarouselItem>

          <CarouselItem className="flex items-stretch">
            <ActiveMembersCard count={activeCount} />
          </CarouselItem>

          <CarouselItem className="flex items-stretch">
            <OnLeaveMembersCard count={onLeaveCount} />
          </CarouselItem>

          <CarouselItem className="flex items-stretch">
            <UniqueRolesCard count={uniqueRoleCount} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="hidden items-stretch md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-4">
        <TotalMembersCard total={totalMembers} />
        <ActiveMembersCard count={activeCount} />
        <OnLeaveMembersCard count={onLeaveCount} />
        <UniqueRolesCard count={uniqueRoleCount} />
      </div>
    </div>
  )
}
