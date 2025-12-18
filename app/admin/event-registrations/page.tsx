import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { AdminHeader } from "@/components/admin-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { writeClient } from "@/lib/sanity.server"
import { Download, Calendar, User, Mail } from "lucide-react"

export default async function EventRegistrationsPage() {
  const session = await auth()

  if (!session) {
    redirect("/admin/login")
  }

  // Fetch all event registrations
  const registrations = await writeClient.fetch(`
    *[_type == "eventRegistration"] | order(submittedAt desc) {
      _id,
      submittedAt,
      contactEmail,
      contactName,
      status,
      "eventTitle": event->title,
      "eventDate": event->date,
      formData
    }
  `)

  const exportToCSV = () => {
    // This would be implemented as a client-side download
    // For now, it's a placeholder
    alert('CSV export functionality - to be implemented')
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader title="Event Registrations" subtitle="View and manage event registration submissions" />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Button onClick={exportToCSV}>
              <Download className="mr-2 h-4 w-4" />
              Export to CSV
            </Button>
          </div>

          {registrations.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No registrations yet.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {registrations.map((registration: any) => (
                <Card key={registration._id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">
                          {registration.contactName || 'Anonymous'}
                        </CardTitle>
                        <CardDescription className="flex flex-col gap-1">
                          <span className="flex items-center gap-2">
                            <Mail className="h-3 w-3" />
                            {registration.contactEmail}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar className="h-3 w-3" />
                            {registration.eventTitle}
                          </span>
                        </CardDescription>
                      </div>
                      <Badge
                        variant={
                          registration.status === 'confirmed'
                            ? 'default'
                            : registration.status === 'cancelled'
                            ? 'destructive'
                            : 'secondary'
                        }
                      >
                        {registration.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm space-y-2">
                      <p className="text-muted-foreground">
                        Submitted: {new Date(registration.submittedAt).toLocaleString()}
                      </p>
                      {registration.formData?.data && (
                        <div className="mt-4 space-y-2 border-t pt-4">
                          <p className="font-semibold">Form Data:</p>
                          {registration.formData.data.map((field: any, index: number) => (
                            <div key={index} className="pl-4">
                              <span className="font-medium">{field.label}:</span>{' '}
                              <span className="text-muted-foreground">{field.value || 'N/A'}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
