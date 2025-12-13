import { db } from "@/db"
import { programs } from "@/db/schema"
import { desc } from "drizzle-orm"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit } from "lucide-react"
import Image from "next/image"

export default async function ProgramsPage() {
  const allPrograms = await db.select().from(programs).orderBy(desc(programs.createdAt))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Programs</h1>
          <p className="text-muted-foreground">Manage your organization's programs</p>
        </div>
        <Button asChild>
          <Link href="/admin/programs/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Program
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Programs ({allPrograms.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allPrograms.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-muted-foreground">
                    No programs found. Add your first program!
                  </TableCell>
                </TableRow>
              ) : (
                allPrograms.map((program) => (
                  <TableRow key={program.id}>
                    <TableCell>
                      {program.imageUrl ? (
                        <Image
                          src={program.imageUrl}
                          alt={program.title}
                          width={60}
                          height={40}
                          className="rounded object-cover"
                        />
                      ) : (
                        <div className="w-15 h-10 rounded bg-gray-200" />
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{program.title}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{program.category}</Badge>
                    </TableCell>
                    <TableCell>
                      {program.isActive ? (
                        <Badge variant="default">Active</Badge>
                      ) : (
                        <Badge variant="secondary">Inactive</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      -
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/admin/programs/${program.id}`}>
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
