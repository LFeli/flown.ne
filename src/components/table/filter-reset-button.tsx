import { XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes } from 'react'
import { Button } from '../ui/button'

interface FilterResetButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  action?: () => void
}

export function FilterResetButton({
  action,
  className,
  ...props
}: FilterResetButtonProps) {
  return (
    <Button
      variant={'ghost'}
      size={'sm'}
      className={cn(className)}
      onClick={action}
      {...props}
    >
      Clear filters
      <XIcon className="ml-auto size-4" />
    </Button>
  )
}
