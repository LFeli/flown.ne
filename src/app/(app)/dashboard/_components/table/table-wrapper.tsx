import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ContentTableWrapper() {
  return (
    <Card className="bg-gradient-to-t from-primary/5 to-card shadow-xs">
      <CardHeader className="relative">
        <CardTitle>Project Content Tracker</CardTitle>
        <CardDescription>
          Tracks the status, type, and reviewer of each project document to
          monitor overall progress.
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
