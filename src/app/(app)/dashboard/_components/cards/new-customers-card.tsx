import { TrendingDownIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function NewCustomersCard() {
  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardDescription>New Customers</CardDescription>
        <CardTitle className="font-semibold @[250px]/card:text-3xl text-2xl tabular-nums">
          1,234
        </CardTitle>
        <div className="absolute top-0 right-4">
          <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
            <TrendingDownIcon className="size-3" />
            -20%
          </Badge>
        </div>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          Down 20% this period <TrendingDownIcon className="size-4" />
        </div>
        <div className="text-muted-foreground">Acquisition needs attention</div>
      </CardFooter>
    </Card>
  )
}
