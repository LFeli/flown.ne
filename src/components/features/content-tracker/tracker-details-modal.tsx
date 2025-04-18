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
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useIsMobile } from '@/hooks/use-mobile'
import type { TrackerDetailsChartData } from '@/types/chart'
import type { ContentTrackerData } from '@/types/table'
import { TrackerDetailsForm } from './tracker-details-form'
import { TrackerDetailsInteractiveChart } from './tracker-details-interactive-chart'

interface TrackerDetailsModalProps {
  data: ContentTrackerData | undefined
  chartData: TrackerDetailsChartData[]
}

export function TrackerDetailsModal({
  data,
  chartData,
}: TrackerDetailsModalProps) {
  const mobile = useIsMobile()
  const router = useRouter()

  const [isOpen, setIsOpen] = React.useState<boolean>(true)

  const handleCloseModal = React.useCallback(() => {
    setIsOpen(false)

    const timeout = setTimeout(() => router.back(), 150)
    return () => clearTimeout(timeout)
  }, [router])

  function onDismiss(open: boolean) {
    if (!open) {
      handleCloseModal()
    }
  }

  if (mobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onDismiss}>
        <DrawerContent className="bg-linear-to-t from-primary/5 to-card shadow-xs">
          <div className="overflow-auto">
            <DrawerHeader>
              <DrawerTitle>
                Details of{' '}
                <span className="font-bold text-primary">{data?.header}</span>
              </DrawerTitle>

              <DrawerDescription>
                Showing total visitors for the last 6 months
              </DrawerDescription>
            </DrawerHeader>

            <TrackerDetailsInteractiveChart data={chartData} />

            <Separator orientation="horizontal" className="w-full" />

            <TrackerDetailsForm data={data} onSuccess={handleCloseModal} />
          </div>

          <DrawerFooter className="space-y-2 pt-0">
            {/* the loader need make use state of mutation in react-query */}
            <Button type="submit" form="tracker-details-form">
              Save tracker details
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
        <div className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
              Details of{' '}
              <span className="font-bold text-primary">{data?.header}</span>
            </SheetTitle>

            <SheetDescription>
              Showing total visitors for the last 6 months
            </SheetDescription>
          </SheetHeader>

          <section className="px-4">
            <TrackerDetailsInteractiveChart data={chartData} />

            <Separator orientation="horizontal" className="w-full" />

            <TrackerDetailsForm data={data} onSuccess={handleCloseModal} />
          </section>
        </div>
      </SheetContent>
    </Sheet>
  )
}
