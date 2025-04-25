import { SiteFooter } from '@/components/layout/footer'

import { TeamWrapper } from './_components/team-wrapper'

interface TeamPageProps {
  searchParams: Promise<{ option?: string }>
}

export default async function TeamPage({ searchParams }: TeamPageProps) {
  const { option } = await searchParams

  return (
    <main className="flex flex-1 flex-col gap-3">
      <div className="flex h-full flex-col gap-4 p-6 md:gap-6 md:p-6">
        <TeamWrapper option={option} />
      </div>

      <SiteFooter />
    </main>
  )
}
