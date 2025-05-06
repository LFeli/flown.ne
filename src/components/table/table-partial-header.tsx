'use client'

import { type Table, flexRender } from '@tanstack/react-table'

import { cn } from '@/lib/utils'
import { TableHead, TableHeader, TableRow } from '../ui/table'

interface TablePartialHeaderProps<TData> {
  table: Table<TData>
  columnsKey: string[] // dynamic list of visible month IDs (ex: ['jan', 'feb', ...])
  totalKey?: string // optional key like 'totalImpressions'
  label?: string
}

export function TablePartialHeader<TData>({
  table,
  columnsKey,
  totalKey,
  label = 'Partial',
}: TablePartialHeaderProps<TData>) {
  const footerGroup = table.getFooterGroups()[0]

  const shouldRender = footerGroup.headers.some(header =>
    columnsKey.includes(header.id)
  )

  if (!shouldRender) {
    return null
  }

  return (
    <TableHeader>
      <TableRow className="bg-transparent text-sm">
        {footerGroup.headers.map((cell, index) => {
          const { id, column, colSpan } = cell

          if (index === 0) {
            return (
              <TableHead
                key="label"
                colSpan={colSpan}
                className="w-fit whitespace-nowrap px-4 py-2 text-left font-semibold"
              >
                {label}
              </TableHead>
            )
          }

          if (!columnsKey.includes(id) && id !== totalKey) {
            return <TableHead key={id} colSpan={colSpan} />
          }

          return (
            <TableHead
              key={id}
              colSpan={colSpan}
              className={cn(
                column.columnDef.meta?.cellClassName,
                'px-2 py-2 text-left font-mono font-semibold text-muted-foreground'
              )}
            >
              {flexRender(column.columnDef.footer, cell.getContext())}
            </TableHead>
          )
        })}
      </TableRow>
    </TableHeader>
  )
}
