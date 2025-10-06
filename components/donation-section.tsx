import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, GraduationCap, Stethoscope } from "lucide-react"

export function DonationSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Your contribution helps us advance health, leadership, and development across Africa. Every donation makes a
          difference.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Support Education</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Fund scholarships and training programs for aspiring public health professionals.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
              <Stethoscope className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fund Health</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Provide healthcare to underserved communities through our outreach programs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="inline-flex p-3 rounded-lg bg-chart-3/10 mb-4">
              <Users className="h-6 w-6 text-chart-3" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Strengthen Systems</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Support consult projects that build capacity and improve health systems.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">General Support</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Unrestricted funds allow us to respond to the most pressing needs.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Make a Donation</h3>
          <p className="mb-6 text-primary-foreground/90 leading-relaxed">
            To make a donation or discuss major gift opportunities, please contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="mailto:info@medwhole.org">Contact Us to Donate</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/80">
            MedWHOLE Alliance is committed to transparency and accountability in all our operations.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
