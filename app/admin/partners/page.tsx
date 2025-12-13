import { db } from "@/db"
import { partners } from "@/db/schema"
import { desc } from "drizzle-orm"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit } from "lucide-react"
import Image from "next/image"

export default async function PartnersPage() {
  const allPartners = await db.select().from(partners).orderBy(desc(partners.order))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Partners</h1>
          <p className="text-muted-foreground">Manage organization partners</p>
        </div>
        <Button asChild>
          <Link href="/admin/partners/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Partner
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Partners ({allPartners.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Logo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allPartners.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    No partners found. Add your first partner!
                  </TableCell>
                </TableRow>
              ) : (
                allPartners.map((partner) => (
                  <TableRow key={partner.id}>
                    <TableCell>
                      {partner.logoUrl && (
                        <Image
                          src={partner.logoUrl}
                          alt={partner.name}
                          width={60}
                          height={40}
                          className="object-contain"
                        />
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{partner.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">Partner</Badge>
                    </TableCell>
                    <TableCell>
                      {partner.isActive ? (
                        <Badge variant="default">Active</Badge>
                      ) : (
                        <Badge variant="secondary">Inactive</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/admin/partners/${partner.id}`}>
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
