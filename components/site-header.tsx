"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActivePath = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center font-logo">
              <span className="text-xl font-bold bg-primary text-primary-foreground px-2 py-1 rounded">Med</span>
              <span className="text-xl font-bold text-primary">WHOLE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link 
              href="/" 
              className={cn(
                "transition-colors hover:text-primary relative group",
                isActivePath("/") ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              Home
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                isActivePath("/") ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
            <Link 
              href="/about" 
              className={cn(
                "transition-colors hover:text-primary relative group",
                isActivePath("/about") ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              About
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                isActivePath("/about") ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
            <Link 
              href="/academy" 
              className={cn(
                "transition-colors hover:text-primary relative group",
                isActivePath("/academy") ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              Academy
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                isActivePath("/academy") ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
            <Link 
              href="/health-services" 
              className={cn(
                "transition-colors hover:text-primary relative group",
                isActivePath("/health-services") ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              Health
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                isActivePath("/health-services") ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
            <Link 
              href="/consulting" 
              className={cn(
                "transition-colors hover:text-primary relative group",
                isActivePath("/consulting") ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              Consult
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                isActivePath("/consulting") ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
            <Link 
              href="/resources" 
              className={cn(
                "transition-colors hover:text-primary relative group",
                isActivePath("/resources") ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              Resources
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                isActivePath("/resources") ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
            <Link 
              href="/gallery" 
              className={cn(
                "transition-colors hover:text-primary relative group",
                isActivePath("/gallery") ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              Gallery
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                isActivePath("/gallery") ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
            <Link 
              href="/news" 
              className={cn(
                "transition-colors hover:text-primary relative group",
                isActivePath("/news") ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              News
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                isActivePath("/news") ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
            <Link 
              href="/contact" 
              className={cn(
                "transition-colors hover:text-primary relative group",
                isActivePath("/contact") ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              Contact
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                isActivePath("/contact") ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 animate-slide-in-up">
            <Link
              href="/"
              className={cn(
                "block py-2 transition-colors hover:text-primary border-l-2 pl-3",
                isActivePath("/") 
                  ? "text-primary font-semibold border-l-primary bg-primary/5" 
                  : "text-muted-foreground border-l-transparent"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "block py-2 transition-colors hover:text-primary border-l-2 pl-3",
                isActivePath("/about") 
                  ? "text-primary font-semibold border-l-primary bg-primary/5" 
                  : "text-muted-foreground border-l-transparent"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/academy"
              className={cn(
                "block py-2 transition-colors hover:text-primary border-l-2 pl-3",
                isActivePath("/academy") 
                  ? "text-primary font-semibold border-l-primary bg-primary/5" 
                  : "text-muted-foreground border-l-transparent"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Academy
            </Link>
            <Link
              href="/health-services"
              className={cn(
                "block py-2 transition-colors hover:text-primary border-l-2 pl-3",
                isActivePath("/health-services") 
                  ? "text-primary font-semibold border-l-primary bg-primary/5" 
                  : "text-muted-foreground border-l-transparent"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Health
            </Link>
            <Link
              href="/consulting"
              className={cn(
                "block py-2 transition-colors hover:text-primary border-l-2 pl-3",
                isActivePath("/consulting") 
                  ? "text-primary font-semibold border-l-primary bg-primary/5" 
                  : "text-muted-foreground border-l-transparent"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Consult
            </Link>
            <Link
              href="/resources"
              className={cn(
                "block py-2 transition-colors hover:text-primary border-l-2 pl-3",
                isActivePath("/resources") 
                  ? "text-primary font-semibold border-l-primary bg-primary/5" 
                  : "text-muted-foreground border-l-transparent"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/gallery"
              className={cn(
                "block py-2 transition-colors hover:text-primary border-l-2 pl-3",
                isActivePath("/gallery") 
                  ? "text-primary font-semibold border-l-primary bg-primary/5" 
                  : "text-muted-foreground border-l-transparent"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/news"
              className={cn(
                "block py-2 transition-colors hover:text-primary border-l-2 pl-3",
                isActivePath("/news") 
                  ? "text-primary font-semibold border-l-primary bg-primary/5" 
                  : "text-muted-foreground border-l-transparent"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link
              href="/contact"
              className={cn(
                "block py-2 transition-colors hover:text-primary border-l-2 pl-3",
                isActivePath("/contact") 
                  ? "text-primary font-semibold border-l-primary bg-primary/5" 
                  : "text-muted-foreground border-l-transparent"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
