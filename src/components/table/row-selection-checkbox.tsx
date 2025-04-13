import type { Row } from '@tanstack/react-table'

import { Checkbox } from '../ui/checkbox'

interface RowSelectionCheckboxProps<TData> {
  row: Row<TData>
}

export function RowSelectionCheckbox<TData>({
  row,
}: RowSelectionCheckboxProps<TData>) {
  const isSelected = row.getIsSelected()

  return (
    <div className="flex items-center justify-center">
      <Checkbox
        checked={isSelected}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    </div>
  )
}
