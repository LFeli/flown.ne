import { type HeaderGroup, flexRender } from '@tanstack/react-table'

import { TableHead, TableHeader, TableRow } from '../ui/table'

interface TableHeaderTemplateProps<TData> {
  header: HeaderGroup<TData>[]
}

export function TableHeaderTemplate<TData>({
  header,
}: TableHeaderTemplateProps<TData>) {
  return (
    <TableHeader className="sticky top-0 z-10 bg-muted">
      {header.map(headerGroup => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map(header => {
            return (
              <TableHead key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            )
          })}
        </TableRow>
      ))}
    </TableHeader>
  )
}
