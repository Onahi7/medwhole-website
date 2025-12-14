import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
});

// Helper function to create document
async function createDocument(doc: any) {
  try {
    const result = await client.create(doc);
    console.log(`✅ Created ${doc._type}: ${doc.title || doc.name}`);
    return result;
  } catch (error) {
    console.error(`❌ Error creating ${doc._type}:`, error);
    throw error;
  }
}

// News Articles
const newsArticles = [
  {
    _type: 'news',
    title: 'MedWHOLE Launches New Maternal Health Initiative Across 5 African Countries',
    slug: { current: 'maternal-health-initiative-2024' },
    excerpt: "In partnership with regional health ministries, we're implementing comprehensive maternal health programs aimed at reducing maternal mortality by 40% over the next three years.",
    publishedAt: '2024-03-15',
    category: 'Program Launch',
    author: 'MedWHOLE Communications',
    readTime: 5,
    featured: true,
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: "MedWHOLE Alliance is proud to announce the launch of our most ambitious maternal health initiative to date, spanning five African countries: Kenya, Ghana, Nigeria, Tanzania, and Senegal. This comprehensive program represents a $15 million investment in maternal health infrastructure, training, and service delivery over the next three years.",
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Program Overview',
            marks: ['strong'],
          },
        ],
        style: 'h2',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'The initiative focuses on three key pillars: strengthening health facility capacity, training healthcare workers in emergency obstetric care, and establishing community-based maternal health support systems. Our goal is to reduce maternal mortality by 40% in target regions through evidence-based interventions and sustainable health system improvements.',
          },
        ],
        style: 'normal',
      },
    ],
    tags: ['Maternal Health', 'Program Launch', 'Partnership', 'Health Systems'],
  },
  {
    _type: 'news',
    title: '500+ Health Workers Complete Leadership Training Program',
    slug: { current: 'leadership-training-graduation-2024' },
    excerpt: 'Our flagship leadership program graduates its largest cohort, with participants from 12 African nations ready to lead health initiatives in their communities.',
    publishedAt: '2024-03-10',
    category: 'Academy',
    author: 'Dr. Sarah Mensah',
    readTime: 4,
    featured: true,
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'In a momentous celebration of achievement and potential, MedWHOLE Academy graduated over 500 health professionals from our flagship Public Health Leadership Certificate program. This represents our largest cohort to date, with participants from 12 African countries bringing diverse perspectives and experiences to the program.',
          },
        ],
        style: 'normal',
      },
    ],
    tags: ['Leadership', 'Training', 'Graduation', 'Capacity Building'],
  },
  {
    _type: 'news',
    title: 'New Research Published on Community Health Worker Impact',
    slug: { current: 'chw-research-study-2024' },
    excerpt: 'MedWHOLE research team publishes groundbreaking study showing 35% improvement in health outcomes through community health worker programs.',
    publishedAt: '2024-03-05',
    category: 'Research',
    author: 'Research Team',
    readTime: 6,
    featured: false,
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: "MedWHOLE's research team has published a comprehensive study in the Journal of Global Health demonstrating the significant impact of well-trained and supported community health workers (CHWs) on health outcomes in rural African communities.",
          },
        ],
        style: 'normal',
      },
    ],
    tags: ['Research', 'Community Health', 'Evidence', 'Publication'],
  },
  {
    _type: 'news',
    title: 'Partnership Announcement: Collaboration with WHO Africa',
    slug: { current: 'who-africa-partnership-2024' },
    excerpt: 'MedWHOLE Alliance signs MoU with WHO Africa Regional Office to strengthen health systems across the continent.',
    publishedAt: '2024-02-28',
    category: 'Partnership',
    author: 'MedWHOLE Communications',
    readTime: 3,
    featured: true,
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'MedWHOLE Alliance is honored to announce a strategic partnership with the World Health Organization Regional Office for Africa (WHO AFRO). This collaboration will leverage our combined expertise and resources to strengthen health systems across the African continent.',
          },
        ],
        style: 'normal',
      },
    ],
    tags: ['Partnership', 'WHO', 'Collaboration', 'Health Systems'],
  },
  {
    _type: 'news',
    title: 'Mobile Health Clinics Reach 50,000 Patients Milestone',
    slug: { current: 'mobile-clinics-milestone-2024' },
    excerpt: 'Our mobile health service has now provided care to over 50,000 patients in remote and underserved communities.',
    publishedAt: '2024-02-20',
    category: 'Health',
    author: 'Dr. James Okonkwo',
    readTime: 5,
    featured: false,
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'MedWHOLE Health is proud to announce that our mobile health clinic program has reached a significant milestone: providing care to over 50,000 patients in remote and underserved communities across Africa.',
          },
        ],
        style: 'normal',
      },
    ],
    tags: ['Health', 'Mobile Clinics', 'Access to Care', 'Rural Health'],
  },
];

