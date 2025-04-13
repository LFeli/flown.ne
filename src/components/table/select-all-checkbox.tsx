import type { Table } from '@tanstack/react-table'

import { Checkbox } from '../ui/checkbox'

interface SelectAllCheckboxProps<TData> {
  table: Table<TData>
}

export function SelectAllCheckbox<TData>({
  table,
}: SelectAllCheckboxProps<TData>) {
  const allRowsSelected = table.getIsAllPageRowsSelected()
  const someRowsSelected = table.getIsSomePageRowsSelected()

  return (
    <div className="flex items-center justify-center">
      <Checkbox
        checked={allRowsSelected || (someRowsSelected && 'indeterminate')}
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    </div>
  )
}
