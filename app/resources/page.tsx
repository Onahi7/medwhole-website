import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FileText, Download, BookOpen, Video, Search, Filter, ExternalLink, Library } from "lucide-react"

export default function ResourcesPage() {
  // Resources should be fetched from the database via admin panel
  const resources: any[] = []
  const publications: any[] = []

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Resources & Publications"
          description="Access our library of toolkits, research publications, guidelines, and training materials"
          badge={{
            icon: <Library className="h-5 w-5 text-accent" />,
            text: "Knowledge Hub",
          }}
        >
          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/60" />
              <Input
                placeholder="Search resources..."
                className="pl-12 h-14 bg-white/10 border-white/30 text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </PageHero>

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
              {resources.length > 0 ? (
                resources.map((resource, index) => (
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
                ))
              ) : (
                <div className="col-span-full">
                  <Card className="border-2 border-dashed">
                    <CardContent className="p-12 text-center">
                      <div className="max-w-md mx-auto">
                        <div className="mb-4 inline-flex p-4 rounded-full bg-muted">
                          <FileText className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">No Resources Yet</h3>
                        <p className="text-muted-foreground">
                          Resources and downloads will be available here soon.
                          <br />
                          <span className="text-sm">Resources are managed from the admin panel.</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Recent Publications</h2>
              <div className="space-y-4">
                {publications.length > 0 ? (
                  publications.map((pub, index) => (
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
                  ))
                ) : (
                  <Card className="border-2 border-dashed">
                    <CardContent className="p-12 text-center">
                      <div className="max-w-md mx-auto">
                        <div className="mb-4 inline-flex p-4 rounded-full bg-muted">
                          <BookOpen className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">No Publications Yet</h3>
                        <p className="text-muted-foreground">
                          Research publications will be listed here soon.
                          <br />
                          <span className="text-sm">Publications are managed from the admin panel.</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
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
