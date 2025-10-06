import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Building2,
  GraduationCap,
} from "lucide-react"

const jobs = [
  {
    slug: "senior-public-health-advisor",
    title: "Senior Public Health Advisor",
    department: "Consulting",
    location: "Nairobi, Kenya",
    type: "Full-time",
    level: "Senior",
    salary: "$45,000 - $60,000",
    posted: "March 10, 2024",
    deadline: "April 15, 2024",
    description: "Lead technical assistance projects for health systems strengthening across East Africa.",
    fullDescription:
      "We are seeking an experienced Senior Public Health Advisor to lead technical assistance projects focused on health systems strengthening across East Africa. This role requires a strategic thinker with deep expertise in public health systems, strong leadership skills, and a proven track record of managing complex, multi-country projects. You will work directly with government partners, international organizations, and local stakeholders to design and implement sustainable health system improvements.",
    responsibilities: [
      "Lead technical assistance projects for health systems strengthening in multiple East African countries",
      "Provide strategic guidance to government partners on health policy and program development",
      "Design and oversee implementation of health system assessments and improvement plans",
      "Manage project teams including technical experts, consultants, and field staff",
      "Build and maintain relationships with key stakeholders including ministries of health, donors, and partners",
      "Develop high-quality technical reports, policy briefs, and presentations",
      "Mentor junior staff and contribute to organizational capacity building",
      "Represent MedWHOLE at regional and international forums",
    ],
    qualifications: [
      "Master's degree or higher in Public Health, Health Policy, or related field",
      "Minimum 8 years of experience in public health, with at least 5 years in health systems strengthening",
      "Proven experience leading multi-country health projects in Africa",
      "Strong understanding of health systems frameworks and health policy development",
      "Excellent project management and team leadership skills",
      "Outstanding written and verbal communication skills in English; French or Swahili is an advantage",
      "Experience working with government partners and international organizations",
      "Willingness to travel extensively within East Africa (up to 50% of time)",
    ],
    preferred: [
      "PhD in Public Health or related field",
      "Experience with USAID, WHO, or other major donor-funded projects",
      "Published research in peer-reviewed journals",
      "Certification in project management (PMP or equivalent)",
    ],
    benefits: [
      "Competitive salary commensurate with experience",
      "Comprehensive health insurance for employee and dependents",
      "Annual performance bonus",
      "Professional development allowance",
      "Generous leave policy (30 days annual leave)",
      "Relocation assistance if applicable",
      "Flexible working arrangements",
    ],
    howToApply:
      "Please submit your CV, cover letter, and three professional references through our online application portal. In your cover letter, please specifically address your experience with health systems strengthening in Africa and your approach to working with government partners.",
  },
  {
    slug: "training-coordinator",
    title: "Training Coordinator",
    department: "Academy",
    location: "Accra, Ghana",
    type: "Full-time",
    level: "Mid-level",
    salary: "$28,000 - $38,000",
    posted: "March 8, 2024",
    deadline: "April 10, 2024",
    description: "Coordinate training programs, manage logistics, and support curriculum development.",
    fullDescription:
      "MedWHOLE Academy is looking for an organized and detail-oriented Training Coordinator to manage the logistics and coordination of our growing portfolio of training programs. This role is perfect for someone who thrives on organization, enjoys working with diverse groups of people, and is passionate about capacity building in public health. You will be the backbone of our training operations, ensuring that every program runs smoothly from registration through graduation.",
    responsibilities: [
      "Coordinate all aspects of training program logistics including venue booking, materials preparation, and participant communications",
      "Manage participant registration, enrollment, and database maintenance",
      "Support curriculum development and instructional design processes",
      "Coordinate with instructors and facilitators to ensure training readiness",
      "Manage training budgets and track expenses",
      "Organize and facilitate virtual training sessions using online platforms",
      "Collect and analyze participant feedback to improve program quality",
      "Maintain training records and prepare program reports",
      "Support marketing and recruitment efforts for training programs",
      "Coordinate certificate production and distribution",
    ],
    qualifications: [
      "Bachelor's degree in Education, Public Health, Business Administration, or related field",
      "Minimum 3 years of experience in training coordination, event management, or program administration",
      "Strong organizational and project management skills",
      "Excellent communication and interpersonal skills",
      "Proficiency in Microsoft Office Suite and learning management systems",
      "Experience with virtual training platforms (Zoom, Teams, etc.)",
      "Ability to manage multiple priorities and meet deadlines",
      "Attention to detail and commitment to quality",
    ],
    preferred: [
      "Experience in health sector training or capacity building",
      "Knowledge of adult learning principles",
      "Experience with database management and reporting",
      "Graphic design skills for training materials",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance coverage",
      "Professional development opportunities",
      "Annual leave (25 days)",
      "Supportive team environment",
      "Opportunity to contribute to meaningful capacity building work",
    ],
    howToApply:
      "Submit your CV and a cover letter describing your experience with training coordination and why you're interested in this role. Please include examples of training programs or events you've successfully coordinated.",
  },
  {
    slug: "community-health-officer",
    title: "Community Health Officer",
    department: "Health Services",
    location: "Lagos, Nigeria",
    type: "Full-time",
    level: "Entry-level",
    salary: "$18,000 - $24,000",
    posted: "March 5, 2024",
    deadline: "April 5, 2024",
    description: "Implement community health programs and coordinate outreach activities.",
    fullDescription:
      "Join our Health Services team as a Community Health Officer and make a direct impact on community health outcomes in Lagos. This entry-level position is ideal for recent graduates or early-career professionals passionate about community health and grassroots health promotion. You will work closely with community health workers, local leaders, and health facilities to implement evidence-based health interventions.",
    responsibilities: [
      "Implement community health programs including health education, screening, and referral services",
      "Coordinate and supervise community health workers in assigned areas",
      "Conduct community health assessments and needs analyses",
      "Organize and facilitate community health education sessions",
      "Maintain program records and prepare regular activity reports",
      "Build relationships with community leaders and local organizations",
      "Support mobile clinic operations and outreach activities",
      "Monitor program indicators and contribute to quality improvement efforts",
      "Participate in team meetings and training sessions",
    ],
    qualifications: [
      "Bachelor's degree in Public Health, Nursing, Community Health, or related field",
      "0-2 years of experience in community health or related field",
      "Strong interpersonal and communication skills",
      "Ability to work effectively with diverse communities",
      "Basic computer skills (Microsoft Office)",
      "Fluency in English and local languages",
      "Willingness to work in community settings and travel within Lagos",
      "Commitment to health equity and community empowerment",
    ],
    preferred: [
      "Experience with community mobilization or health education",
      "Knowledge of primary health care principles",
      "Motorcycle or car driving license",
    ],
    benefits: [
      "Competitive entry-level salary",
      "Health insurance",
      "On-the-job training and mentorship",
      "Career growth opportunities",
      "Annual leave (20 days)",
      "Transportation allowance",
    ],
    howToApply:
      "Please submit your CV, cover letter, and academic transcripts. In your cover letter, describe your interest in community health work and any relevant experience working with communities.",
  },
  {
    slug: "monitoring-evaluation-specialist",
    title: "Monitoring & Evaluation Specialist",
    department: "Consulting",
    location: "Remote",
    type: "Contract",
    level: "Senior",
    salary: "$50,000 - $65,000 (annual contract)",
    posted: "March 12, 2024",
    deadline: "April 20, 2024",
    description: "Design and implement M&E frameworks for health programs across multiple countries.",
    fullDescription:
      "We are seeking a highly skilled Monitoring & Evaluation Specialist to design and implement comprehensive M&E frameworks for our health programs across Africa. This remote contract position requires an expert in M&E methodologies with strong analytical skills and experience working on multi-country health projects. You will play a critical role in ensuring our programs are evidence-based, results-oriented, and continuously improving.",
    responsibilities: [
      "Design comprehensive M&E frameworks for health programs including indicators, data collection tools, and analysis plans",
      "Develop and implement data quality assurance systems",
      "Conduct baseline, midline, and endline evaluations for health programs",
      "Analyze program data and prepare evaluation reports with actionable recommendations",
      "Build capacity of program staff in M&E principles and practices",
      "Develop data visualization dashboards and reporting templates",
      "Support proposal development by designing M&E components",
      "Ensure compliance with donor M&E requirements",
      "Contribute to organizational learning and knowledge management",
    ],
    qualifications: [
      "Master's degree in Public Health, Statistics, Epidemiology, or related field",
      "Minimum 7 years of experience in M&E for health programs",
      "Expertise in quantitative and qualitative research methods",
      "Strong statistical analysis skills (STATA, R, SPSS, or similar)",
      "Experience with data visualization tools (Tableau, Power BI, or similar)",
      "Proven track record of designing and implementing M&E frameworks",
      "Excellent report writing and presentation skills",
      "Experience working remotely and managing time effectively",
    ],
    preferred: [
      "PhD in relevant field",
      "Experience with USAID, Global Fund, or other major donor M&E requirements",
      "Knowledge of health information systems (DHIS2, etc.)",
      "Experience with impact evaluation methodologies",
    ],
    benefits: [
      "Competitive contract rate",
      "Fully remote work arrangement",
      "Flexible schedule",
      "Professional development opportunities",
      "Potential for contract renewal or permanent position",
    ],
    howToApply:
      "Submit your CV, cover letter, and a sample M&E framework or evaluation report you have developed. Please indicate your availability and daily/monthly rate expectations.",
  },
  {
    slug: "research-assistant",
    title: "Research Assistant",
    department: "Academy",
    location: "Kampala, Uganda",
    type: "Full-time",
    level: "Entry-level",
    salary: "$15,000 - $20,000",
    posted: "March 1, 2024",
    deadline: "April 1, 2024",
    description: "Support research projects, data collection, and analysis for public health studies.",
    fullDescription:
      "MedWHOLE Academy is seeking a motivated Research Assistant to support our growing research portfolio. This is an excellent opportunity for recent graduates or early-career researchers to gain hands-on experience in public health research while contributing to evidence generation that informs health policy and practice across Africa.",
    responsibilities: [
      "Support all phases of research projects from design through dissemination",
      "Conduct literature reviews and synthesize research findings",
      "Collect quantitative and qualitative data using various methods",
      "Enter, clean, and manage research data",
      "Conduct basic statistical analyses under supervision",
      "Assist with preparation of research reports, manuscripts, and presentations",
      "Coordinate research activities including participant recruitment and scheduling",
      "Maintain research documentation and ensure ethical compliance",
      "Support grant proposal development",
    ],
    qualifications: [
      "Bachelor's degree in Public Health, Statistics, Social Sciences, or related field",
      "0-2 years of research experience",
      "Basic understanding of research methods",
      "Proficiency in Microsoft Excel and Word",
      "Strong attention to detail and organizational skills",
      "Good written and verbal communication skills",
      "Ability to work independently and as part of a team",
      "Commitment to ethical research practices",
    ],
    preferred: [
      "Experience with statistical software (STATA, R, SPSS)",
      "Experience with qualitative data analysis",
      "Previous research experience in health-related topics",
      "Knowledge of research ethics and IRB processes",
    ],
    benefits: [
      "Competitive entry-level salary",
      "Health insurance",
      "Mentorship from experienced researchers",
      "Training in research methods and analysis",
      "Opportunity to co-author publications",
      "Career development support",
      "Annual leave (20 days)",
    ],
    howToApply:
      "Submit your CV, cover letter, academic transcripts, and a writing sample (research paper, thesis chapter, or report). Describe your research interests and career goals in your cover letter.",
  },
  {
    slug: "clinical-nurse-maternal-health",
    title: "Clinical Nurse - Maternal Health",
    department: "Health Services",
    location: "Dar es Salaam, Tanzania",
    type: "Full-time",
    level: "Mid-level",
    salary: "$22,000 - $30,000",
    posted: "February 28, 2024",
    deadline: "March 30, 2024",
    description: "Provide maternal and child health services in community clinics and mobile units.",
    fullDescription:
      "We are looking for a skilled and compassionate Clinical Nurse specializing in maternal health to join our Health Services team in Dar es Salaam. You will provide high-quality maternal and child health services in both static clinics and mobile health units, reaching underserved communities across the region. This role combines clinical practice with community health promotion and offers the opportunity to make a real difference in maternal and child health outcomes.",
    responsibilities: [
      "Provide comprehensive prenatal, delivery, and postnatal care services",
      "Conduct health assessments and screenings for pregnant women and children",
      "Manage normal deliveries and identify complications requiring referral",
      "Provide family planning counseling and services",
      "Conduct health education sessions on maternal and child health topics",
      "Supervise and mentor community health workers",
      "Maintain accurate patient records and program documentation",
      "Participate in mobile clinic operations and community outreach",
      "Ensure infection prevention and quality of care standards",
      "Collaborate with health facilities for referrals and follow-up",
    ],
    qualifications: [
      "Diploma or Bachelor's degree in Nursing or Midwifery",
      "Valid nursing/midwifery license in Tanzania",
      "Minimum 3 years of clinical experience in maternal and child health",
      "Strong clinical skills in prenatal care, safe delivery, and postnatal care",
      "Experience with family planning services",
      "Good communication and health education skills",
      "Ability to work in community settings and rural areas",
      "Commitment to providing respectful, patient-centered care",
    ],
    preferred: [
      "Additional training in emergency obstetric care",
      "Experience with mobile health services",
      "Knowledge of community health approaches",
      "Fluency in English and Swahili",
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive health insurance",
      "Professional development and training opportunities",
      "Annual leave (25 days)",
      "Transportation support",
      "Supportive clinical supervision",
    ],
    howToApply:
      "Submit your CV, cover letter, copies of nursing/midwifery certificates and license, and three professional references. Please describe your experience in maternal health and your motivation for this role.",
  },
]

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  const job = jobs.find((j) => j.slug === params.slug)

  if (!job) {
    notFound()
  }

  const relatedJobs = jobs.filter((j) => j.slug !== job.slug && j.department === job.department).slice(0, 3)

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
            <div className="max-w-4xl mx-auto">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Back to Careers
              </Link>
              <Badge className="mb-4 bg-accent text-accent-foreground">{job.department}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">{job.title}</h1>
              <div className="flex flex-wrap gap-4 text-primary-foreground/90">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  {job.type}
                </span>
                <span className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  {job.level}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">About This Role</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{job.fullDescription}</p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Key Responsibilities</h2>
                  <Card>
                    <CardContent className="p-8">
                      <ul className="space-y-3">
                        {job.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Qualifications */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Required Qualifications</h2>
                  <Card>
                    <CardContent className="p-8">
                      <ul className="space-y-3">
                        {job.qualifications.map((qualification, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{qualification}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Preferred Qualifications */}
                {job.preferred && job.preferred.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Preferred Qualifications</h2>
                    <Card className="bg-muted/50">
                      <CardContent className="p-8">
                        <ul className="space-y-3">
                          {job.preferred.map((pref, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{pref}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Benefits */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-8">
                      <ul className="space-y-3">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* How to Apply */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">How to Apply</h2>
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-8">
                      <p className="leading-relaxed mb-6">{job.howToApply}</p>
                      <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href="/contact">Submit Application</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Job Info Card */}
                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-8 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-6">Job Details</h3>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Building2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Department</p>
                            <p className="text-sm text-muted-foreground">{job.department}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Location</p>
                            <p className="text-sm text-muted-foreground">{job.location}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Employment Type</p>
                            <p className="text-sm text-muted-foreground">{job.type}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Experience Level</p>
                            <p className="text-sm text-muted-foreground">{job.level}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <DollarSign className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Salary Range</p>
                            <p className="text-sm text-muted-foreground">{job.salary}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Posted</p>
                            <p className="text-sm text-muted-foreground">{job.posted}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Application Deadline</p>
                            <p className="text-sm text-muted-foreground">{job.deadline}</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t space-y-3">
                        <Button asChild className="w-full bg-primary hover:bg-primary/90">
                          <Link href="/contact">Apply Now</Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full bg-transparent">
                          <Link href="/careers">View All Jobs</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Share Job */}
                  <Card className="bg-muted/50">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-4">Share This Job</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Know someone who would be perfect for this role? Share it with them!
                      </p>
                      <Button variant="outline" className="w-full bg-transparent">
                        Copy Link
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Jobs */}
        {relatedJobs.length > 0 && (
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">More Jobs in {job.department}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedJobs.map((relatedJob) => (
                  <Card key={relatedJob.slug} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {relatedJob.department}
                      </Badge>
                      <h3 className="text-xl font-bold mb-3">{relatedJob.title}</h3>
                      <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {relatedJob.location}
                        </p>
                        <p className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          {relatedJob.type}
                        </p>
                      </div>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href={`/careers/${relatedJob.slug}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
