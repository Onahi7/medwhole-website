import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  BookOpen,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  Users,
  Calendar,
  DollarSign,
  Globe,
  Target,
  TrendingUp,
} from "lucide-react"

const programs = [
  {
    slug: "public-health-leadership",
    title: "Public Health Leadership Certificate",
    category: "Leadership",
    duration: "6 months",
    level: "Intermediate",
    format: "Hybrid",
    price: "$1,200",
    startDate: "March 15, 2025",
    capacity: "30 students",
    description: "Develop essential leadership skills for public health professionals managing teams and programs.",
    fullDescription:
      "This comprehensive leadership program is designed for mid-career public health professionals who are ready to take on leadership roles. Through a combination of online learning and in-person workshops, you'll develop the strategic thinking, management skills, and policy expertise needed to lead effective public health initiatives. The program emphasizes practical application through case studies, group projects, and mentorship from experienced public health leaders.",
    modules: [
      {
        title: "Strategic Leadership in Public Health",
        description: "Learn to develop and implement strategic plans for public health organizations",
        duration: "4 weeks",
      },
      {
        title: "Health Systems Management",
        description: "Master the fundamentals of managing complex health systems and programs",
        duration: "6 weeks",
      },
      {
        title: "Policy Development & Advocacy",
        description: "Develop skills in health policy analysis, development, and advocacy",
        duration: "5 weeks",
      },
      {
        title: "Team Building & Communication",
        description: "Build effective teams and communicate vision across diverse stakeholders",
        duration: "4 weeks",
      },
    ],
    outcomes: [
      "Lead public health initiatives effectively",
      "Develop strategic health programs",
      "Manage diverse healthcare teams",
      "Influence health policy decisions",
      "Navigate complex organizational structures",
      "Build partnerships across sectors",
    ],
    prerequisites: [
      "Bachelor's degree in public health or related field",
      "Minimum 3 years of public health experience",
      "Current employment in a health-related organization",
    ],
    instructors: [
      {
        name: "Dr. Amara Okafor",
        title: "Director of Health Systems",
        bio: "20+ years leading health programs across West Africa",
      },
      {
        name: "Prof. Kwame Mensah",
        title: "Public Health Policy Expert",
        bio: "Former WHO consultant and policy advisor",
      },
    ],
    testimonials: [
      {
        name: "Sarah Mwangi",
        role: "Health Program Manager, Kenya",
        quote:
          "This program transformed my approach to leadership. I now lead a team of 50+ health workers with confidence.",
      },
      {
        name: "Ibrahim Diallo",
        role: "District Health Director, Senegal",
        quote:
          "The strategic planning skills I gained have been invaluable in securing funding and expanding our programs.",
      },
    ],
  },
  {
    slug: "epidemiology-disease-surveillance",
    title: "Epidemiology & Disease Surveillance",
    category: "Research",
    duration: "4 months",
    level: "Advanced",
    format: "Online",
    price: "$950",
    startDate: "April 1, 2025",
    capacity: "40 students",
    description:
      "Master epidemiological methods and disease surveillance systems for outbreak investigation and prevention.",
    fullDescription:
      "This advanced program provides comprehensive training in epidemiological methods and disease surveillance systems. Designed for public health professionals working in disease control and prevention, the course covers everything from study design to outbreak investigation. You'll gain hands-on experience with real-world data and learn to use modern surveillance tools and statistical software.",
    modules: [
      {
        title: "Epidemiological Study Design",
        description: "Design robust epidemiological studies for various research questions",
        duration: "4 weeks",
      },
      {
        title: "Biostatistics & Data Analysis",
        description: "Master statistical methods for analyzing health data",
        duration: "5 weeks",
      },
      {
        title: "Disease Surveillance Systems",
        description: "Implement and manage effective disease surveillance systems",
        duration: "4 weeks",
      },
      {
        title: "Outbreak Investigation",
        description: "Lead rapid outbreak investigations and response efforts",
        duration: "3 weeks",
      },
    ],
    outcomes: [
      "Design and conduct epidemiological studies",
      "Analyze disease patterns and trends",
      "Implement surveillance systems",
      "Lead outbreak investigations",
      "Use statistical software proficiently",
      "Interpret and communicate findings",
    ],
    prerequisites: [
      "Master's degree in public health, epidemiology, or related field",
      "Basic statistics knowledge",
      "Experience with data analysis",
    ],
    instructors: [
      {
        name: "Dr. Fatima Hassan",
        title: "Chief Epidemiologist",
        bio: "Led outbreak investigations across 15 African countries",
      },
      {
        name: "Dr. John Omondi",
        title: "Biostatistics Professor",
        bio: "Published 50+ peer-reviewed articles on disease surveillance",
      },
    ],
    testimonials: [
      {
        name: "Grace Ndlovu",
        role: "Epidemiologist, Zimbabwe",
        quote: "The outbreak investigation module prepared me perfectly for leading our COVID-19 response team.",
      },
      {
        name: "Ahmed Yusuf",
        role: "Disease Surveillance Officer, Ethiopia",
        quote: "I can now design and implement surveillance systems that actually work in resource-limited settings.",
      },
    ],
  },
  {
    slug: "maternal-child-health",
    title: "Maternal & Child Health",
    category: "Clinical",
    duration: "5 months",
    level: "Intermediate",
    format: "Hybrid",
    price: "$1,100",
    startDate: "May 1, 2025",
    capacity: "35 students",
    description:
      "Comprehensive training in maternal and child health interventions, from prenatal care to pediatric health.",
    fullDescription:
      "This program provides comprehensive training in maternal and child health, covering the continuum of care from pregnancy through early childhood. Combining online learning with hands-on clinical practice, you'll develop the skills needed to provide quality maternal and child health care in diverse settings. The program emphasizes evidence-based practices and culturally appropriate care.",
    modules: [
      {
        title: "Prenatal & Antenatal Care",
        description: "Provide comprehensive prenatal care and identify high-risk pregnancies",
        duration: "5 weeks",
      },
      {
        title: "Safe Delivery Practices",
        description: "Master safe delivery techniques and emergency obstetric care",
        duration: "6 weeks",
      },
      {
        title: "Newborn & Child Health",
        description: "Manage common pediatric conditions and promote child development",
        duration: "5 weeks",
      },
      {
        title: "Nutrition & Growth Monitoring",
        description: "Implement nutrition programs and monitor child growth",
        duration: "4 weeks",
      },
    ],
    outcomes: [
      "Provide quality maternal healthcare",
      "Manage pediatric health conditions",
      "Implement nutrition programs",
      "Reduce maternal and child mortality",
      "Conduct growth monitoring",
      "Provide family planning services",
    ],
    prerequisites: [
      "Clinical degree (nursing, midwifery, or medicine)",
      "Current clinical practice license",
      "Minimum 2 years of clinical experience",
    ],
    instructors: [
      {
        name: "Dr. Aisha Kamara",
        title: "Maternal Health Specialist",
        bio: "Reduced maternal mortality by 40% in rural Sierra Leone",
      },
      {
        name: "Nurse Mary Wanjiru",
        title: "Pediatric Nurse Practitioner",
        bio: "30+ years providing child health care in East Africa",
      },
    ],
    testimonials: [
      {
        name: "Blessing Okoro",
        role: "Midwife, Nigeria",
        quote: "This training gave me the confidence to handle complicated deliveries and save lives.",
      },
      {
        name: "Thabo Mokoena",
        role: "Pediatric Nurse, South Africa",
        quote: "The nutrition module has been transformative for our community health program.",
      },
    ],
  },
  {
    slug: "health-systems-strengthening",
    title: "Health Systems Strengthening",
    category: "Management",
    duration: "6 months",
    level: "Advanced",
    format: "Online",
    price: "$1,300",
    startDate: "March 20, 2025",
    capacity: "25 students",
    description: "Learn to strengthen health systems through improved governance, financing, and service delivery.",
    fullDescription:
      "This advanced program focuses on strengthening health systems at the organizational and national levels. You'll learn to assess health system performance, design interventions, and implement quality improvement initiatives. The program is ideal for senior health managers, policy makers, and consultants working on health systems strengthening projects.",
    modules: [
      {
        title: "Health Systems Framework",
        description: "Understand the building blocks of health systems and their interactions",
        duration: "5 weeks",
      },
      {
        title: "Healthcare Financing",
        description: "Master health financing mechanisms and resource allocation",
        duration: "6 weeks",
      },
      {
        title: "Quality Improvement",
        description: "Implement quality improvement methodologies in health facilities",
        duration: "5 weeks",
      },
      {
        title: "Health Information Systems",
        description: "Design and manage health information systems for decision-making",
        duration: "5 weeks",
      },
    ],
    outcomes: [
      "Assess health system performance",
      "Design system strengthening interventions",
      "Improve healthcare quality",
      "Manage health information systems",
      "Develop financing strategies",
      "Lead organizational change",
    ],
    prerequisites: [
      "Master's degree in public health, health management, or related field",
      "Minimum 5 years of health systems experience",
      "Current leadership role in health organization",
    ],
    instructors: [
      {
        name: "Prof. Chinwe Okonkwo",
        title: "Health Systems Expert",
        bio: "Advised 10+ African governments on health system reforms",
      },
      {
        name: "Dr. Kofi Annan",
        title: "Health Financing Specialist",
        bio: "Designed sustainable financing models for 8 countries",
      },
    ],
    testimonials: [
      {
        name: "David Mutua",
        role: "Hospital Administrator, Kenya",
        quote: "The quality improvement tools I learned have reduced patient wait times by 60% at our facility.",
      },
      {
        name: "Aminata Diop",
        role: "Ministry of Health Official, Mali",
        quote: "This program equipped me to lead our national health system strengthening initiative.",
      },
    ],
  },
  {
    slug: "research-methods-grant-writing",
    title: "Research Methods & Grant Writing",
    category: "Research",
    duration: "3 months",
    level: "Beginner",
    format: "Online",
    price: "$750",
    startDate: "April 15, 2025",
    capacity: "50 students",
    description:
      "Essential skills for conducting research and securing funding through effective grant proposal writing.",
    fullDescription:
      "This foundational program teaches essential research and grant writing skills for public health professionals. Whether you're new to research or looking to improve your grant writing success rate, this course provides practical tools and templates you can use immediately. You'll complete the program with a draft grant proposal ready for submission.",
    modules: [
      {
        title: "Research Design & Methodology",
        description: "Design rigorous research studies that answer important questions",
        duration: "4 weeks",
      },
      {
        title: "Data Collection & Analysis",
        description: "Collect and analyze data using appropriate methods",
        duration: "3 weeks",
      },
      {
        title: "Grant Proposal Development",
        description: "Write compelling grant proposals that secure funding",
        duration: "4 weeks",
      },
      {
        title: "Budget Planning & Management",
        description: "Develop realistic budgets and manage research funds",
        duration: "2 weeks",
      },
    ],
    outcomes: [
      "Design rigorous research studies",
      "Write competitive grant proposals",
      "Manage research budgets",
      "Publish research findings",
      "Conduct ethical research",
      "Build research partnerships",
    ],
    prerequisites: ["Bachelor's degree in any field", "Interest in public health research", "Basic computer skills"],
    instructors: [
      {
        name: "Dr. Ngozi Adebayo",
        title: "Research Methodology Expert",
        bio: "Secured $5M+ in research funding over 15 years",
      },
      {
        name: "Prof. Samuel Osei",
        title: "Grant Writing Specialist",
        bio: "Trained 500+ researchers in successful grant writing",
      },
    ],
    testimonials: [
      {
        name: "Esther Muthoni",
        role: "Research Officer, Tanzania",
        quote: "I secured my first major grant within 3 months of completing this program!",
      },
      {
        name: "Youssef El-Amin",
        role: "PhD Student, Egypt",
        quote: "The research design module helped me develop a strong dissertation proposal.",
      },
    ],
  },
  {
    slug: "community-health-outreach",
    title: "Community Health & Outreach",
    category: "Community",
    duration: "4 months",
    level: "Beginner",
    format: "Hybrid",
    price: "$850",
    startDate: "May 10, 2025",
    capacity: "40 students",
    description: "Build capacity for community-based health interventions and grassroots health promotion.",
    fullDescription:
      "This program builds capacity for effective community health work, from assessment to implementation. You'll learn participatory approaches that engage communities as partners in improving their own health. The program includes field practice where you'll apply what you've learned in real community settings.",
    modules: [
      {
        title: "Community Health Assessment",
        description: "Conduct comprehensive community health needs assessments",
        duration: "4 weeks",
      },
      {
        title: "Health Education & Promotion",
        description: "Design and deliver effective health education programs",
        duration: "4 weeks",
      },
      {
        title: "Community Mobilization",
        description: "Mobilize communities for collective health action",
        duration: "4 weeks",
      },
      {
        title: "Participatory Approaches",
        description: "Use participatory methods that empower communities",
        duration: "4 weeks",
      },
    ],
    outcomes: [
      "Conduct community health assessments",
      "Design health education programs",
      "Mobilize communities for health",
      "Implement participatory interventions",
      "Build community partnerships",
      "Evaluate community programs",
    ],
    prerequisites: [
      "High school diploma or equivalent",
      "Interest in community health work",
      "Ability to work with diverse communities",
    ],
    instructors: [
      {
        name: "Mama Grace Ochieng",
        title: "Community Health Leader",
        bio: "35 years mobilizing communities for health in rural Kenya",
      },
      {
        name: "Dr. Tunde Adeyemi",
        title: "Community Medicine Specialist",
        bio: "Pioneered participatory health programs in West Africa",
      },
    ],
    testimonials: [
      {
        name: "Fatou Sow",
        role: "Community Health Worker, Gambia",
        quote: "This training helped me engage my community in ways I never thought possible.",
      },
      {
        name: "Moses Banda",
        role: "NGO Field Officer, Zambia",
        quote: "The participatory approaches have made our health programs much more effective and sustainable.",
      },
    ],
  },
]

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = programs.find((p) => p.slug === params.slug)

  if (!program) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Back to Programs
              </Link>
              <Badge className="mb-4 bg-accent text-accent-foreground">{program.category}</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">{program.title}</h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
                {program.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">Apply Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                >
                  <Link href="/contact">Request Information</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{program.fullDescription}</p>
                </div>

                {/* Modules */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <BookOpen className="h-8 w-8 text-primary" />
                    Course Modules
                  </h2>
                  <div className="space-y-4">
                    {program.modules.map((module, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold">
                              Module {index + 1}: {module.title}
                            </h3>
                            <Badge variant="outline">{module.duration}</Badge>
                          </div>
                          <p className="text-muted-foreground">{module.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Target className="h-8 w-8 text-accent" />
                    Learning Outcomes
                  </h2>
                  <Card>
                    <CardContent className="p-8">
                      <p className="text-muted-foreground mb-6">
                        Upon successful completion of this program, you will be able to:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {program.outcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Prerequisites */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Prerequisites</h2>
                  <Card>
                    <CardContent className="p-8">
                      <ul className="space-y-3">
                        {program.prerequisites.map((prereq, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{prereq}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Instructors */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Users className="h-8 w-8 text-primary" />
                    Meet Your Instructors
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {program.instructors.map((instructor, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                            <Users className="h-10 w-10 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-center mb-1">{instructor.name}</h3>
                          <p className="text-sm text-accent font-semibold text-center mb-3">{instructor.title}</p>
                          <p className="text-sm text-muted-foreground text-center">{instructor.bio}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Testimonials */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Award className="h-8 w-8 text-accent" />
                    Student Success Stories
                  </h2>
                  <div className="space-y-6">
                    {program.testimonials.map((testimonial, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-8">
                          <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                              <Users className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <p className="font-bold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Program Info Card */}
                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-8 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-6">Program Details</h3>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Duration</p>
                            <p className="text-sm text-muted-foreground">{program.duration}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Level</p>
                            <p className="text-sm text-muted-foreground">{program.level}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Format</p>
                            <p className="text-sm text-muted-foreground">{program.format}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Start Date</p>
                            <p className="text-sm text-muted-foreground">{program.startDate}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Class Size</p>
                            <p className="text-sm text-muted-foreground">{program.capacity}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <DollarSign className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Investment</p>
                            <p className="text-sm text-muted-foreground">{program.price}</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t space-y-3">
                        <Button asChild className="w-full bg-primary hover:bg-primary/90">
                          <Link href="/contact">Apply Now</Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full bg-transparent">
                          <Link href="/contact">Request Brochure</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Additional Info */}
                  <Card className="bg-muted/50">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-4">What's Included</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>All course materials and resources</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Certificate upon completion</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Access to alumni network</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Ongoing mentorship support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Career development resources</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Programs */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Related Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {programs
                .filter((p) => p.slug !== program.slug && p.category === program.category)
                .slice(0, 3)
                .map((relatedProgram) => (
                  <Card key={relatedProgram.slug} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {relatedProgram.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-3">{relatedProgram.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{relatedProgram.description}</p>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href={`/programs/${relatedProgram.slug}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
