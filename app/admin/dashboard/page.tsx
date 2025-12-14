import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminHeader } from "@/components/admin-header"
import {
  Users,
  GraduationCap,
  Calendar,
  FileText,
  TrendingUp,
  ArrowUpRight,
  Activity,
} from "lucide-react"

export default async function AdminDashboard() {
  const session = await auth()
  
  if (!session?.user) {
    redirect("/admin/login")
  }

  const stats = [
    {
      title: "Total Programs",
      value: "0",
      change: "+0%",
      icon: GraduationCap,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Team Members",
      value: "2",
      change: "+0%",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Active Events",
      value: "0",
      change: "+0%",
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Job Openings",
      value: "0",
      change: "+0%",
      icon: FileText,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <>
      <AdminHeader 
        title="Dashboard" 
        subtitle="Welcome back! Here's what's happening with your website." 
      />

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`${stat.bgColor} ${stat.color} p-3 rounded-xl`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <QuickAction
                title="Add New Event"
                description="Create and publish a new event"
                href="/admin/events"
                icon={Calendar}
              />
              <QuickAction
                title="Manage Team"
                description="Add or update team members"
                href="/admin/team"
                icon={Users}
              />
              <QuickAction
                title="Update Statistics"
                description="Update homepage impact numbers"
                href="/admin/statistics"
                icon={TrendingUp}
              />
              <QuickAction
                title="Post Job Opening"
                description="Add new career opportunity"
                href="/admin/jobs"
                icon={FileText}
              />
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ActivityItem
                  action="System initialized"
                  time="Just now"
                  icon={Activity}
                />
                <ActivityItem
                  action="Admin account created"
                  time="Just now"
                  icon={Users}
                />
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-500 text-center">
                    Start managing your content to see activity here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Getting Started */}
        <Card className="border-2 border-dashed border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">🚀 Getting Started</h3>
            <p className="text-gray-600 mb-4">
              Complete these steps to set up your website:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                <span>Admin account created</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">1</div>
                <span>Add your team members</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">2</div>
                <span>Create your first event</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">3</div>
                <span>Update site settings and branding</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

function QuickAction({ 
  title, 
  description, 
  href, 
  icon: Icon 
}: { 
  title: string
  description: string
  href: string
  icon: any
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
    >
      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-primary" />
    </a>
  )
}

function ActivityItem({ action, time, icon: Icon }: { action: string; time: string; icon: any }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-gray-100 rounded-lg">
        <Icon className="h-4 w-4 text-gray-600" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{action}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  )
}
