import type { Table } from '@tanstack/react-table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

interface PageSizeSelectorProps<TData> {
  table: Table<TData>
  rowsPeerPage?: number[]
}

export function PageSizeSelector<TData>({
  table,
  rowsPeerPage = [50, 25, 10],
}: PageSizeSelectorProps<TData>) {
  const pageSize = table.getState().pagination.pageSize

  return (
    <article className="flex items-center gap-3">
      <span className="font-medium text-sm">Rows per page</span>

      <Select
        value={String(pageSize)}
        onValueChange={value => table.setPageSize(Number(value))}
      >
        <SelectTrigger className="">
          <SelectValue placeholder={pageSize} />
        </SelectTrigger>

        <SelectContent>
          {rowsPeerPage.map(size => (
            <SelectItem key={size} value={String(size)}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </article>
  )
}
