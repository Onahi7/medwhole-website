import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { AdminHeader } from "@/components/admin-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Palette, Globe, Mail, Phone, MapPin, Upload } from "lucide-react"

export default async function SettingsPage() {
  const session = await auth()
  
  if (!session?.user) {
    redirect("/admin/login")
  }

  return (
    <>
      <AdminHeader 
        title="Settings" 
        subtitle="Manage your website branding, colors, and global settings" 
      />

      <div className="p-6 max-w-6xl">
        <Tabs defaultValue="branding" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto">
            <TabsTrigger value="branding">
              <Palette className="h-4 w-4 mr-2" />
              Branding
            </TabsTrigger>
            <TabsTrigger value="contact">
              <Mail className="h-4 w-4 mr-2" />
              Contact Info
            </TabsTrigger>
            <TabsTrigger value="general">
              <Globe className="h-4 w-4 mr-2" />
              General
            </TabsTrigger>
          </TabsList>

          {/* Branding Tab */}
          <TabsContent value="branding" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Brand Colors</CardTitle>
                <CardDescription>
                  Customize your website's color scheme. Changes will apply across all pages.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="primary-color"
                        type="color"
                        defaultValue="#1e40af"
                        className="w-20 h-10 cursor-pointer"
                      />
                      <Input
                        type="text"
                        defaultValue="#1e40af"
                        placeholder="#1e40af"
                        className="flex-1"
                      />
                    </div>
                    <p className="text-xs text-gray-500">Used for buttons, links, and accents</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accent-color">Accent Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="accent-color"
                        type="color"
                        defaultValue="#d97706"
                        className="w-20 h-10 cursor-pointer"
                      />
                      <Input
                        type="text"
                        defaultValue="#d97706"
                        placeholder="#d97706"
                        className="flex-1"
                      />
                    </div>
                    <p className="text-xs text-gray-500">Secondary accent color (gold)</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-4">Color Preview</h4>
                  <div className="flex gap-4">
                    <div className="flex-1 p-4 bg-primary text-primary-foreground rounded-lg">
                      <p className="font-medium">Primary</p>
                      <p className="text-sm opacity-90">Sample text</p>
                    </div>
                    <div className="flex-1 p-4 bg-accent text-accent-foreground rounded-lg">
                      <p className="font-medium">Accent</p>
                      <p className="text-sm opacity-90">Sample text</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full sm:w-auto">Save Colors</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Logo & Branding Assets</CardTitle>
                <CardDescription>
                  Upload your organization's logo and favicon
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label>Website Logo</Label>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center bg-gray-50">
                        <Upload className="h-8 w-8 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <Button variant="outline" size="sm">Upload Logo</Button>
                        <p className="text-xs text-gray-500 mt-2">
                          Recommended: PNG or SVG, 200x200px minimum
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label>Favicon</Label>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="w-16 h-16 border-2 border-dashed rounded-lg flex items-center justify-center bg-gray-50">
                        <Upload className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <Button variant="outline" size="sm">Upload Favicon</Button>
                        <p className="text-xs text-gray-500 mt-2">
                          Recommended: 32x32px or 64x64px
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full sm:w-auto">Save Assets</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Info Tab */}
          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Update your organization's contact details displayed on the website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="org-name">Organization Name</Label>
                  <Input
                    id="org-name"
                    defaultValue="MedWHOLE Alliance"
                    placeholder="Your organization name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="flex gap-2">
                    <Mail className="h-5 w-5 text-gray-400 mt-2.5" />
                    <Input
                      id="email"
                      type="email"
                      defaultValue="info@medwhole.org"
                      placeholder="contact@example.com"
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex gap-2">
                    <Phone className="h-5 w-5 text-gray-400 mt-2.5" />
                    <Input
                      id="phone"
                      type="tel"
                      defaultValue="+234 123 456 789"
                      placeholder="+234 123 456 789"
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <div className="flex gap-2">
                    <MapPin className="h-5 w-5 text-gray-400 mt-2.5" />
                    <Input
                      id="address"
                      defaultValue="Abuja, Nigeria"
                      placeholder="Your address"
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input
                      id="facebook"
                      placeholder="https://facebook.com/..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter/X</Label>
                    <Input
                      id="twitter"
                      placeholder="https://twitter.com/..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input
                      id="instagram"
                      placeholder="https://instagram.com/..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      placeholder="https://linkedin.com/..."
                    />
                  </div>
                </div>

                <Button className="w-full sm:w-auto">Save Contact Info</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* General Settings Tab */}
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure general website settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="site-title">Site Title</Label>
                  <Input
                    id="site-title"
                    defaultValue="MedWHOLE Alliance"
                    placeholder="Your site title"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="site-description">Site Description</Label>
                  <Input
                    id="site-description"
                    defaultValue="Making Wholeness A Reality"
                    placeholder="Brief description of your site"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    defaultValue="CATALYZING COMMUNITY TRANSFORMATION"
                    placeholder="Your organization's tagline"
                  />
                </div>

                <Button className="w-full sm:w-auto">Save Settings</Button>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-900">⚠️ Coming Soon</CardTitle>
                <CardDescription className="text-orange-700">
                  These settings will be fully functional soon. Currently in display mode.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
