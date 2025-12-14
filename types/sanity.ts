import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface SanityEvent {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  content?: any[]
  category?: string
  date: string
  location?: string
  featured?: boolean
}

export interface SanityNews {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content?: any[]
  featuredImage?: SanityImageSource
  category?: string
  author?: string
  publishedAt: string
  featured?: boolean
}

export interface SanityGallery {
  _id: string
  title: string
  image: SanityImageSource
  description?: string
  category: string
  order: number
}

export interface SanityTeam {
  _id: string
  name: string
  role: string
  bio?: string
  photo?: SanityImageSource
  category: string
  email?: string
  linkedin?: string
  order: number
}

export interface SanityProgram {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  content?: any[]
  featuredImage?: SanityImageSource
  category: string
  objectives?: string[]
  impact?: {
    beneficiaries?: number
    locations?: number
    yearStarted?: number
  }
  featured?: boolean
}
