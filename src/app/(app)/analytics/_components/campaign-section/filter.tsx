import { useRouter } from 'next/navigation'

import { CheckIcon, FilterIcon } from 'lucide-react'
import React from 'react'

import { FilterResetButton } from '@/components/table/filter-reset-button'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { monthsMap, quarterMap } from '@/constants/months'
import { formatToTitleCase } from '@/utils/format-to-title-case'

interface CampaignSectionFilterProps {
  visibleMonths?: string[]
}

export function CampaignSectionFilter({
  visibleMonths,
}: CampaignSectionFilterProps) {
  const router = useRouter()
  const [selected, setSelected] = React.useState<string[]>(visibleMonths ?? [])

  const toggleMonth = React.useCallback((month: string) => {
    setSelected(previous =>
      previous.includes(month)
        ? previous.filter(m => m !== month)
        : [...previous, month]
    )
  }, [])

  const toggleQuarter = React.useCallback(
    (quarter: string) => {
      const months = quarterMap[quarter]
      const allSelected = months.every(month => selected.includes(month))

      setSelected(prev =>
        allSelected
          ? prev.filter(month => !months.includes(month))
          : Array.from(new Set([...prev, ...months]))
      )
    },
    [selected]
  )

  const handleApply = React.useCallback(() => {
    if (selected.length === 0) {
      router.push('?start=0&end=0')
      return
    }

    const sorted = selected.map(Number).sort((a, b) => a - b)
    const start = String(sorted[0])
    const end = String(sorted[sorted.length - 1])

    const params = new URLSearchParams(window.location.search)
    params.set('start', start)
    params.set('end', end)

    router.push(`?${params.toString()}`)
  }, [router, selected])

  const handleClear = React.useCallback(() => {
    setSelected([])
    router.push('?start=1&end=12')
  }, [router])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="size-8 md:size-10">
          <FilterIcon className="size-4" />
          <span className="sr-only">Filters</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" sideOffset={8} className="w-44">
        <DropdownMenuLabel>Filter by Months</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Select by Month</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent alignOffset={-4} sideOffset={8}>
              {Object.entries(monthsMap).map(([num, name]) => (
                <DropdownMenuCheckboxItem
                  key={num}
                  checked={selected.includes(num)}
                  onCheckedChange={() => toggleMonth(num)}
                  onSelect={event => event.preventDefault()}
                >
                  {formatToTitleCase(name)}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Select by Quarter</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent alignOffset={-4} sideOffset={8}>
              {Object.entries(quarterMap).map(([quarter, months]) => (
                <DropdownMenuCheckboxItem
                  key={quarter}
                  checked={months.every(m => selected.includes(m))}
                  onCheckedChange={() => toggleQuarter(quarter)}
                  onSelect={event => event.preventDefault()}
                >
                  {quarter}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className="flex flex-col">
          <DropdownMenuItem onSelect={handleApply} asChild>
            <Button variant="secondary" size="sm" className="w-full">
              Apply filters
              <CheckIcon className="ml-auto size-4" />
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem onSelect={handleClear} asChild>
            <FilterResetButton />
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