// Events
const events = [
  {
    _type: 'event',
    title: 'Public Health Leadership Summit 2025',
    slug: { current: 'leadership-summit-2025' },
    description: 'A premier gathering of public health leaders, policymakers, and practitioners from across Africa to discuss the future of public health leadership and innovation.',
    eventType: 'academy',
    category: 'Summit',
    startDate: '2025-10-15',
    endDate: '2025-10-17',
    location: 'Abuja, Nigeria',
    featured: true,
    registrationOpen: true,
    capacity: 500,
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'The summit will feature keynote speakers, panel discussions, and networking opportunities focused on leadership, innovation, and collaboration in public health.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _type: 'event',
    title: 'Epidemiology Masterclass Series',
    slug: { current: 'epidemiology-masterclass-2025' },
    description: 'An advanced masterclass for epidemiologists and public health researchers looking to deepen their skills in study design, data analysis, and outbreak investigation.',
    eventType: 'academy',
    category: 'Masterclass',
    startDate: '2025-09-22',
    endDate: '2025-09-25',
    location: 'Kampala, Uganda',
    featured: true,
    registrationOpen: true,
    capacity: 100,
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'This intensive program will cover advanced topics in epidemiological methods, biostatistics, and outbreak investigation.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _type: 'event',
    title: 'Research Methods & Grant Writing Workshop',
    slug: { current: 'grant-writing-workshop-2025' },
    description: 'A practical, hands-on workshop designed to equip researchers and public health professionals with the skills to design robust research studies and write successful grant proposals.',
    eventType: 'academy',
    category: 'Workshop',
    startDate: '2025-08-10',
    endDate: '2025-08-12',
    location: 'Accra, Ghana',
    featured: false,
    registrationOpen: true,
    capacity: 75,
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'This workshop is ideal for early-career researchers looking to develop research protocols and write compelling grant proposals.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _type: 'event',
    title: 'World Heart Day Campaign',
    slug: { current: 'world-heart-day-2025' },
    description: 'A city-wide campaign to raise awareness about cardiovascular diseases, offering free heart health screenings, educational workshops, and promoting healthy lifestyles.',
    eventType: 'health',
    category: 'Community Outreach',
    startDate: '2025-09-29',
    endDate: '2025-09-29',
    location: 'Community Centers, Lagos',
    featured: true,
    registrationOpen: true,
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Join us for free health screenings, healthy cooking demonstrations, and educational workshops on heart health.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _type: 'event',
    title: 'Maternal Health Outreach Program',
    slug: { current: 'maternal-health-outreach-2025' },
    description: 'A month-long mobile health outreach program providing essential maternal and child health services to underserved rural communities.',
    eventType: 'health',
    category: 'Mobile Clinic',
    startDate: '2025-10-01',
    endDate: '2025-10-31',
    location: 'Rural Communities, Gulu District',
    featured: false,
    registrationOpen: true,
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Providing prenatal care, vaccinations, and health education to underserved communities.',
          },
        ],
        style: 'normal',
      },
    ],
  },
];

// Programs
const programs = [
  {
    _type: 'program',
    title: 'Back-to-School Scholarship Program',
    slug: { current: 'scholarship-program' },
    programType: 'academy',
    description: 'Supports vulnerable children with tuition, uniforms, books, and exam fees.',
    featured: true,
    objectives: [
      'Reduce dropout rates and restore hope in formal education',
      'Provide comprehensive educational support',
      'Increase school enrollment and retention',
    ],
    components: [
      'Student selection and assessment',
      'Tuition fees coverage',
      'Study materials provision',
      'Mentorship and guidance',
    ],
    outcomes: [
      'Increased school enrollment',
      'Improved retention rates',
      'Academic stability for vulnerable children',
    ],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'The Back-to-School Scholarship Program provides comprehensive support for vulnerable children to access quality education.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _type: 'program',
    title: 'Discipleship & Character Development',
    slug: { current: 'discipleship-program' },
    programType: 'academy',
    description: 'Weekly GOODNEWS CLUB sessions rooted in biblical teachings, focused on building identity, godly values, and purpose-driven living.',
    featured: true,
    objectives: [
      'Build godly character and values',
      'Develop purpose-driven mindset',
      'Foster spiritual growth',
    ],
    components: [
      'Weekly lessons',
      'Small-group mentoring',
      'Faith-based activities',
    ],
    outcomes: [
      'Morally and spiritually sound students',
      'Strong value foundation',
      'Purpose-driven youth',
    ],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Building the next generation of morally upright and purpose-driven individuals through biblical teachings.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _type: 'program',
    title: 'Gosa Primary Health Centre Optimization',
    slug: { current: 'gosa-phc-optimization' },
    programType: 'health',
    description: 'Collaboration with the FCT Primary Health Care Board to improve governance, infrastructure, and community engagement.',
    featured: true,
    objectives: [
      'Strengthen service delivery',
      'Improve facility management',
      'Enhance community participation',
    ],
    components: [
      'Infrastructure improvement',
      'Community mobilization',
      'Governance strengthening',
    ],
    outcomes: [
      'Enhanced PHC functionality',
      'Community ownership and participation',
      'Improved health service quality',
    ],
    impactMetrics: [
      { metric: 'Service utilization increase', value: '40%' },
      { metric: 'Community satisfaction', value: '85%' },
    ],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Working with FCT Primary Health Care Board to transform primary healthcare delivery.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _type: 'program',
    title: 'Facility and Systems Assessment',
    slug: { current: 'facility-assessment' },
    programType: 'consulting',
    description: 'Comprehensive audits of hospitals and health facilities to improve quality and efficiency.',
    featured: true,
    objectives: [
      'Conduct thorough facility audits',
      'Identify service delivery gaps',
      'Develop actionable improvement plans',
    ],
    components: [
      'Infrastructure evaluation',
      'Workflow assessment',
      'Quality assurance review',
      'Governance evaluation',
    ],
    outcomes: [
      'Clear improvement recommendations',
      'Strengthened workflow efficiency',
      'Enhanced quality of care',
    ],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Comprehensive assessments that strengthen healthcare facilities and systems across Africa.',
          },
        ],
        style: 'normal',
      },
    ],
  },
  {
    _type: 'program',
    title: 'Monitoring, Evaluation, and Learning (MEL)',
    slug: { current: 'mel-program' },
    programType: 'consulting',
    description: 'Establishing data systems for performance tracking and evidence generation.',
    featured: true,
    objectives: [
      'Develop comprehensive MEL frameworks',
      'Establish data collection systems',
      'Create performance dashboards',
    ],
    components: [
      'MEL framework design',
      'Data collection tools',
      'Reporting templates',
      'Performance tracking systems',
    ],
    outcomes: [
      'Effective performance tracking',
      'Evidence-based decision making',
      'Improved program outcomes',
    ],
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Building robust monitoring and evaluation systems that drive program excellence.',
          },
        ],
        style: 'normal',
      },
    ],
  },
];

