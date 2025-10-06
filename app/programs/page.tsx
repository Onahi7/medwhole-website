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
    // Academy Programs
    {
      slug: "public-health-leadership",
      title: "Public Health Leadership Certificate",
      category: "Academy",
      subcategory: "Leadership",
      duration: "6 months",
      level: "Intermediate",
      format: "Hybrid",
      description: "Develop essential leadership skills for public health professionals managing teams and programs.",
      modules: [
        "Strategic Leadership in Public Health",
        "Health Systems Management",
        "Policy Development & Advocacy",
        "Team Building & Communication",
      ],
      outcomes: [
        "Lead public health initiatives effectively",
        "Develop strategic health programs",
        "Manage diverse healthcare teams",
        "Influence health policy decisions",
      ],
    },
    {
      slug: "epidemiology-disease-surveillance",
      title: "Epidemiology & Disease Surveillance",
      category: "Academy",
      subcategory: "Research",
      duration: "4 months",
      level: "Advanced",
      format: "Online",
      description: "Master epidemiological methods and disease surveillance systems for outbreak investigation and prevention.",
      modules: [
        "Epidemiological Study Design",
        "Biostatistics & Data Analysis",
        "Disease Surveillance Systems",
        "Outbreak Investigation",
      ],
      outcomes: [
        "Design and conduct epidemiological studies",
        "Analyze disease patterns and trends",
        "Implement surveillance systems",
        "Lead outbreak investigations",
      ],
    },
    {
      slug: "research-methods-grant-writing",
      title: "Research Methods & Grant Writing",
      category: "Academy",
      subcategory: "Research",
      duration: "3 months",
      level: "Beginner",
      format: "Online",
      description: "Essential skills for conducting research and securing funding through effective grant proposal writing.",
      modules: [
        "Research Design & Methodology",
        "Data Collection & Analysis",
        "Grant Proposal Development",
        "Budget Planning & Management",
      ],
      outcomes: [
        "Design rigorous research studies",
        "Write competitive grant proposals",
        "Manage research budgets",
        "Publish research findings",
      ],
    },
    
    // Health Programs
    {
      slug: "maternal-child-health",
      title: "Maternal & Child Health Program",
      category: "Health",
      subcategory: "Clinical",
      duration: "Ongoing",
      level: "All Levels",
      format: "Community-based",
      description: "Comprehensive maternal and child health services from prenatal care through pediatric healthcare, focusing on reducing mortality rates.",
      modules: [
        "Prenatal & Antenatal Care",
        "Safe Delivery Practices",
        "Newborn & Child Health",
        "Nutrition & Growth Monitoring",
      ],
      outcomes: [
        "Provide quality maternal healthcare",
        "Manage pediatric health conditions",
        "Implement nutrition programs",
        "Reduce maternal and child mortality",
      ],
    },
    {
      slug: "community-health-outreach",
      title: "Community Health Outreach Program",
      category: "Health",
      subcategory: "Community",
      duration: "Ongoing",
      level: "All Levels",
      format: "Community-based",
      description: "Mobile clinics and community health worker programs bringing essential healthcare services to underserved populations.",
      modules: [
        "Community Health Assessment",
        "Health Education & Promotion",
        "Community Mobilization",
        "Participatory Approaches",
      ],
      outcomes: [
        "Conduct community health assessments",
        "Design health education programs",
        "Mobilize communities for health",
        "Implement participatory interventions",
      ],
    },
    {
      slug: "chronic-disease-management",
      title: "Chronic Disease Management Program",
      category: "Health",
      subcategory: "Clinical",
      duration: "Long-term",
      level: "All Levels",
      format: "Clinical & Community",
      description: "Comprehensive programs for managing diabetes, hypertension, HIV/AIDS and other chronic conditions with patient education.",
      modules: [
        "Diabetes Care & Management",
        "Hypertension Control",
        "HIV/AIDS Support",
        "Patient Education Programs",
      ],
      outcomes: [
        "Improve chronic disease outcomes",
        "Enhance patient self-management",
        "Reduce disease complications",
        "Strengthen care continuity",
      ],
    },
    
    // Consult Programs
    {
      slug: "health-systems-strengthening",
      title: "Health Systems Strengthening Program",
      category: "Consult",
      subcategory: "Strategic",
      duration: "12-24 months",
      level: "Advanced",
      format: "On-site & Remote",
      description: "Comprehensive assessment and strengthening of health systems including governance, financing, and service delivery improvements.",
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
        "Manage health information systems",
      ],
    },
    {
      slug: "me-framework-development",
      title: "M&E Framework Development",
      category: "Consult",
      subcategory: "Technical",
      duration: "6-12 months",
      level: "Advanced",
      format: "Consultative",
      description: "Design and implementation of robust monitoring and evaluation frameworks with data systems and performance measurement.",
      modules: [
        "M&E Framework Design",
        "Indicator Development",
        "Data Systems Setup",
        "Performance Dashboards",
      ],
      outcomes: [
        "Develop comprehensive M&E frameworks",
        "Establish data collection systems",
        "Create performance dashboards",
        "Build M&E capacity",
      ],
    },
    {
      slug: "organizational-capacity-building",
      title: "Organizational Capacity Building",
      category: "Consult",
      subcategory: "Organizational",
      duration: "9-18 months",
      level: "All Levels",
      format: "Consultative",
      description: "Strategic planning, change management, and institutional strengthening programs for health organizations.",
      modules: [
        "Organizational Assessment",
        "Strategic Planning",
        "Change Management",
        "Institutional Strengthening",
      ],
      outcomes: [
        "Strengthen organizational capacity",
        "Implement strategic plans",
        "Manage organizational change",
        "Improve institutional performance",
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
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">All Three Arms</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">MedWHOLE Programs</h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Comprehensive programs across Academy, Health, and Consult arms designed to advance public health practice across Africa
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join thousands of public health professionals who have transformed their careers and organizations through MedWHOLE
                programs across all three arms.
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