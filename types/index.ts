export interface Service {
  id: string
  title: string
  description: string
  items: string[]
  icon: string
  imagePath?: string
}

export interface Capability {
  id: string
  name: string
  category: string
  imagePath?: string
}

export interface Client {
  name: string
  industry?: string
}

export interface Stat {
  value: string
  suffix: string
  label: string
  description?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SafetyPillar {
  title: string
  subtitle: string
  description: string
  items: string[]
}

export interface WeldingSpec {
  label: string
  description?: string
}

export interface TeamMember {
  name: string
  title: string
  phone: string
  email: string
}

export type ResourceCategory =
  | 'Company Overview'
  | 'Capability Sheets'
  | 'Safety & Compliance'
  | 'Technical Specifications'
  | 'Forms & Templates'
  | 'Case Studies'

export type ResourceFileType = 'pdf' | 'csv' | 'xlsx'

export interface Resource {
  id: string
  title: string
  description: string
  category: ResourceCategory
  fileType: ResourceFileType
  filePath: string
  fileSize: string
  tags?: string[]
  featured?: boolean
}

export interface FAQ {
  question: string
  answer: string
}

export interface ServiceDetail {
  id: string
  slug: string
  longDescription: string[]
  highlights: string[]
  applications: string[]
  standards: string[]
  faqs: FAQ[]
  relatedCapabilityIds: string[]
}

export interface CapabilityDetail {
  id: string
  slug: string
  description: string
  longDescription: string[]
  highlights: string[]
  applications: string[]
  standards: string[]
  faqs: FAQ[]
  relatedServiceIds: string[]
}
