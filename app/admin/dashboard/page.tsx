import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Users,
  GraduationCap,
  Heart,
  Briefcase,
  TrendingUp,
  Calendar,
  FileText,
  BarChart3,
} from "lucide-react"

export default async function AdminDashboard() {
  const session = await auth()
  
  if (!session?.user) {
    redirect("/admin/login")
  }

  const menuItems = [
    {
      title: "Team Members",
      description: "Manage leadership team",
      icon: Users,
      href: "/admin/team",
      color: "text-blue-600",
    },
    {
      title: "Programs",
      description: "Manage Academy, Health & Consult programs",
      icon: GraduationCap,
      href: "/admin/programs",
      color: "text-green-600",
    },
    {
      title: "Impact Stories",
      description: "Add and manage success stories",
      icon: Heart,
      href: "/admin/impact",
      color: "text-red-600",
    },
    {
      title: "Statistics",
      description: "Update homepage statistics",
      icon: BarChart3,
      href: "/admin/statistics",
      color: "text-purple-600",
    },
    {
      title: "Events",
      description: "Manage upcoming events",
      icon: Calendar,
      href: "/admin/events",
      color: "text-orange-600",
    },
    {
      title: "Partners",
      description: "Manage partner organizations",
      icon: Briefcase,
      href: "/admin/partners",
      color: "text-indigo-600",
    },
    {
      title: "Job Postings",
      description: "Manage career opportunities",
      icon: FileText,
      href: "/admin/jobs",
      color: "text-teal-600",
    },
    {
      title: "Settings",
      description: "Admin settings & preferences",
      icon: TrendingUp,
      href: "/admin/settings",
      color: "text-gray-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">MedWHOLE Admin</h1>
              <p className="text-gray-600 mt-1">Manage your website content</p>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline">
                <Link href="/">View Site</Link>
              </Button>
              <Button variant="destructive">Logout</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gray-100 ${item.color}`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Total Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">0</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">0</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Active Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">0</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Job Openings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">0</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
