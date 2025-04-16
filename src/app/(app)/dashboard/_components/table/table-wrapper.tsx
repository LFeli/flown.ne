'use client'

import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  type UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import {
  type ColumnDef,
  type ColumnFiltersState,
  type RowSelectionState,
  type SortingState,
  type VisibilityState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import React from 'react'

import { RowDraggable } from '@/components/table/row-draggable'
import { TableEmptyState } from '@/components/table/table-empty-state'
import { TableHeaderTemplate } from '@/components/table/table-header-template'
import { Table, TableBody } from '@/components/ui/table'
import type { ContentTrackerData } from '@/types/table'
import { ContentTableFooter } from './footer'
import { ContentTrackerToolbar } from './toolbar'

interface ContentTableWrapperProps<TData extends ContentTrackerData, TValue> {
  data: TData[]
  columns: ColumnDef<TData, TValue>[]
}

export function ContentTableWrapper<TData extends ContentTrackerData, TValue>({
  data: initialData,
  columns,
}: ContentTableWrapperProps<TData, TValue>) {
  const [data, setData] = React.useState(() => initialData)

  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])

  const sortableId = React.useId()
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  )
  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => data.map(({ id }) => id),
    [data]
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (active && over && active.id !== over.id) {
      setData(data => {
        const oldIndex = dataIds.indexOf(active.id)
        const newIndex = dataIds.indexOf(over.id)
        return arrayMove(data, oldIndex, newIndex)
      })
    }
  }

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      columnFilters,
      columnVisibility,
      sorting,
    },

    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),

    getRowId: row => row.id.toString(),

    enableRowSelection: true,
  })

  const rows = table.getRowModel().rows
  const header = table.getHeaderGroups()

  return (
    <div className="space-y-4">
      <ContentTrackerToolbar table={table} />

      <div className="overflow-hidden rounded-lg border">
        <DndContext
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
          sensors={sensors}
          id={sortableId}
        >
          <Table>
            <TableHeaderTemplate header={header} />

            <TableBody className="**:data-[slot=table-cell]:first:w-8">
              <SortableContext
                items={dataIds}
                strategy={verticalListSortingStrategy}
              >
                {rows.length ? (
                  rows.map(row => (
                    <RowDraggable key={row.id} id={row.original.id} row={row} />
                  ))
                ) : (
                  <TableEmptyState columns={columns} />
                )}
              </SortableContext>
            </TableBody>
          </Table>
        </DndContext>
      </div>

      <ContentTableFooter table={table} />
    </div>
  )
}
