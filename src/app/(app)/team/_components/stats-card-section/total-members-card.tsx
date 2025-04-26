import { MoveRightIcon, TrendingDownIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface TotalMembersCardProps {
  total: number
}

export function TotalMembersCard({ total }: TotalMembersCardProps) {
  return (
    <Card className="@container/card flex flex-1 flex-col justify-between">
      <CardHeader className="relative">
        <CardDescription>Total Members</CardDescription>
        <CardTitle className="font-semibold @[250px]/card:text-3xl text-2xl tabular-nums">
          {total}
        </CardTitle>

        <div className="absolute top-0 right-4">
          <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
            <TrendingDownIcon className="size-3" />
            -20%
          </Badge>
        </div>
      </CardHeader>

      <CardFooter className="items-start justify-between gap-x-6 text-sm">
        <div className="max-w-48 text-muted-foreground md:max-w-fit">
          All active and inactive users in selected team
        </div>

        <div className="block md:hidden">
          <Badge variant="secondary" className="flex gap-3 rounded-lg text-xs">
            Swipe to next
            <MoveRightIcon className="size-3" />
          </Badge>
        </div>
      </CardFooter>
    </Card>
  )
}
