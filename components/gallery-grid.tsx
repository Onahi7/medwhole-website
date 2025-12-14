"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { urlFor } from "@/lib/sanity"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  _id: string
  title: string
  description?: string
  image: any
  category: string
  order?: number
}

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image._id}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer bg-muted hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={urlFor(image.image).width(800).height(600).url()}
              alt={image.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                {image.description && (
                  <p className="text-sm text-white/90 line-clamp-2">{image.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-0">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            {selectedImage && (
              <div className="p-4">
                <img
                  src={urlFor(selectedImage.image).width(1600).height(1200).url()}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <div className="mt-4 text-white">
                  <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                  {selectedImage.description && (
                    <p className="text-white/80">{selectedImage.description}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
