import { client } from './sanity'

export async function getEvents(category?: string, limit: number = 10) {
  const categoryFilter = category ? `&& category == "${category}"` : ''
  
  const query = `*[_type == "event" && isActive == true ${categoryFilter}] | order(date desc) [0...${limit}] {
    _id,
    title,
    slug,
    description,
    category,
    date,
    location,
    featured
  }`

  return client.fetch(query)
}

export async function getEventBySlug(slug: string) {
  const query = `*[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    content,
    category,
    date,
    location,
    featured
  }`

  return client.fetch(query, { slug })
}

export async function getNews(category?: string, limit: number = 10) {
  const categoryFilter = category ? `&& category == "${category}"` : ''
  
  const query = `*[_type == "news" && isActive == true ${categoryFilter}] | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    category,
    author,
    publishedAt,
    featured
  }`

  return client.fetch(query)
}

export async function getNewsBySlug(slug: string) {
  const query = `*[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    category,
    author,
    publishedAt,
    featured
  }`

  return client.fetch(query, { slug })
}

export async function getGalleryImages(category?: string, limit: number = 20) {
  const categoryFilter = category ? `&& category == "${category}"` : ''
  
  const query = `*[_type == "gallery" && isActive == true ${categoryFilter}] | order(order asc, _createdAt desc) [0...${limit}] {
    _id,
    title,
    image,
    description,
    category,
    order
  }`

  return client.fetch(query)
}

export async function getTeamMembers(category?: string) {
  const categoryFilter = category ? `&& category == "${category}"` : ''
  
  const query = `*[_type == "team" && isActive == true ${categoryFilter}] | order(order asc, name asc) {
    _id,
    name,
    role,
    bio,
    photo,
    category,
    email,
    linkedin,
    order
  }`

  return client.fetch(query)
}

export async function getPrograms(category?: string) {
  const categoryFilter = category ? `&& category == "${category}"` : ''
  
  const query = `*[_type == "program" && isActive == true ${categoryFilter}] | order(featured desc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    featuredImage,
    category,
    objectives,
    impact,
    featured
  }`

  return client.fetch(query)
}

export async function getProgramBySlug(slug: string) {
  const query = `*[_type == "program" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    content,
    featuredImage,
    category,
    objectives,
    impact,
    featured
  }`

  return client.fetch(query, { slug })
}
