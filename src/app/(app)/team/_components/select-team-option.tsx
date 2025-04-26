'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
import type { TeamOption } from '@/types/pages/team'
import { Check, ChevronDownIcon } from 'lucide-react'

interface SelectTeamOptionProps {
  selected: string
  teams: TeamOption[]
}

export function SelectTeamOption({ selected, teams }: SelectTeamOptionProps) {
  const [openDrawer, setOpenDrawer] = React.useState(false)

  const router = useRouter()
  const isMobile = useIsMobile()

  const onChange = React.useCallback(
    (value: string) => {
      const params = new URLSearchParams(window.location.search)
      params.set('option', value)
      router.push(`?${params.toString()}`)

      setOpenDrawer(false)
    },
    [router]
  )

  if (isMobile) {
    return (
      <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="w-full items-center justify-between"
          >
            {teams.find(team => team.id === selected)?.label || 'Select team'}

            <ChevronDownIcon className="size-4 text-muted-foreground" />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="bg-card text-card-foreground">
          <DrawerHeader>
            <DrawerTitle>Select a team</DrawerTitle>
            <DrawerDescription>
              Lorem ipsum dolor sit, amet consectetur.
            </DrawerDescription>
          </DrawerHeader>

          <section className="space-y-2 px-4">
            {teams.map(team => {
              const isSelected = team.id === selected

              return (
                <Button
                  key={team.id}
                  variant={'ghost'}
                  className={cn(
                    'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm',
                    {
                      'bg-accent': isSelected,
                    }
                  )}
                  onClick={() => onChange(team.id)}
                >
                  <span>{team.label}</span>
                  {isSelected && <Check className="h-4 w-4 text-primary" />}
                </Button>
              )
            })}
          </section>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="dark:border-none dark:bg-background"
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }

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
