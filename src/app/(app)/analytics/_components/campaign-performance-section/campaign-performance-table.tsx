import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AnalyticCampaignPerformanceMock } from '@/mocks/table'

import { columns } from './columns'
import { CampaignPerformanceTableWrapper } from './table-wrapper'

export function CampaignPerformanceTable() {
  return (
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
        <CampaignPerformanceTableWrapper
          data={AnalyticCampaignPerformanceMock}
          columns={columns}
        />
      </CardContent>
    </Card>
  )
}
