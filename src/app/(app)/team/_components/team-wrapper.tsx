import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { members, teamOptions } from '@/mocks/pages/team'

import { SelectTeamOption } from './select-team-option'
import { TeamStatsCardWrapper } from './stats-card-section/cards-wrapper'

interface TeamWrapperProps {
  option?: string
}

export function TeamWrapper({ option }: TeamWrapperProps) {
  const selectedTeam = React.useMemo(() => {
    return teamOptions.find(team => team.id === option) ?? teamOptions[2]
  }, [option])

  const teamMembers = React.useMemo(() => {
    return members.filter(member => member.teamId === selectedTeam.id)
  }, [selectedTeam])

  console.log(teamMembers)

  return (
    <Card className="gap-y-8 border-none bg-transparent py-4">
      <CardHeader className="relative flex flex-col items-center justify-between gap-x-8 gap-y-6 px-0 md:flex-row md:gap-x-12">
        <div className="space-y-1.5">
          <CardTitle>Team Overview</CardTitle>
          <CardDescription>
            Easily explore and manage your project teams. View team composition,
            track member roles and activity statuses, and analyze team
            distribution across departments.
          </CardDescription>
        </div>

        <SelectTeamOption selected={selectedTeam.id} teams={teamOptions} />
      </CardHeader>

      <CardContent className="px-0">
        <TeamStatsCardWrapper />

        <span>my table here...</span>
      </CardContent>
    </Card>
  )
}
