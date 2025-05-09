import { MoveRightIcon, TrendingDownIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface UniqueRolesCardProps {
  count: number
}

export function UniqueRolesCard({ count }: UniqueRolesCardProps) {
  return (
    <Card className="@container/card flex flex-1 flex-col justify-between">
      <CardHeader className="relative">
        <CardDescription>Unique Roles</CardDescription>
        <CardTitle className="font-semibold @[250px]/card:text-3xl text-2xl tabular-nums">
          {count}
        </CardTitle>

        <div className="absolute top-0 right-4">
          <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
            <TrendingDownIcon className="size-3" />
            +2%
          </Badge>
        </div>
      </CardHeader>

      <CardFooter className="relative flex-col items-start gap-1 text-sm">
        <div className="text-muted-foreground">
          Distinct roles represented in the team
        </div>
      </CardFooter>
    </Card>
  )
}
