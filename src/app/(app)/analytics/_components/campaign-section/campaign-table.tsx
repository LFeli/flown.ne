import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { analyticCampaignPerformanceMock } from '@/mocks/table'

import { columns } from './columns'
import { CampaignTableWrapper } from './table-wrapper'

interface CampaignTableProps {
  visibleMonths?: string[]
}

export function CampaignTable({ visibleMonths }: CampaignTableProps) {
  const data = analyticCampaignPerformanceMock

  return (
    <section>
      <Card className="bg-gradient-to-t from-primary/5 to-card shadow-xs">
        <CardHeader className="relative">
          <CardTitle>Campaign Performance Table</CardTitle>
          <CardDescription>
            Detailed view of each campaign's performance across selected months.
            Analyze clicks, conversions, impressions, and revenue with flexible
            visibility and period filters.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <CampaignTableWrapper
            data={data}
            columns={columns}
            visibleMonths={visibleMonths}
          />
        </CardContent>
      </Card>
    </section>
  )
}
