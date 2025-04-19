import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

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
        <span>my table here...</span>
      </CardContent>
    </Card>
  )
}
