import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FileText, Download, BookOpen, Video, Search, Filter, ExternalLink } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      title: "Community Health Assessment Toolkit",
      type: "Toolkit",
      category: "Community Health",
      description: "Comprehensive guide for conducting community health needs assessments with templates and tools.",
      format: "PDF",
      size: "2.5 MB",
      downloads: 1240,
    },
    {
      title: "Maternal Health Indicators Report 2024",
      type: "Report",
      category: "Research",
      description: "Annual report on maternal health outcomes and trends across African regions.",
      format: "PDF",
      size: "4.8 MB",
      downloads: 856,
    },
    {
      title: "Grant Writing Masterclass",
      type: "Video Course",
      category: "Capacity Building",
      description: "Step-by-step video series on writing successful grant proposals for health programs.",
      format: "Video",
      duration: "3.5 hours",
      downloads: 2103,
    },
    {
      title: "Disease Surveillance Guidelines",
      type: "Guidelines",
      category: "Epidemiology",
      description: "Best practices for implementing disease surveillance systems in resource-limited settings.",
      format: "PDF",
      size: "1.8 MB",
      downloads: 1567,
    },
    {
      title: "Health Systems Strengthening Framework",
      type: "Framework",
      category: "Health Systems",
      description: "Strategic framework for assessing and strengthening health systems at district level.",
      format: "PDF",
      size: "3.2 MB",
      downloads: 934,
    },
    {
      title: "Nutrition Program Implementation Guide",
      type: "Guide",
      category: "Nutrition",
      description: "Practical guide for designing and implementing community nutrition programs.",
      format: "PDF",
      size: "2.1 MB",
      downloads: 1456,
    },
  ]

  const publications = [
    {
      title: "Impact of Community Health Workers on Maternal Mortality",
      journal: "African Journal of Public Health",
      year: "2024",
      authors: "MedWHOLE Research Team",
    },
    {
      title: "Strengthening Primary Healthcare in Rural Settings",
      journal: "Global Health Action",
      year: "2023",
      authors: "MedWHOLE Consult",
    },
    {
      title: "Innovative Approaches to Health Education",
      journal: "Health Education Research",
      year: "2023",
      authors: "MedWHOLE Academy",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">Knowledge Hub</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Resources & Publications</h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Access our library of toolkits, research publications, guidelines, and training materials
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search resources..."
                    className="pl-12 h-14 bg-white/10 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Downloadable Resources</h2>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {resource.type}
                      </Badge>
                      <div className="p-2 rounded-lg bg-accent/10">
                        {resource.type === "Video Course" ? (
                          <Video className="h-5 w-5 text-accent" />
                        ) : (
                          <FileText className="h-5 w-5 text-accent" />
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{resource.format}</span>
                      <span>{resource.size || resource.duration}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{resource.downloads.toLocaleString()} downloads</div>
                    <Button
                      className="w-full group-hover:bg-primary transition-colors bg-transparent"
                      variant="outline"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Recent Publications</h2>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                            {pub.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4" />
                              {pub.journal}
                            </span>
                            <span>•</span>
                            <span>{pub.year}</span>
                            <span>•</span>
                            <span>{pub.authors}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="flex-shrink-0">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  View All Publications
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need Custom Resources?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our consult team can develop tailored toolkits, guidelines, and training materials for your
                organization.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/consulting">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
