'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useIsMobile } from '@/hooks/use-mobile'
import type { ContentTrackerData } from '@/types/table'
import { TrackerDetailsForm } from './tracker-details-form'
import { TrackerDetailsInteractiveChart } from './tracker-details-interactive-chart'

interface TrackerDetailsModalProps {
  data: ContentTrackerData | undefined
}

export function TrackerDetailsModal({ data }: TrackerDetailsModalProps) {
  const mobile = useIsMobile()
  const router = useRouter()

  const [isOpen, setIsOpen] = React.useState<boolean>(true)

  function onDismiss(open: boolean) {
    if (!open) {
      setIsOpen(false)

      const timeout = setTimeout(() => router.back(), 150) // Delay to allow the modal to close, based in animate-out duration 0.15s
      return () => clearTimeout(timeout)
    }
  }

  if (mobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onDismiss}>
        <DrawerContent className="bg-linear-to-t from-primary/5 to-card shadow-xs">
          <DrawerHeader>
            <DrawerTitle>{data?.header}</DrawerTitle>

            <DrawerDescription>
              Showing total visitors for the last 6 months
            </DrawerDescription>
          </DrawerHeader>

          <TrackerDetailsInteractiveChart />

          <TrackerDetailsForm />

          <DrawerFooter className="space-y-2">
            <Button type="submit" form="tracker-details-form">
              Submit
            </Button>

            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Sheet open={isOpen} onOpenChange={onDismiss}>
      <SheetContent className="bg-linear-to-t from-primary/5 to-card shadow-xs">
        <SheetHeader>
          <SheetTitle>{data?.header}</SheetTitle>

          <SheetDescription>
            Showing total visitors for the last 6 months
          </SheetDescription>
        </SheetHeader>

        <TrackerDetailsInteractiveChart />

        <TrackerDetailsForm />
      </SheetContent>
    </Sheet>
  )
}
