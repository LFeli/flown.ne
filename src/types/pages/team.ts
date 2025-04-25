export interface TeamOption {
  id: 'ai' | 'growth' | 'core'
  label: string
}

export interface ProjectMember {
  id: string
  name: string
  email: string
  role: 'Developer' | 'Designer' | 'Manager' | 'AI Engineer' | 'QA'
  joinedAt: string // ISO date
  status: 'active' | 'inactive' | 'on-leave'
  teamId: 'ai' | 'growth' | 'core'
}
