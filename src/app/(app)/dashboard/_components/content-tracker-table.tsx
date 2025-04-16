import { ContentTrackerTableMock } from '@/mocks/table'
import { columns } from './table/columns'
import { ContentTableWrapper } from './table/table-wrapper'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ContentTrackerTable() {
  return (
    <Card className="bg-gradient-to-t from-primary/5 to-card shadow-xs">
      <CardHeader className="relative">
        <CardTitle>Project Content Tracker</CardTitle>
        <CardDescription>
          Tracks the status, type, and reviewer of each project document to
          monitor overall progress.
        </CardDescription>
      </CardHeader>

      <CardContent className="px-2 sm:px-6">
        <ContentTableWrapper data={ContentTrackerTableMock} columns={columns} />
      </CardContent>
    </Card>
  )
}
