import { MoveRightIcon, TrendingUpIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ActiveAccountsCard() {
  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardDescription>Active Accounts</CardDescription>
        <CardTitle className="font-semibold @[250px]/card:text-3xl text-2xl tabular-nums">
          45,678
        </CardTitle>

        <div className="absolute top-0 right-4">
          <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
            <TrendingUpIcon className="size-3" />
            +12.5%
          </Badge>
        </div>
      </CardHeader>

      <CardFooter className="relative flex-col items-start gap-1 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          Strong user retention <TrendingUpIcon className="size-4" />
        </div>
        <div className="text-muted-foreground">Engagement exceed targets</div>

        <div className="absolute right-4 bottom-0 block md:hidden">
          <Badge variant="secondary" className="flex gap-3 rounded-lg text-xs">
            Swipe to next
            <MoveRightIcon className="size-3" />
          </Badge>
        </div>
      </CardFooter>
    </Card>
  )
}
