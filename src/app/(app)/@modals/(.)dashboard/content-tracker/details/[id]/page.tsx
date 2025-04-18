import { TrackerDetailsModal } from '@/components/features/content-tracker/tracker-details-modal'
import { ContentTrackerTableMock } from '@/mocks/table'

export default async function ContentTrackerDetailsModal({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const data = ContentTrackerTableMock.find(item => item.id === Number(id))

  return <TrackerDetailsModal data={data} />
}
