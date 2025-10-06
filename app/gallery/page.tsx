"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const searchParams = useSearchParams()

  // Set initial category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam && ["Academy", "Health", "Consult", "Events", "Team"].includes(categoryParam)) {
      setSelectedCategory(categoryParam)
    }
  }, [searchParams])

  const categories = ["All", "Academy", "Health", "Consult", "Events", "Team"]

  const galleryImages = [
    // Academy (Training & Education)
    {
      src: "/african-health-professionals-graduation-ceremony.jpg",
      title: "Leadership Training Graduation",
      category: "Academy",
      description: "Celebrating the graduation of 500+ health professionals from our leadership program",
    },
    {
      src: "/african-students-in-epidemiology-training-classroo.jpg",
      title: "Epidemiology Training Session",
      category: "Academy",
      description: "Interactive classroom learning in epidemiology and biostatistics",
    },
    {
      src: "/workshop-training-session-african-professionals.jpg",
      title: "Grant Writing Workshop",
      category: "Academy",
      description: "Participants engaged in our grant writing workshop series",
    },
    {
      src: "/african-healthcare-workers-training-session.jpg",
      title: "Clinical Skills Training",
      category: "Academy",
      description: "Healthcare workers learning advanced clinical skills",
    },
    {
      src: "/african-health-professionals-doing-field-research-.jpg",
      title: "Field Research Training",
      category: "Academy",
      description: "Hands-on research methodology training in the field",
    },
    {
      src: "/african-professionals-data-analysis-computer-lab.jpg",
      title: "Data Analysis Workshop",
      category: "Academy",
      description: "Advanced statistical analysis and research methods training",
    },
    
    // Health
    {
      src: "/african-community-health-workers-in-field.jpg",
      title: "Community Health Workers",
      category: "Health",
      description: "Our dedicated community health workers serving rural communities",
    },
    {
      src: "/mobile-health-clinic-africa-rural-community.jpg",
      title: "Mobile Health Clinic",
      category: "Health",
      description: "Bringing healthcare to remote communities through our mobile clinics",
    },
    {
      src: "/african-mother-and-child-receiving-healthcare-mate.jpg",
      title: "Maternal Health Care",
      category: "Health",
      description: "Providing quality maternal and child health care",
    },
    {
      src: "/african-healthcare-workers-providing-medical-care-.jpg",
      title: "Clinical Care Delivery",
      category: "Health",
      description: "Healthcare workers providing direct clinical care to patients",
    },
    {
      src: "/african-health-workers-vaccination-campaign.jpg",
      title: "Vaccination Campaign",
      category: "Health",
      description: "Community vaccination campaign reaching thousands",
    },
    {
      src: "/african-community-health-education-session.jpg",
      title: "Community Health Education",
      category: "Health",
      description: "Health education session in a rural community",
    },
    {
      src: "/african-women-health-workshop.jpg",
      title: "Women's Health Workshop",
      category: "Health",
      description: "Empowering women through health education and services",
    },
    
    // Consult
    {
      src: "/african-health-professionals-in-strategic-meeting-.jpg",
      title: "Strategic Planning Session",
      category: "Consult",
      description: "Health professionals engaged in strategic planning and consult",
    },
    {
      src: "/african-medical-team-consultation.jpg",
      title: "Technical Consultation",
      category: "Consult",
      description: "Our multidisciplinary team providing technical assistance",
    },
    {
      src: "/african-health-conference-presentation.jpg",
      title: "Conference Presentation",
      category: "Consult",
      description: "Presenting research findings and technical expertise at conferences",
    },
    {
      src: "/african-professionals-reviewing-health-data.jpg",
      title: "M&E Data Review",
      category: "Consult",
      description: "Monitoring and evaluation data analysis and review session",
    },
    {
      src: "/african-health-policy-meeting.jpg",
      title: "Policy Development Workshop",
      category: "Consult",
      description: "Supporting policy development and health systems strengthening",
    },
    
    // Events & Team
    {
      src: "/partnership-signing-ceremony-african-health-offici.jpg",
      title: "WHO Partnership Signing",
      category: "Events",
      description: "Signing ceremony for our partnership with WHO Africa",
    },
    {
      src: "/african-graduates-celebrating-graduation-ceremony.jpg",
      title: "Academy Graduation Ceremony",
      category: "Events",
      description: "Celebrating academic achievements and leadership development",
    },
    {
      src: "/african-community-health-workers-team-collaboratio.jpg",
      title: "Team Collaboration",
      category: "Team",
      description: "Our diverse team working together on community health initiatives",
    },
  ]

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">Our Work in Action</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Photo Gallery</h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
                Explore moments from our programs, services, and impact across Africa
              </p>
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
                      ? "bg-primary text-primary-foreground"
                      : "bg-transparent hover:bg-primary/10"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{image.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{image.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{image.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 text-white hover:text-accent transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 text-white hover:text-accent transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-6 text-center text-white">
                <Badge className="mb-3 bg-accent text-accent-foreground">
                  {filteredImages[selectedImage].category}
                </Badge>
                <h3 className="text-2xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
                <p className="text-white/80">{filteredImages[selectedImage].description}</p>
                <p className="text-sm text-white/60 mt-4">
                  {selectedImage + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
