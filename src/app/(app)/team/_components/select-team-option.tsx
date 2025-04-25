'use client'

import { useRouter } from 'next/navigation'

import React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { TeamOption } from '@/types/pages/team'

interface SelectTeamOptionProps {
  selected: string
  teams: TeamOption[]
}

export function SelectTeamOption({ selected, teams }: SelectTeamOptionProps) {
  const router = useRouter()

  const onChange = React.useCallback(
    (value: string) => {
      const params = new URLSearchParams(window.location.search)
      params.set('option', value)
      router.push(`?${params.toString()}`)
    },
    [router]
  )

  return (
    <Select value={selected} onValueChange={onChange}>
      <SelectTrigger className="w-full md:w-fit">
        <SelectValue placeholder="Select team" />
      </SelectTrigger>

      <SelectContent>
        {teams.map(team => (
          <SelectItem key={team.id} value={team.id}>
            {team.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