// Team Members
const teamMembers = [
  {
    _type: 'team',
    name: 'Prof. Chima Onoka',
    slug: { current: 'prof-chima-onoka' },
    role: 'Trustee',
    department: 'Executive',
    bio: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Prof. Chima Onoka serves as a Trustee of MedWHOLE Alliance. With extensive experience in public health and community development, he guides the organization with a vision of transformed communities through wholeness.',
          },
        ],
        style: 'normal',
      },
    ],
    featured: true,
    order: 1,
  },
  {
    _type: 'team',
    name: 'Dr. Ferdinand Ogbaji',
    slug: { current: 'dr-ferdinand-ogbaji' },
    role: 'Director of Programmes',
    department: 'Programs',
    bio: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Dr. Ferdinand Ogbaji serves as the Director of Programmes at MedWHOLE Alliance, overseeing the strategic implementation of all program areas including health, education, and consulting services.',
          },
        ],
        style: 'normal',
      },
    ],
    featured: true,
    order: 2,
  },
];

// Gallery Images
const galleryImages = [
  {
    _type: 'gallery',
    title: 'Summer School Program',
    category: 'academy',
    description: 'Over 290 children engaged in free summer classes across academics, arts, and foundational skills.',
    order: 1,
  },
  {
    _type: 'gallery',
    title: 'Scholarship Awards Ceremony',
    category: 'academy',
    description: 'Celebrating indigent but deserving students receiving academic scholarships and educational support.',
    order: 2,
  },
  {
    _type: 'gallery',
    title: 'Gosa PHC Optimization Project',
    category: 'health',
    description: 'Improving governance, infrastructure, and community engagement at Gosa PHC.',
    order: 3,
  },
  {
    _type: 'gallery',
    title: 'Emergency Preparedness Training',
    category: 'health',
    description: 'CPR and BLS training for public servants, health workers, and NYSC members.',
    order: 4,
  },
  {
    _type: 'gallery',
    title: 'WHO Partnership Signing',
    category: 'events',
    description: 'Signing ceremony for our partnership with WHO Africa.',
    order: 5,
  },
];

// Main seeding function
async function seedSanity() {
  console.log('🌱 Starting Sanity CMS seeding...\n');

  try {
    // Seed News Articles
    console.log('📰 Seeding News Articles...');
    for (const article of newsArticles) {
      await createDocument(article);
    }

    // Seed Events
    console.log('\n📅 Seeding Events...');
    for (const event of events) {
      await createDocument(event);
    }

    // Seed Programs
    console.log('\n🎓 Seeding Programs...');
    for (const program of programs) {
      await createDocument(program);
    }

    // Seed Team Members
    console.log('\n👥 Seeding Team Members...');
    for (const member of teamMembers) {
      await createDocument(member);
    }

    // Seed Gallery Images
    console.log('\n🖼️  Seeding Gallery Images...');
    for (const image of galleryImages) {
      await createDocument(image);
    }

    console.log('\n✅ Seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   - ${newsArticles.length} news articles`);
    console.log(`   - ${events.length} events`);
    console.log(`   - ${programs.length} programs`);
    console.log(`   - ${teamMembers.length} team members`);
    console.log(`   - ${galleryImages.length} gallery images`);
    console.log('\n🎉 Your Sanity CMS is now populated with content!');
    console.log('   Visit https://medwhole.sanity.studio to manage your content.');
  } catch (error) {
    console.error('\n❌ Seeding failed:', error);
    process.exit(1);
  }
}

// Run the seeding script
seedSanity();
