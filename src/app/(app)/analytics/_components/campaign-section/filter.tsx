import { useRouter } from 'next/navigation'

import type { Table } from '@tanstack/react-table'
import {
  CalendarRangeIcon,
  CheckIcon,
  ColumnsIcon,
  FilterIcon,
  PencilIcon,
} from 'lucide-react'
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
import { monthRange, monthsMap, quarterMap } from '@/constants/months'
import { formatToTitleCase } from '@/utils/format-to-title-case'

interface CampaignSectionFilterProps<TData> {
  table: Table<TData>
  visibleMonths?: string[]
}

const TOGGLE_COLUMNS = ['conversions', 'revenue', 'clicks']

export function CampaignSectionFilter<TData>({
  table,
  visibleMonths,
}: CampaignSectionFilterProps<TData>) {
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
      router.push('?months=0')
      return
    }

    const sorted = selected.map(Number).sort((a, b) => a - b)
    const monthParam = sorted.join(',')

    const params = new URLSearchParams(window.location.search)
    params.set('months', monthParam)

    router.push(`?${params.toString()}`)
  }, [router, selected])

  const handleClear = React.useCallback(() => {
    setSelected(monthRange) // Set state to all available months

    table.setColumnVisibility(
      Object.fromEntries(TOGGLE_COLUMNS.map(col => [col, true]))
    )

    const params = new URLSearchParams(window.location.search)
    params.delete('months') // Remove the param entirely
    router.push(`?${params.toString()}`)
  }, [router, table])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="size-8 md:size-10">
          <FilterIcon className="size-4" />
          <span className="sr-only">Filters</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" sideOffset={8} className="w-44">
        <DropdownMenuLabel className="flex items-center text-muted-foreground">
          Filter by Months
          <CalendarRangeIcon className="ml-auto size-4" />
        </DropdownMenuLabel>
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
        <DropdownMenuLabel className="flex items-center text-muted-foreground">
          Column visibility
          <ColumnsIcon className="ml-auto size-4" />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Toggle columns</DropdownMenuSubTrigger>

          <DropdownMenuPortal>
            <DropdownMenuSubContent alignOffset={-4} sideOffset={8}>
              {TOGGLE_COLUMNS.map(columnId => {
                const column = table?.getColumn(columnId)

                return (
                  <DropdownMenuCheckboxItem
                    key={columnId}
                    checked={column?.getIsVisible()}
                    onCheckedChange={() => column?.toggleVisibility()}
                    onSelect={event => event.preventDefault()}
                  >
                    {formatToTitleCase(columnId)}
                  </DropdownMenuCheckboxItem>
                )
              })}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSeparator />
        <DropdownMenuLabel className="flex items-center text-muted-foreground">
          Actions
          <PencilIcon className="ml-auto size-4" />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className="flex flex-col">
          <DropdownMenuItem onSelect={handleApply} asChild>
            <Button
              variant="secondary"
              size="sm"
              className="w-full focus-visible:ring-0"
            >
              Apply filters
              <CheckIcon className="ml-auto size-4" />
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem
            onSelect={handleClear}
            className="w-full focus-visible:ring-0"
            asChild
          >
            <FilterResetButton />
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
