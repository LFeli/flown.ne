import { MoveRightIcon, TrendingDownIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function UniqueRolesCard() {
  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardDescription>Unique Roles</CardDescription>
        <CardTitle className="font-semibold @[250px]/card:text-3xl text-2xl tabular-nums">
          5
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
