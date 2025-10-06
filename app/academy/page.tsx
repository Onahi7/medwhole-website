import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Calendar,
  FileText,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Clock,
} from "lucide-react"

export default function AcademyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-3xl animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-6 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
                <GraduationCap className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-primary-foreground">Education & Training</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">MedWHOLE Academy</h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/95 leading-relaxed mb-8">
                Building the next generation of public health leaders through comprehensive training, research
                education, mentorship, and professional development programs.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                  Programs
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">What We Offer</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive educational programs designed to build capacity and advance careers in public health
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <BookOpen className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Training Programs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Structured courses in epidemiology, biostatistics, health policy, disease surveillance, and program
                    management.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <FileText className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    Research Training
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Hands-on research methodology, data analysis, scientific writing, and publication support for
                    emerging researchers.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-chart-3/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-chart-3/10 group-hover:bg-chart-3 group-hover:scale-110 transition-all duration-300">
                    <Users className="h-8 w-8 text-chart-3 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-chart-3 transition-colors">
                    Mentorship Programs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    One-on-one guidance from experienced public health professionals to support career development and
                    growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Award className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Certification Courses
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional certificates in specialized areas including M&E, grant writing, and health systems
                    management.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Calendar className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    Workshops & Seminars
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Regular events featuring expert speakers on current public health topics, trends, and innovations.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-chart-3/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-chart-3/10 group-hover:bg-chart-3 group-hover:scale-110 transition-all duration-300">
                    <TrendingUp className="h-8 w-8 text-chart-3 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-chart-3 transition-colors">
                    Professional Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Leadership training, communication skills, project management, and career advancement support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Program Tracks */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                  Learning Paths
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Program Tracks</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Choose the learning path that aligns with your career goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-10">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <BookOpen className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Foundational Track
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    For those new to public health or seeking to strengthen core competencies.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Introduction to Public Health</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Basic Epidemiology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Health Data Management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Community Health Principles</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50">
                <CardContent className="p-10">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Award className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">Advanced Track</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    For experienced professionals seeking specialized expertise and leadership skills.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Advanced Research Methods</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Health Systems Leadership</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Policy Analysis & Advocacy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Strategic Program Management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Approach */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                    Methodology
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Learning Approach</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Interactive Learning
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Engaging sessions combining theory with practical applications and real-world case studies.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-4xl font-bold text-accent-foreground group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    Hands-On Practice
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Field experiences, research projects, and practical assignments to build applied skills.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-chart-3 to-chart-3/60 flex items-center justify-center text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-chart-3 transition-colors">Ongoing Support</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Continuous mentorship, peer learning networks, and alumni connections for career growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academy Gallery Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                  Academy Gallery
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Training Excellence in Action</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Real-world training experiences that prepare professionals for impactful careers in public health
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-students-in-epidemiology-training-classroo.jpg"
                    alt="Epidemiology training session"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Classroom Training</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Interactive Classroom Learning</h3>
                  <p className="text-sm text-muted-foreground">Hands-on epidemiology and biostatistics training with expert instructors</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-health-professionals-doing-field-research-.jpg"
                    alt="Field research training"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Field Research</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Field Research Experience</h3>
                  <p className="text-sm text-muted-foreground">Practical application of research methods in real community settings</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-professionals-data-analysis-computer-lab.jpg"
                    alt="Data analysis training"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-chart-3 text-white">Data Analysis</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Advanced Data Analysis</h3>
                  <p className="text-sm text-muted-foreground">Statistical analysis and research methodology using modern tools</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/workshop-training-session-african-professionals.jpg"
                    alt="Workshop session"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Workshop</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Professional Workshops</h3>
                  <p className="text-sm text-muted-foreground">Grant writing and professional development workshops</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-healthcare-workers-training-session.jpg"
                    alt="Clinical training"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Clinical Skills</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Clinical Skills Training</h3>
                  <p className="text-sm text-muted-foreground">Advanced clinical skills development for healthcare workers</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-graduates-celebrating-graduation-ceremony.jpg"
                    alt="Graduation ceremony"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Graduation</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Celebrating Success</h3>
                  <p className="text-sm text-muted-foreground">Empowering the next generation of public health leaders</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary">
                <Link href="/gallery?category=Academy" className="flex items-center gap-2">
                  View Complete Academy Gallery <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Academy Programs Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                  Training Programs
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Academy Programs</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive training programs designed to build capacity and advance careers in public health
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <GraduationCap className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Public Health Leadership Certificate
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    6-month hybrid program developing essential leadership skills for public health professionals managing teams and programs.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4" />
                    <span>6 months</span>
                    <Badge variant="outline" className="ml-2">Intermediate</Badge>
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                    <Link href="/programs/public-health-leadership">
                      View Program <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <BookOpen className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    Epidemiology & Disease Surveillance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    4-month online program mastering epidemiological methods and disease surveillance systems for outbreak investigation.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4" />
                    <span>4 months</span>
                    <Badge variant="outline" className="ml-2">Advanced</Badge>
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors">
                    <Link href="/programs/epidemiology-disease-surveillance">
                      View Program <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-chart-3/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-chart-3/10 group-hover:bg-chart-3 group-hover:scale-110 transition-all duration-300">
                    <Award className="h-8 w-8 text-chart-3 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-chart-3 transition-colors">
                    Research Methods & Grant Writing
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    3-month online program covering essential research skills and grant proposal writing for securing funding.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4" />
                    <span>3 months</span>
                    <Badge variant="outline" className="ml-2">Beginner</Badge>
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-chart-3 group-hover:text-white group-hover:border-chart-3 transition-colors">
                    <Link href="/programs/research-methods-grant-writing">
                      View Program <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/programs">
                  View All Academy Programs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Recent Events */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary">Academy Events</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Academy Events</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Stay updated with the latest training programs, workshops, and educational events from MedWHOLE Academy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Event 1 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GraduationCap className="h-16 w-16 text-primary-foreground/80" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Workshop</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>October 15-17, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Public Health Leadership Summit 2025
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Three-day intensive workshop on leadership development for public health professionals across Africa.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/academy/events/public-health-leadership-summit-2025">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Event 2 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-accent to-accent/80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-accent-foreground/80" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Training</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>September 22-25, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Epidemiology Masterclass Series
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Advanced training in disease surveillance, outbreak investigation, and epidemiological analysis methods.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/academy/events/epidemiology-masterclass-series">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Event 3 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-chart-3 to-chart-3/80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-16 w-16 text-white/80" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Conference</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>August 10-12, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Research Methods & Grant Writing Workshop
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Intensive workshop on research design, methodology, and successful grant proposal writing techniques.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/academy/events/research-methods-grant-writing-workshop">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/academy/events">
                  View All Academy Events <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          <div className="container relative mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Ready to Advance Your Career?</h2>
            <p className="text-xl mb-10 text-primary-foreground/95 max-w-2xl mx-auto leading-relaxed">
              Join MedWHOLE Academy and become part of a community of public health leaders making a difference across
              Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
