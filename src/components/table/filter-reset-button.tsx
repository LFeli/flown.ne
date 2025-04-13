import { XIcon } from 'lucide-react'

import { Button } from '../ui/button'

interface FilterResetButtonProps {
  action: () => void
}

export function FilterResetButton({ action }: FilterResetButtonProps) {
  return (
    <Button
      variant={'ghost'}
      size={'default'}
      className="h-10 cursor-pointer"
      onClick={action}
    >
      Reset filters
      <XIcon className="ml-2 size-4" />
    </Button>
  )
}
