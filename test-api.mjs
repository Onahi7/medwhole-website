import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config()

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

async function testQueries() {
  console.log('\n🔍 Testing API Queries...\n')

  // Test News
  const news = await client.fetch('*[_type == "news" && isActive == true] | order(publishedAt desc) { _id, title, excerpt, category, publishedAt }')
  console.log(`📰 News: ${news.length} articles`)
  if (news.length > 0) {
    console.log(`   Latest: "${news[0].title}"`)
  }

  // Test Programs
  const programs = await client.fetch('*[_type == "program" && isActive == true] { _id, title, category }')
  console.log(`\n🎓 Programs: ${programs.length} total`)
  const byCategory = programs.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1
    return acc
  }, {})
  Object.entries(byCategory).forEach(([cat, count]) => {
    console.log(`   ${cat}: ${count}`)
  })

  // Test Events
  const events = await client.fetch('*[_type == "event" && isActive == true] | order(date desc) { _id, title, category, date }')
  console.log(`\n📅 Events: ${events.length} events`)
  if (events.length > 0) {
    console.log(`   Next: "${events[0].title}" on ${new Date(events[0].date).toLocaleDateString()}`)
  }

  // Test Team
  const team = await client.fetch('*[_type == "team" && isActive == true] { _id, name, role }')
  console.log(`\n👥 Team: ${team.length} members`)
  team.forEach((m) => console.log(`   ${m.name} - ${m.role}`))

  // Test Gallery
  const gallery = await client.fetch('*[_type == "gallery" && isActive == true] { _id, title, category }')
  console.log(`\n🖼️  Gallery: ${gallery.length} images`)
  
  console.log('\n✅ All queries working!\n')
}

testQueries().catch(console.error)
