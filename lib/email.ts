import { Resend } from 'resend'

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY)

// Default sender email
const FROM_EMAIL = process.env.EMAIL_FROM || 'onboarding@resend.dev'

interface EventDetails {
  title: string
  date: string
  venue?: string
  slug: string
}

interface RegistrantDetails {
  name: string
  email: string
}

interface FormDataField {
  fieldId: string
  label: string
  value: string
}

/**
 * Send confirmation email to registrant
 */
export async function sendRegistrationConfirmation(
  registrant: RegistrantDetails,
  event: EventDetails,
  formData: FormDataField[]
) {
  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: registrant.email,
      subject: `Registration Confirmed: ${event.title}`,
      html: generateConfirmationEmail(registrant, event, formData),
    })

    if (error) {
      console.error('Failed to send confirmation email:', error)
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error sending confirmation email:', error)
    throw error
  }
}

/**
 * Send notification email to event organizers
 */
export async function sendOrganizerNotification(
  organizerEmails: string[],
  registrant: RegistrantDetails,
  event: EventDetails,
  formData: FormDataField[]
) {
  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: organizerEmails,
      subject: `New Registration: ${event.title}`,
      html: generateOrganizerNotificationEmail(registrant, event, formData),
    })

    if (error) {
      console.error('Failed to send organizer notification:', error)
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error sending organizer notification:', error)
    throw error
  }
}

/**
 * Generate HTML for confirmation email
 */
function generateConfirmationEmail(
  registrant: RegistrantDetails,
  event: EventDetails,
  formData: FormDataField[]
): string {
  const eventUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/events/${event.slug}`
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registration Confirmed</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Registration Confirmed! 🎉</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <p style="font-size: 16px; margin-bottom: 20px;">Hello ${registrant.name},</p>
          
          <p style="font-size: 16px; margin-bottom: 30px;">
            Thank you for registering for <strong>${event.title}</strong>. We're excited to have you join us!
          </p>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #667eea;">
            <h2 style="margin-top: 0; color: #667eea; font-size: 20px;">Event Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 120px;">Event:</td>
                <td style="padding: 8px 0;">${event.title}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Date:</td>
                <td style="padding: 8px 0;">${event.date}</td>
              </tr>
              ${event.venue ? `
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Location:</td>
                <td style="padding: 8px 0;">${event.venue}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          ${formData.length > 0 ? `
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
            <h3 style="margin-top: 0; color: #333; font-size: 18px;">Your Registration Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formData.map(field => `
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; width: 120px; vertical-align: top;">${field.label}:</td>
                  <td style="padding: 8px 0; word-break: break-word;">${field.value}</td>
                </tr>
              `).join('')}
            </table>
          </div>
          ` : ''}
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${eventUrl}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">View Event Details</a>
          </div>
          
          <div style="border-top: 1px solid #dee2e6; margin-top: 30px; padding-top: 20px; text-align: center;">
            <p style="color: #6c757d; font-size: 14px; margin: 5px 0;">
              If you have any questions, please don't hesitate to reach out to us.
            </p>
            <p style="color: #6c757d; font-size: 14px; margin: 5px 0;">
              MedWHOLE Alliance<br>
              <a href="mailto:info@medwhole.org" style="color: #667eea; text-decoration: none;">info@medwhole.org</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}

/**
 * Generate HTML for organizer notification email
 */
function generateOrganizerNotificationEmail(
  registrant: RegistrantDetails,
  event: EventDetails,
  formData: FormDataField[]
): string {
  const adminUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/admin/event-registrations`
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Event Registration</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🔔 New Registration Received</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <p style="font-size: 16px; margin-bottom: 20px;">
            A new registration has been submitted for <strong>${event.title}</strong>.
          </p>
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #f5576c;">
            <h2 style="margin-top: 0; color: #f5576c; font-size: 18px;">Registrant Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 100px;">Name:</td>
                <td style="padding: 8px 0;">${registrant.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${registrant.email}" style="color: #f5576c; text-decoration: none;">
                    ${registrant.email}
                  </a>
                </td>
              </tr>
            </table>
          </div>
          
          ${formData.length > 0 ? `
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #333; font-size: 18px;">Form Submission</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${formData.map(field => `
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; width: 120px; vertical-align: top; border-bottom: 1px solid #f0f0f0;">
                    ${field.label}:
                  </td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; word-break: break-word;">
                    ${field.value}
                  </td>
                </tr>
              `).join('')}
            </table>
          </div>
          ` : ''}
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${adminUrl}" style="display: inline-block; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">View All Registrations</a>
          </div>
          
          <div style="border-top: 1px solid #dee2e6; margin-top: 30px; padding-top: 20px; text-align: center;">
            <p style="color: #6c757d; font-size: 13px; margin: 0;">
              This is an automated notification from MedWHOLE Alliance Event Registration System
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}
