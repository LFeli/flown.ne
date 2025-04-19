import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function TotalConversionsChartWrapper() {
  return (
    <Card className="bg-gradient-to-t from-primary/5 to-card shadow-xs">
      <CardHeader className="relative">
        <CardTitle>Total Conversions Overview</CardTitle>
        <CardDescription>
          rack how each campaign contributes to your overall conversions. Useful
          for identifying which strategies are converting best across selected
          months.
        </CardDescription>
      </CardHeader>

      <CardContent className="px-6 pt-4">
        <span>my chart here...</span>
      </CardContent>
    </Card>
  )
}
