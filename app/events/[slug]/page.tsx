import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EventRegistrationForm } from "@/components/event-registration-form"
import Link from "next/link"
import { Calendar, MapPin, Clock, Users, Mail, Phone, ExternalLink, ArrowLeft } from "lucide-react"
import { getEventBySlug } from "@/lib/sanity-queries"
import { urlFor } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { notFound } from "next/navigation"

export const revalidate = 60

interface EventPageProps {
  params: {
    slug: string
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const event = await getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  const eventDate = new Date(event.date)
  const endDate = event.endDate ? new Date(event.endDate) : null
  const now = new Date()
  const isPastEvent = eventDate < now
  const registrationDeadline = event.registrationDeadline ? new Date(event.registrationDeadline) : null
  const isRegistrationOpen = registrationDeadline ? registrationDeadline > now : !isPastEvent

  const formatCurrency = (amount: number, currency: string) => {
    const symbols: { [key: string]: string } = {
      'NGN': '₦',
      'USD': '$',
      'GBP': '£',
      'EUR': '€'
    }
    return `${symbols[currency] || currency} ${amount.toLocaleString()}`
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-12 sm:py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Button asChild variant="ghost" className="mb-6 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/news">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Events
                </Link>
              </Button>
              
              {event.category && (
                <Badge className="mb-4 bg-accent text-accent-foreground">{event.category}</Badge>
              )}
              
              {isPastEvent && (
                <Badge variant="secondary" className="mb-4 ml-2">Past Event</Badge>
              )}
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">{event.title}</h1>
              
              {event.excerpt && (
                <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mb-6">
                  {event.excerpt}
                </p>
              )}

              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>
                    {eventDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                
                {endDate && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>
                      to {endDate.toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                )}
                
                {event.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {event.featuredImage && (
          <section className="py-8 sm:py-12 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={urlFor(event.featuredImage).width(1200).height(675).url()}
                    alt={event.featuredImage.alt || event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {event.description && (
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">About This Event</h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {event.description}
                    </p>
                  </div>
                )}

                {event.content && (
                  <div className="prose prose-lg max-w-none">
                    <PortableText value={event.content} />
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Registration/Price Card */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {event.isFree ? 'Free Event' : 'Event Fee'}
                      </h3>
                      {!event.isFree && event.price && (
                        <p className="text-3xl font-bold text-primary">
                          {formatCurrency(event.price, event.currency || 'NGN')}
                        </p>
                      )}
                    </div>

                    {event.capacity && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Capacity: {event.capacity} attendees</span>
                      </div>
                    )}

                    {event.requiresRegistration && !isPastEvent && (
                      <div className="space-y-3">
                        {registrationDeadline && (
                          <p className="text-sm text-muted-foreground">
                            Register by: {registrationDeadline.toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </p>
                        )}
                        
                        {isRegistrationOpen ? (
                          <>
                            {event.registrationType === 'external' && event.registrationUrl && (
                              <Button asChild className="w-full" size="lg">
                                <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                                  Register Now
                                  <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                              </Button>
                            )}
                            {event.registrationType === 'custom' && event.registrationForm && (
                              <Button 
                                asChild
                                className="w-full" 
                                size="lg"
                              >
                                <a href="#registration-form">Register Now</a>
                              </Button>
                            )}
                          </>
                        ) : (
                          <Button disabled className="w-full" size="lg">
                            Registration Closed
                          </Button>
                        )}
                      </div>
                    )}

                    {isPastEvent && (
                      <div className="text-center py-3 bg-muted rounded-lg">
                        <p className="text-sm font-medium text-muted-foreground">
                          This event has ended
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Event Details Card */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold mb-4">Event Details</h3>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold mb-1">Date & Time</p>
                        <div className="flex items-start gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <div>
                            <p>{eventDate.toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}</p>
                            <p>{eventDate.toLocaleTimeString('en-US', {
                              hour: 'numeric',
                              minute: '2-digit',
                              hour12: true
                            })}</p>
                          </div>
                        </div>
                      </div>

                      {event.venue && (
                        <div>
                          <p className="font-semibold mb-1">Venue</p>
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <p className="whitespace-pre-wrap">{event.venue}</p>
                          </div>
                        </div>
                      )}

                      {event.organizer && (
                        <div>
                          <p className="font-semibold mb-1">Organizer</p>
                          <p className="text-muted-foreground">{event.organizer}</p>
                        </div>
                      )}

                      {event.contactEmail && (
                        <div>
                          <p className="font-semibold mb-1">Contact</p>
                          <a 
                            href={`mailto:${event.contactEmail}`}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Mail className="h-4 w-4" />
                            <span className="break-all">{event.contactEmail}</span>
                          </a>
                        </div>
                      )}

                      {event.contactPhone && (
                        <div>
                          <a 
                            href={`tel:${event.contactPhone}`}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Phone className="h-4 w-4" />
                            <span>{event.contactPhone}</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Registration Form */}
        {event.requiresRegistration && 
         event.registrationType === 'custom' && 
         event.registrationForm?.fields && 
         !isPastEvent && 
         isRegistrationOpen && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div id="registration-form" className="max-w-2xl mx-auto">
              <EventRegistrationForm
                eventId={event._id}
                eventTitle={event.title}
                fields={event.registrationForm.fields}
                submitButtonText={event.registrationForm.submitButtonText}
                successMessage={event.registrationForm.successMessage}
              />
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
