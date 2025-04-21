import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { projectsDirectoryMock } from '@/mocks/table'
import { columns } from './columns'
import { ProjectDirectoryTableWrapper } from './table-wrapper'

export function ProjectDirectoryTable() {
  const data = projectsDirectoryMock

  return (
    <section>
      <Card className="bg-gradient-to-t from-primary/5 to-card shadow-xs">
        <CardHeader className="relative">
          <CardTitle>Project Directory Table</CardTitle>
          <CardDescription>
            A structured view of all projects and their key attributes. Filter
            by owners, roles, and date ranges to focus on relevant timelines and
            contributors.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ProjectDirectoryTableWrapper data={data} columns={columns} />a
        </CardContent>
      </Card>
    </section>
  )
}
