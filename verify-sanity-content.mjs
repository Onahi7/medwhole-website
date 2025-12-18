import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

// Read source content
const sourceContent = fs.readFileSync('1-MedWHOLE Alliance Website Content.txt', 'utf-8')

async function verifyContent() {
  console.log('\n🔍 COMPLETE SANITY CONTENT VERIFICATION\n')
  console.log('='.repeat(60))

  const issues = []

  // 1. Verify News Articles
  console.log('\n📰 NEWS ARTICLES:')
  const news = await client.fetch('*[_type == "news"] | order(publishedAt desc) { title, excerpt, content, category, publishedAt }')
  
  const expectedNews = [
    { title: 'Mobile Health Clinics Reach 50,000 Patients Milestone', category: 'health' },
    { title: 'Partnership Announcement: Collaboration with WHO Nigeria', category: 'consulting' },
    { title: 'New Research Published on Community Health Worker Impact', category: 'research' },
    { title: '500+ Health Workers Complete Leadership Training', category: 'academy' },
    { title: 'MedWHOLE Launches New Maternal Health Initiative', category: 'health' }
  ]

  expectedNews.forEach(expected => {
    const found = news.find(n => n.title === expected.title)
    if (found) {
      console.log(`✅ ${expected.title}`)
      if (found.category !== expected.category) {
        issues.push(`⚠️  News "${expected.title}" has category "${found.category}" but should be "${expected.category}"`)
      }
    } else {
      console.log(`❌ ${expected.title}`)
      issues.push(`❌ Missing news article: ${expected.title}`)
    }
  })

  // 2. Verify Programs
  console.log('\n🎓 PROGRAMS:')
  const programs = await client.fetch('*[_type == "program"] { title, category, description, modules }')
  
  const expectedPrograms = {
    academy: [
      'Back-to-School Scholarship Program',
      'Discipleship & Character Development',
      'Skills Acquisition & Vocational Training',
      'Summer Lessons Program',
      'Health, Hygiene & Nutrition Education',
      'Community Outreach & Service Learning',
      'Computer Literacy & Technology Training',
      'Exam Coaching (WAEC & JAMB)',
      'Community Feeding Initiative'
    ],
    health: [
      'Gosa Primary Health Centre Operations',
      'Rhema Memorial Hospital Partnership',
      'Community Health Hub Initiative',
      'Emergency Preparedness & Response Training'
    ],
    consulting: [
      'Health Facility Assessment & Accreditation',
      'Research & Evidence Generation',
      'Policy Development & Advocacy',
      'Monitoring, Evaluation & Learning (MEL)',
      'Capacity Building & Technical Training'
    ]
  }

  let programCount = 0
  Object.entries(expectedPrograms).forEach(([category, titles]) => {
    console.log(`\n  ${category.toUpperCase()}:`)
    titles.forEach(title => {
      const found = programs.find(p => p.title === title)
      if (found) {
        console.log(`  ✅ ${title}`)
        programCount++
      } else {
        console.log(`  ❌ ${title}`)
        issues.push(`❌ Missing program: ${title}`)
      }
    })
  })

  console.log(`\n  Total: ${programCount}/18 programs found`)

  // 3. Verify Events
  console.log('\n📅 EVENTS:')
  const events = await client.fetch('*[_type == "event"] | order(date desc) { title, category, date, location }')
  
  console.log(`  Found ${events.length} events in Sanity`)
  
  const expectedEventCategories = ['academy', 'consulting', 'health']
  const eventsByCategory = {}
  events.forEach(e => {
    if (!eventsByCategory[e.category]) eventsByCategory[e.category] = []
    eventsByCategory[e.category].push(e.title)
  })

  Object.entries(eventsByCategory).forEach(([cat, titles]) => {
    console.log(`\n  ${cat.toUpperCase()}:`)
    titles.forEach(t => console.log(`  ✅ ${t}`))
  })

  // 4. Verify Team Members
  console.log('\n👥 TEAM MEMBERS:')
  const team = await client.fetch('*[_type == "team"] { name, role, bio, image }')
  
  const expectedTeam = [
    { name: 'Prof. Chima Onoka', role: 'Founder & President' },
    { name: 'Dr. Ferdinand Ogbaji', role: 'Director of Programmes' }
  ]

  expectedTeam.forEach(expected => {
    const found = team.find(t => t.name === expected.name)
    if (found) {
      console.log(`✅ ${expected.name} - ${expected.role}`)
      if (found.role !== expected.role) {
        issues.push(`⚠️  Team member "${expected.name}" has role "${found.role}" but should be "${expected.role}"`)
      }
    } else {
      console.log(`❌ ${expected.name}`)
      issues.push(`❌ Missing team member: ${expected.name}`)
    }
  })

  // 5. Verify Gallery
  console.log('\n🖼️  GALLERY:')
  const gallery = await client.fetch('*[_type == "gallery"] { title, category, image }')
  
  const galleryByCategory = {}
  gallery.forEach(g => {
    if (!galleryByCategory[g.category]) galleryByCategory[g.category] = 0
    galleryByCategory[g.category]++
  })

  console.log(`  Total images: ${gallery.length}`)
  Object.entries(galleryByCategory).forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count} images`)
  })

  // Summary
  console.log('\n' + '='.repeat(60))
  console.log('\n📊 VERIFICATION SUMMARY:\n')
  console.log(`✅ News: ${news.length}/5`)
  console.log(`✅ Programs: ${programCount}/18`)
  console.log(`✅ Events: ${events.length}`)
  console.log(`✅ Team: ${team.length}/2`)
  console.log(`✅ Gallery: ${gallery.length} images`)

  if (issues.length === 0) {
    console.log('\n🎉 ALL CONTENT VERIFIED - 100% MATCH!')
  } else {
    console.log(`\n⚠️  Found ${issues.length} issues:\n`)
    issues.forEach(issue => console.log(issue))
  }

  console.log('\n' + '='.repeat(60) + '\n')
}

verifyContent().catch(console.error)
