import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/lib/sanity.server'
import { sendRegistrationConfirmation, sendOrganizerNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { eventId, formData } = body

    if (!eventId || !formData) {
      return NextResponse.json(
        { error: 'Event ID and form data are required' },
        { status: 400 }
      )
    }

    // Extract contact info for easy reference
    const contactEmail = formData.find((field: any) => 
      field.label.toLowerCase().includes('email')
    )?.value || ''
    
    const contactName = formData.find((field: any) => 
      field.label.toLowerCase().includes('name')
    )?.value || ''

    if (!contactEmail || !contactName) {
      return NextResponse.json(
        { error: 'Name and email are required in the form' },
        { status: 400 }
      )
    }

    // Fetch event details
    const event = await writeClient.fetch(
      `*[_type == "event" && _id == $eventId][0] {
        _id,
        title,
        slug,
        date,
        venue,
        registrationForm {
          notificationEmails
        }
      }`,
      { eventId }
    )

    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      )
    }

    // Create registration document in Sanity
    const registration = await writeClient.create({
      _type: 'eventRegistration',
      event: {
        _type: 'reference',
        _ref: eventId,
      },
      submittedAt: new Date().toISOString(),
      formData: {
        data: formData,
      },
      contactEmail,
      contactName,
      status: 'pending',
    })

    // Send confirmation email to registrant
    try {
      await sendRegistrationConfirmation(
        { name: contactName, email: contactEmail },
        {
          title: event.title,
          date: new Date(event.date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          venue: event.venue,
          slug: event.slug.current,
        },
        formData
      )
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError)
      // Don't fail the registration if email fails
    }

    // Send notification to event organizers
    const notificationEmails = event.registrationForm?.notificationEmails || []
    if (notificationEmails.length > 0) {
      try {
        await sendOrganizerNotification(
          notificationEmails,
          { name: contactName, email: contactEmail },
          {
            title: event.title,
            date: new Date(event.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            venue: event.venue,
            slug: event.slug.current,
          },
          formData
        )
      } catch (emailError) {
        console.error('Failed to send organizer notification:', emailError)
        // Don't fail the registration if email fails
      }
    }

    return NextResponse.json({
      success: true,
      registrationId: registration._id,
      message: 'Registration submitted successfully',
    })
  } catch (error) {
    console.error('Event registration error:', error)
    return NextResponse.json(
      { error: 'Failed to submit registration' },
      { status: 500 }
    )
  }
}

// GET endpoint to fetch registrations for an event (admin only)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const eventId = searchParams.get('eventId')

    if (!eventId) {
      return NextResponse.json(
        { error: 'Event ID is required' },
        { status: 400 }
      )
    }

    // TODO: Add authentication check for admin users

    const registrations = await writeClient.fetch(
      `*[_type == "eventRegistration" && event._ref == $eventId] | order(submittedAt desc) {
        _id,
        submittedAt,
        contactEmail,
        contactName,
        status,
        formData,
        notes
      }`,
      { eventId }
    )

    return NextResponse.json({ registrations })
  } catch (error) {
    console.error('Failed to fetch registrations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch registrations' },
      { status: 500 }
    )
  }
}
