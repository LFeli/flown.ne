'use client'

import { useTheme } from 'next-themes'

import { Laptop2Icon, MoonIcon, SunIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useMounted } from '@/hooks/use-mounted'

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'icon'} className="size-10">
          {mounted && resolvedTheme === 'light' && (
            <SunIcon className="size-4" />
          )}

          {mounted && resolvedTheme === 'dark' && (
            <MoonIcon className="size-4" />
          )}

          {!mounted && <span className="size-4" />}

          <span className="sr-only">Alterar tema</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Opções</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setTheme('light')}>
            <SunIcon className="size-4" />
            Light
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme('dark')}>
            <MoonIcon className="size-4" />
            Dark
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme('system')}>
            <Laptop2Icon className="size-4" />
            Use system
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
