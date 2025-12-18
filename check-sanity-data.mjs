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

async function checkData() {
  console.log('\n📊 Checking Sanity CMS Data...\n')

  try {
    // Check News
    const news = await client.fetch('*[_type == "news"] | order(_createdAt desc) [0...5] { _id, title, category, publishedAt }')
    console.log('📰 News Articles:', news.length)
    if (news.length > 0) {
      console.log('   Sample:', news[0].title)
    }

    // Check Events
    const events = await client.fetch('*[_type == "event"] | order(_createdAt desc) [0...5] { _id, title, category, date }')
    console.log('\n📅 Events:', events.length)
    if (events.length > 0) {
      console.log('   Sample:', events[0].title)
    }

    // Check Programs
    const programs = await client.fetch('*[_type == "program"] { _id, title, category }')
    console.log('\n🎓 Programs:', programs.length)
    if (programs.length > 0) {
      console.log('   Categories:', [...new Set(programs.map(p => p.category))])
    }

    // Check Team
    const team = await client.fetch('*[_type == "team"] { _id, name, role }')
    console.log('\n👥 Team Members:', team.length)
    if (team.length > 0) {
      console.log('   Sample:', team[0].name, '-', team[0].role)
    }

    // Check Gallery
    const gallery = await client.fetch('*[_type == "gallery"] { _id, title, category }')
    console.log('\n🖼️  Gallery Images:', gallery.length)
    if (gallery.length > 0) {
      console.log('   Categories:', [...new Set(gallery.map(g => g.category))])
    }

    console.log('\n✅ Sanity data check complete!\n')

    // Detailed check - compare with source content
    console.log('\n🔍 Detailed Content Verification:\n')
    
    // Check if key content exists
    const expectedNews = [
      'MedWHOLE Launches New Maternal Health Initiative',
      '500+ Health Workers Complete Leadership Training',
      'New Research Published on Community Health Worker Impact',
      'Partnership Announcement: Collaboration with WHO Nigeria',
      'Mobile Health Clinics Reach 50,000 Patients Milestone'
    ]

    const expectedPrograms = [
      'Back-to-School Scholarship Program',
      'Discipleship & Character Development',
      'Exam Coaching (WAEC & JAMB)',
      'Computer Literacy Training',
      'Community Feeding Initiative'
    ]

    const foundNews = news.map(n => n.title)
    const foundPrograms = programs.map(p => p.title)

    console.log('📰 News Articles Verification:')
    expectedNews.forEach(title => {
      const found = foundNews.some(t => t.includes(title.split(':')[0]))
      console.log(`   ${found ? '✅' : '❌'} ${title}`)
    })

    console.log('\n🎓 Programs Verification (Sample):')
    expectedPrograms.forEach(title => {
      const found = foundPrograms.includes(title)
      console.log(`   ${found ? '✅' : '❌'} ${title}`)
    })

  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

checkData()
