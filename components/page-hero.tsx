import { cn } from "@/lib/utils"

interface PageHeroProps {
  title: string
  description: string
  badge?: {
    icon?: React.ReactNode
    text: string
  }
  backgroundImage?: string
  variant?: "primary" | "accent" | "health"
  children?: React.ReactNode
}

export function PageHero({
  title,
  description,
  badge,
  backgroundImage,
  variant = "primary",
  children,
}: PageHeroProps) {
  const variantStyles = {
    primary: {
      gradient: "from-primary via-primary to-primary/90",
      badgeBg: "bg-accent/20 border-accent/30",
      badgeText: "text-primary-foreground",
    },
    accent: {
      gradient: "from-accent via-accent to-accent/90",
      badgeBg: "bg-primary/20 border-primary/30",
      badgeText: "text-accent-foreground",
    },
    health: {
      gradient: "from-primary via-primary to-primary/80",
      badgeBg: "bg-health-accent/20 border-health-accent/30",
      badgeText: "text-primary-foreground",
    },
  }

  const styles = variantStyles[variant]

  return (
    <section
      className={cn(
        "relative text-primary-foreground py-20 lg:py-32 overflow-hidden",
        `bg-gradient-to-br ${styles.gradient}`
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 opacity-20">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className={cn("absolute inset-0 bg-gradient-to-br", styles.gradient)} />
        </div>
      )}

      {/* Floating Accent Glows */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-3xl animate-fade-in">
          {badge && (
            <div
              className={cn(
                "inline-flex items-center gap-2 mb-6 backdrop-blur-sm px-4 py-2 rounded-full border",
                styles.badgeBg
              )}
            >
              {badge.icon}
              <span className={cn("text-sm font-semibold", styles.badgeText)}>
                {badge.text}
              </span>
            </div>
          )}

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">{title}</h1>

          <p className="text-xl lg:text-2xl text-primary-foreground/95 leading-relaxed mb-8">
            {description}
          </p>

          {children}
        </div>
      </div>
    </section>
  )
}
