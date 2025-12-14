import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Stethoscope, Users } from "lucide-react"
import { getGalleryImages } from "@/lib/sanity-queries"
import { GalleryGrid } from "@/components/gallery-grid"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function GalleryPage() {
  // Fetch all gallery images from Sanity
  const allImages = await getGalleryImages()
  
  // Filter images by category
  const healthImages = allImages.filter((img: any) => img.category === 'Health Services')
  const academyImages = allImages.filter((img: any) => img.category === 'Academy')
  const consultingImages = allImages.filter((img: any) => img.category === 'Consulting')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">Our Impact</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Photo Gallery</h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
                Explore moments from our programs, events, and community impact across Nigeria
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Tabs */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full justify-start mb-12 bg-muted/50 p-1 rounded-lg overflow-x-auto flex-nowrap">
                <TabsTrigger value="all" className="gap-2">
                  <Award className="h-4 w-4" />
                  All Photos ({allImages.length})
                </TabsTrigger>
                <TabsTrigger value="health" className="gap-2">
                  <Stethoscope className="h-4 w-4" />
                  Health Services ({healthImages.length})
                </TabsTrigger>
                <TabsTrigger value="academy" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  Academy ({academyImages.length})
                </TabsTrigger>
                <TabsTrigger value="consulting" className="gap-2">
                  <Users className="h-4 w-4" />
                  Consulting ({consultingImages.length})
                </TabsTrigger>
              </TabsList>

              {/* All Photos */}
              <TabsContent value="all">
                {allImages.length > 0 ? (
                  <GalleryGrid images={allImages} />
                ) : (
                  <Card className="border-2 border-dashed">
                    <CardContent className="p-12 text-center">
                      <div className="max-w-md mx-auto">
                        <div className="mb-4 inline-flex p-4 rounded-full bg-muted">
                          <Award className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Gallery Coming Soon</h3>
                        <p className="text-muted-foreground">
                          Photos from our programs and events will be available here soon.
                          <br />
                          <span className="text-sm">Add content via Sanity Studio at /studio</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Health Services */}
              <TabsContent value="health">
                {healthImages.length > 0 ? (
                  <GalleryGrid images={healthImages} />
                ) : (
                  <Card className="border-2 border-dashed">
                    <CardContent className="p-12 text-center">
                      <div className="max-w-md mx-auto">
                        <div className="mb-4 inline-flex p-4 rounded-full bg-muted">
                          <Stethoscope className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Health Services Photos</h3>
                        <p className="text-muted-foreground">
                          Photos from our health programs will appear here.
                          <br />
                          <span className="text-sm">Add content via Sanity Studio at /studio</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Academy */}
              <TabsContent value="academy">
                {academyImages.length > 0 ? (
                  <GalleryGrid images={academyImages} />
                ) : (
                  <Card className="border-2 border-dashed">
                    <CardContent className="p-12 text-center">
                      <div className="max-w-md mx-auto">
                        <div className="mb-4 inline-flex p-4 rounded-full bg-muted">
                          <BookOpen className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Academy Photos</h3>
                        <p className="text-muted-foreground">
                          Photos from our academy programs will appear here.
                          <br />
                          <span className="text-sm">Add content via Sanity Studio at /studio</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              {/* Consulting */}
              <TabsContent value="consulting">
                {consultingImages.length > 0 ? (
                  <GalleryGrid images={consultingImages} />
                ) : (
                  <Card className="border-2 border-dashed">
                    <CardContent className="p-12 text-center">
                      <div className="max-w-md mx-auto">
                        <div className="mb-4 inline-flex p-4 rounded-full bg-muted">
                          <Users className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Consulting Photos</h3>
                        <p className="text-muted-foreground">
                          Photos from our consulting programs will appear here.
                          <br />
                          <span className="text-sm">Add content via Sanity Studio at /studio</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
