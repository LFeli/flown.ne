'use client'

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import { useIsMobile } from '@/hooks/use-mobile'

export default function ContentTrackerDetailsModal() {
  const mobile = useIsMobile()
  const router = useRouter()
  const pathname = usePathname()

  const isDetailsPath = pathname.includes('/dashboard/content-tracker/details/')
  const [isOpen, setIsOpen] = React.useState<boolean>(!!isDetailsPath) // for control the modal open state based on the pathname for can make the animation smooth

  function handleOnClose(open: boolean) {
    if (!open) {
      setIsOpen(false)
      const timeout = setTimeout(() => router.back(), 150) // Delay to allow the modal to close, based in animate-out duration 0.15s

      return () => clearTimeout(timeout)
    }
  }

  if (mobile) {
    return (
      <Drawer open={isOpen} onOpenChange={handleOnClose}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleOnClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
