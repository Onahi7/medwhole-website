"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { GraduationCap, BookOpen, Award, Clock, CheckCircle2, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const programs = [
    // Academy Programs - Children's Education & Development
    {
      slug: "back-to-school-scholarship",
      title: "Back-to-School Scholarship Program",
      category: "Academy",
      subcategory: "Education",
      duration: "Ongoing",
      level: "Ages 2-18",
      format: "In-person",
      description: "Supports vulnerable children with tuition, uniforms, books, and exam fees.",
      modules: [
        "Student selection",
        "Tuition fees coverage",
        "Study materials provision",
        "Mentorship programs",
      ],
      outcomes: [
        "Increased school enrollment",
        "Improved retention rates",
        "Academic stability for vulnerable children",
        "Restored hope in formal education",
      ],
    },
    {
      slug: "discipleship-character-development",
      title: "Discipleship & Character Development (GOODNEWS CLUB)",
      category: "Academy",
      subcategory: "Character Building",
      duration: "Weekly sessions",
      level: "All Ages",
      format: "In-person",
      description: "Weekly GOODNEWS CLUB sessions rooted in biblical teachings, focused on building identity, godly values, and purpose-driven living.",
      modules: [
        "Weekly lessons",
        "Small-group mentoring",
        "Faith-based activities",
        "Character building exercises",
      ],
      outcomes: [
        "Raise morally sound students",
        "Build spiritual foundation",
        "Develop godly character",
        "Foster purpose-driven living",
      ],
    },
    {
      slug: "skill-development-workshops",
      title: "Skill Development Workshops",
      category: "Academy",
      subcategory: "Skills Training",
      duration: "Ongoing",
      level: "Youth & Children",
      format: "Hands-on Workshops",
      description: "Tailored trainings in creative arts, crafts, basic technology, and entrepreneurship.",
      modules: [
        "Hands-on workshops",
        "Toolkits & starter materials",
        "Entrepreneurship coaching",
        "Product development training",
      ],
      outcomes: [
        "Produce liquid soaps, beads, air fresheners",
        "Create tablet soap and fancy stools",
        "Develop income-generating skills",
        "Build entrepreneurial mindset",
      ],
    },
    {
      slug: "summer-holiday-lessons",
      title: "Summer Holiday Lessons",
      category: "Academy",
      subcategory: "Academic Support",
      duration: "School breaks",
      level: "All Levels",
      format: "Intensive Classes",
      description: "Intensive academic support program during school breaks that bridges learning gaps and prepares students for new academic sessions.",
      modules: [
        "Subject-focused classes",
        "Remedial tutoring",
        "Assessment tests",
        "Exam coaching",
      ],
      outcomes: [
        "Bridge learning gaps",
        "Academic consistency",
        "Continuous learning",
        "Better exam preparation",
      ],
    },
    {
      slug: "health-nutrition-support",
      title: "Health & Nutrition Support",
      category: "Academy",
      subcategory: "Health & Wellness",
      duration: "Ongoing",
      level: "All Children",
      format: "Community-based",
      description: "Routine health checkups, deworming, and hygiene education with nutrition interventions for malnourished and vulnerable children.",
      modules: [
        "Screening programs",
        "Deworming campaigns",
        "Micronutrient supplementation",
        "Caregiver education",
      ],
      outcomes: [
        "Nutritional rehabilitation for malnourished children",
        "Improved health outcomes",
        "Better hygiene practices",
        "Enhanced learning capacity",
      ],
    },
    {
      slug: "community-health-outreach-academy",
      title: "Community Health Outreach",
      category: "Academy",
      subcategory: "Health Services",
      duration: "Periodic",
      level: "Community-wide",
      format: "Mobile Clinics",
      description: "Periodic medical missions offering free consultations, immunizations, and basic treatments. Over 1,000 children reached.",
      modules: [
        "Mobile clinics",
        "Immunization drives",
        "Health education",
        "Referral systems",
      ],
      outcomes: [
        "Reach unreached communities",
        "Provide free healthcare",
        "Increase immunization coverage",
        "Improve community health awareness",
      ],
    },
    {
      slug: "computer-literacy-training",
      title: "Computer Literacy Training",
      category: "Academy",
      subcategory: "Technology",
      duration: "Term-based",
      level: "Beginner",
      format: "Hands-on Classes",
      description: "Basic ICT skills and digital exposure to prepare children for the modern world. Over 10 children equipped with foundational ICT skills.",
      modules: [
        "Basic computer classes",
        "Internet safety lessons",
        "Hands-on practice",
        "Certificate of completion",
      ],
      outcomes: [
        "Train tech-savvy children",
        "Digital literacy",
        "Prepare for tech-driven future",
        "Build computer confidence",
      ],
    },
    {
      slug: "exam-coaching-waec-jamb",
      title: "Exam Coaching (WAEC & JAMB)",
      category: "Academy",
      subcategory: "Exam Preparation",
      duration: "Pre-exam period",
      level: "Senior Secondary",
      format: "Tutorial Classes",
      description: "Focused tutorials to prepare senior secondary students for success in key national exams. One child scored 298/400 in JAMB.",
      modules: [
        "Subject tutors",
        "Past-question practice",
        "Mock exams",
        "Study resources & counselling",
      ],
      outcomes: [
        "Position students for university education",
        "Improve exam scores",
        "Build exam confidence",
        "Academic excellence",
      ],
    },
    {
      slug: "community-feeding-initiative",
      title: "Community Feeding Initiative",
      category: "Academy",
      subcategory: "Nutrition",
      duration: "Ongoing",
      level: "Vulnerable Families",
      format: "Distribution Programs",
      description: "Targeted feeding programs for extremely poor children and families including school feeding initiatives and emergency food relief.",
      modules: [
        "School meal programs",
        "Emergency food packs",
        "Community distribution",
        "Volunteer mobilization",
      ],
      outcomes: [
        "Address nutritional needs",
        "Support vulnerable households",
        "Improve food security",
        "Enable learning through proper nutrition",
      ],
    },
    
    // Health Programs
    {
      slug: "gosa-phc-optimization",
      title: "Gosa Primary Health Centre Optimization",
      category: "Health",
      subcategory: "Health Systems",
      duration: "Ongoing Partnership",
      level: "Health System",
      format: "On-site Collaboration",
      description: "Collaboration with FCT Primary Health Care Board to improve governance, infrastructure, and community engagement.",
      modules: [
        "Infrastructure improvement",
        "Governance strengthening",
        "Service delivery enhancement",
        "Community mobilization",
      ],
      outcomes: [
        "Enhanced PHC functionality",
        "Community ownership and participation",
        "Improved health service quality",
        "Sustainable health system strengthening",
      ],
    },
    {
      slug: "rhema-hospital-transition",
      title: "Rhema Foundation Hospital Transition (Kwali)",
      category: "Health",
      subcategory: "Health Systems",
      duration: "12-18 months",
      level: "Hospital Management",
      format: "Consultative",
      description: "Developing a structured handover and management model for rural hospital revitalization.",
      modules: [
        "Handover framework development",
        "Governance model design",
        "Clinical service improvements",
        "Operational restructuring",
      ],
      outcomes: [
        "Smooth leadership transition",
        "Improved service coordination",
        "Clearer long-term management structure",
        "Sustainable hospital operations",
      ],
    },
    {
      slug: "health-hub-royal-estate",
      title: "Health Hub (Royal Estate)",
      category: "Health",
      subcategory: "Integrated Care",
      duration: "Ongoing",
      level: "Community Health",
      format: "Hybrid Model",
      description: "A flagship model combining digital health, clinical services, and outreach in surrounding communities.",
      modules: [
        "Digital consultations",
        "Onsite clinic services",
        "Community outreach programs",
        "Telehealth integration",
      ],
      outcomes: [
        "Better access to care",
        "Increased community engagement",
        "Scalable hybrid health delivery model",
        "Improved health outcomes",
      ],
    },
    {
      slug: "emergency-preparedness-training",
      title: "Emergency Preparedness Training",
      category: "Health",
      subcategory: "Capacity Building",
      duration: "Periodic Sessions",
      level: "All Levels",
      format: "Hands-on Training",
      description: "Partnering with Nigerian Cardiac Society and National Assembly Health Services to provide CPR and BLS training.",
      modules: [
        "Comprehensive CPR training",
        "Basic Life Support (BLS)",
        "Emergency response protocols",
        "Certification programs",
      ],
      outcomes: [
        "Provide emergency response beyond hospital",
        "Build community first responders",
        "Save lives through quick intervention",
        "Empower health workers and NYSC members",
      ],
    },
    
    // Consult Programs
    {
      slug: "facility-systems-assessment",
      title: "Facility and Systems Assessment",
      category: "Consult",
      subcategory: "Strategic",
      duration: "3-6 months",
      level: "Advanced",
      format: "On-site & Remote",
      description: "Comprehensive audits of hospitals and health facilities (e.g., Rhema Foundation Hospital assessment, Gosa PHC optimization).",
      modules: [
        "Facility audits",
        "Governance evaluation",
        "Service delivery assessment",
        "Improvement planning",
      ],
      outcomes: [
        "Clear recommendations for improvement",
        "Strengthen workflow efficiency",
        "Improve quality of care",
        "Evidence-based facility upgrades",
      ],
    },
    {
      slug: "public-health-research",
      title: "Public Health Research",
      category: "Consult",
      subcategory: "Research",
      duration: "6-12 months",
      level: "Advanced",
      format: "Research-based",
      description: "Systematic reviews, health impact evaluations, and operational studies (e.g., Post-operative outcomes and Asthma prevalence in Nigeria).",
      modules: [
        "Research design",
        "Data collection",
        "Data analysis",
        "Report development",
        "Policy briefs",
      ],
      outcomes: [
        "Evidence-based insights",
        "Improve health outcomes",
        "Shape policy direction",
        "Generate actionable knowledge",
      ],
    },
    {
      slug: "policy-design-technical-support",
      title: "Policy Design and Technical Support",
      category: "Consult",
      subcategory: "Policy",
      duration: "6-12 months",
      level: "Advanced",
      format: "Consultative",
      description: "Developing frameworks for hospital transition, NGO partnerships, and PHC reforms.",
      modules: [
        "Stakeholder consultations",
        "Governance models",
        "Policy frameworks",
        "Implementation strategies",
      ],
      outcomes: [
        "More effective policy-aligned health programs",
        "Sustainable governance structures",
        "Stakeholder buy-in",
        "System-wide improvements",
      ],
    },
    {
      slug: "monitoring-evaluation-learning",
      title: "Monitoring, Evaluation, and Learning (MEL)",
      category: "Consult",
      subcategory: "Technical",
      duration: "6-12 months",
      level: "Advanced",
      format: "Consultative",
      description: "Establishing data systems for performance tracking and evidence generation.",
      modules: [
        "MEL frameworks",
        "Data collection tools",
        "Reporting templates",
        "Performance dashboards",
      ],
      outcomes: [
        "Develop comprehensive MEL frameworks",
        "Establish data collection systems",
        "Create performance dashboards",
        "Enable evidence-based decision making",
      ],
    },
    {
      slug: "training-advisory",
      title: "Training and Advisory",
      category: "Consult",
      subcategory: "Capacity Building",
      duration: "Flexible",
      level: "All Levels",
      format: "Training & Consultative",
      description: "Providing technical assistance to government agencies, NGOs, and private organizations on health systems strengthening and workforce planning.",
      modules: [
        "Health Systems Framework",
        "Healthcare Financing",
        "Quality Improvement",
        "Health Information Systems",
      ],
      outcomes: [
        "Assess health system performance",
        "Design system strengthening interventions",
        "Improve healthcare quality",
        "Build organizational capacity",
      ],
    },
  ]

  const categories = ["All", "Academy", "Health", "Consult"]
  
  const filteredPrograms = programs.filter(program => 
    selectedCategory === "All" || program.category === selectedCategory
  )

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">All Three Arms</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">MedWHOLE Programs</h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Comprehensive programs across Education, Nutrition, Health, and Consult arms designed to achieve wholeness in communities across Nigeria
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">Enroll Now</Link>
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

        {/* Category Filter */}
        <section className="py-8 bg-muted/30 sticky top-16 z-10 border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? category === "Academy" ? "bg-primary text-primary-foreground" :
                        category === "Health" ? "bg-accent text-accent-foreground" :
                        category === "Consult" ? "bg-chart-3 text-white" :
                        "bg-primary text-primary-foreground"
                      : "bg-transparent hover:bg-primary/10"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPrograms.map((program, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className={`${
                        program.category === 'Academy' ? 'bg-primary/10 text-primary' :
                        program.category === 'Health' ? 'bg-accent/10 text-accent' :
                        'bg-chart-3/10 text-chart-3'
                      }`}>
                        {program.category}
                      </Badge>
                      <div className="flex gap-2">
                        <Badge variant="outline">{program.level}</Badge>
                        <Badge variant="outline">{program.format}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{program.modules.length} Modules</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        Program Components
                      </h4>
                      <ul className="space-y-2">
                        {program.modules.map((module, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="h-5 w-5 text-accent" />
                        Key Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {program.outcomes.slice(0, 3).map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      asChild
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Link href={`/programs/${program.slug}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredPrograms.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No programs found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join us in building whole persons, whole health, and whole communities. Whether you're a student, organization, or donor, there's a way to get involved.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Enroll Today</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}