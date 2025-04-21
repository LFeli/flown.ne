import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ClickActivityChartWrapper() {
  return (
    <Card className="bg-gradient-to-t from-primary/5 to-card shadow-xs">
      <CardHeader className="relative">
        <CardTitle>Click Activity Over Time</CardTitle>
        <CardDescription>
          Visualize how your campaigns are driving traffic over time. Spot
          peaks, dips, and trends in user engagement across different periods.
        </CardDescription>
      </CardHeader>

      <CardContent className="px-6 pt-4">
        <span>my chart here...</span>
      </CardContent>
    </Card>
  )
}
