import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ContentSkeletonProps {
  variant?: "card" | "event" | "gallery" | "list"
  count?: number
  className?: string
}

export function ContentSkeleton({ variant = "card", count = 3, className }: ContentSkeletonProps) {
  const items = Array.from({ length: count }, (_, i) => i)

  if (variant === "event") {
    return (
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
        {items.map((i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-video bg-muted animate-pulse" />
            <CardContent className="p-6">
              <div className="h-4 bg-muted rounded mb-3 animate-pulse w-1/3" />
              <div className="h-6 bg-muted rounded mb-3 animate-pulse" />
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded animate-pulse w-4/5" />
              </div>
              <div className="h-10 bg-muted rounded animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (variant === "gallery") {
    return (
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
        {items.map((i) => (
          <Card key={i} className="overflow-hidden">
            <div className="aspect-[4/3] bg-muted animate-pulse" />
            <CardContent className="p-6">
              <div className="h-5 bg-muted rounded mb-2 animate-pulse w-3/4" />
              <div className="h-4 bg-muted rounded animate-pulse w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (variant === "list") {
    return (
      <div className={cn("space-y-4", className)}>
        {items.map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted rounded-lg animate-pulse flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-5 bg-muted rounded animate-pulse w-1/2" />
                  <div className="h-4 bg-muted rounded animate-pulse w-full" />
                  <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  // Default card variant
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {items.map((i) => (
        <Card key={i}>
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-muted rounded-xl mb-6 animate-pulse" />
            <div className="h-6 bg-muted rounded mb-4 animate-pulse w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
              <div className="h-4 bg-muted rounded animate-pulse w-4/6" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
