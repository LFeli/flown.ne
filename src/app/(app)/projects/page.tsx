import { SiteFooter } from '@/components/layout/footer'
import { ProjectDirectoryTable } from './project-directory-section/project-directory-table'

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 flex-col gap-3">
      <div className="flex h-full flex-col gap-4 p-4 md:gap-6 md:p-6">
        <ProjectDirectoryTable />
      </div>

      <SiteFooter />
    </main>
  )
}
