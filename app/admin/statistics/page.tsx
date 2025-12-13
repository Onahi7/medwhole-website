import { db } from "@/db"
import { statistics } from "@/db/schema"
import { desc } from "drizzle-orm"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit } from "lucide-react"

export default async function StatisticsPage() {
  const stats = await db.select().from(statistics).orderBy(desc(statistics.order))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Statistics</h1>
          <p className="text-muted-foreground">Manage impact statistics</p>
        </div>
        <Button asChild>
          <Link href="/admin/statistics/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Statistic
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Statistics ({stats.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Label</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Order</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stats.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-muted-foreground">
                    No statistics found. Add your first statistic!
                  </TableCell>
                </TableRow>
              ) : (
                stats.map((stat) => (
                  <TableRow key={stat.id}>
                    <TableCell className="font-medium">{stat.label}</TableCell>
                    <TableCell className="text-2xl font-bold">{stat.value}</TableCell>
                    <TableCell>
                      <Badge variant="outline">Impact</Badge>
                    </TableCell>
                    <TableCell>{stat.order || 0}</TableCell>
                    <TableCell>
                      {stat.isActive ? (
                        <Badge variant="default">Active</Badge>
                      ) : (
                        <Badge variant="secondary">Inactive</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/admin/statistics/${stat.id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
