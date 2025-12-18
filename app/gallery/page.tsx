import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Stethoscope, Users, Camera } from "lucide-react"
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
      <main id="main-content" className="flex-1">
        <PageHero
          title="Photo Gallery"
          description="Explore moments from our programs, events, and community impact across Nigeria"
          badge={{
            icon: <Camera className="h-5 w-5 text-accent" />,
            text: "Our Impact",
          }}
        />

        {/* Gallery Tabs */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="all" className="w-full">
              <div className="overflow-x-auto pb-2 -mx-4 sm:mx-0">
                <TabsList className="w-full sm:w-auto justify-start mb-8 sm:mb-12 bg-muted/50 p-1 rounded-lg inline-flex min-w-full sm:min-w-0 px-4 sm:px-0">
                  <TabsTrigger value="all" className="gap-1.5 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
                    <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">All Photos</span>
                    <span className="sm:hidden">All</span>
                    <span>({allImages.length})</span>
                  </TabsTrigger>
                  <TabsTrigger value="health" className="gap-1.5 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
                    <Stethoscope className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Health Services</span>
                    <span className="sm:hidden">Health</span>
                    <span>({healthImages.length})</span>
                  </TabsTrigger>
                  <TabsTrigger value="academy" className="gap-1.5 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
                    <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Academy</span>
                    <span>({academyImages.length})</span>
                  </TabsTrigger>
                  <TabsTrigger value="consulting" className="gap-1.5 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
                    <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Consulting</span>
                    <span className="sm:hidden">Consult</span>
                    <span>({consultingImages.length})</span>
                  </TabsTrigger>
                </TabsList>
              </div>

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
