import { Inter } from "next/font/google"
import "../globals.css"
import { AdminSidebar } from "@/components/admin-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MedWHOLE Admin",
  description: "Admin dashboard for MedWHOLE Alliance",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen overflow-hidden bg-gray-50">
          <AdminSidebar />
          <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
