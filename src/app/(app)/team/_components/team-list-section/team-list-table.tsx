'use client'

import { TableHeaderTemplate } from '@/components/table/table-header-template'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Table, TableBody } from '@/components/ui/table'
import type { ProjectMember } from '@/types/pages/team'

import { RowCommon } from '@/components/table/row-common'
import { TableEmptyState } from '@/components/table/table-empty-state'
import { columns } from './columns'
import { TeamListTableConfig } from './table-config'

interface TeamListTableProps {
  members: ProjectMember[]
}

export function TeamListTable({ members }: TeamListTableProps) {
  const { table, rows, header } = TeamListTableConfig({
    data: members,
    columns,
  })

  return (
    <section>
      <Card className="bg-gradient-to-t from-primary/5 to-card shadow-xs">
        <CardHeader className="relative">
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            A complete breakdown of team members with their roles, status, and
            join dates. Use filters to drill into active users or sort by
            department and seniority.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>toolbar...</div>

          <div className="overflow-hidden rounded-lg border">
            <Table>
              <TableHeaderTemplate header={header} />

              <TableBody className="**:data-[slot=table-cell]:first:w-8">
                {rows.length ? (
                  rows.map(row => <RowCommon key={row.id} row={row} />)
                ) : (
                  <TableEmptyState columns={columns} />
                )}
              </TableBody>
            </Table>
          </div>

          <div>footer...</div>
        </CardContent>
      </Card>
    </section>
  )
}
