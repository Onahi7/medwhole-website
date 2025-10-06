"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PartnershipForm() {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    partnershipType: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        organizationName: "",
        contactName: "",
        email: "",
        phone: "",
        partnershipType: "",
        description: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }, 1000)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="organizationName">Organization Name *</Label>
            <Input
              id="organizationName"
              required
              value={formData.organizationName}
              onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
              placeholder="Your Organization"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactName">Contact Person *</Label>
            <Input
              id="contactName"
              required
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              placeholder="John Doe"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="partnerEmail">Email Address *</Label>
              <Input
                id="partnerEmail"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="contact@organization.org"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+XXX XXX XXX XXX"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="partnershipType">Partnership Interest *</Label>
            <Select
              value={formData.partnershipType}
              onValueChange={(value) => setFormData({ ...formData, partnershipType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select partnership type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="academy">Academy Programs</SelectItem>
                <SelectItem value="health-services">Health</SelectItem>
                <SelectItem value="consulting">Consult</SelectItem>
                <SelectItem value="research">Research Collaboration</SelectItem>
                <SelectItem value="funding">Funding/Donor Partnership</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="partnerDescription">Tell Us About Your Partnership Interest *</Label>
            <Textarea
              id="partnerDescription"
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your organization and how you'd like to partner with MedWHOLE Alliance..."
              rows={6}
            />
          </div>

          {submitStatus === "success" && (
            <div className="p-4 bg-primary/10 text-primary rounded-lg text-sm">
              Thank you for your interest! We'll review your partnership proposal and get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-destructive/10 text-destructive rounded-lg text-sm">
              Something went wrong. Please try again.
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
