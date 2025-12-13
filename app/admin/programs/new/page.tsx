"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Upload, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { uploadToImageKit } from "@/lib/imagekit"

export default function NewProgramPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    shortDescription: "",
    category: "health",
    objectives: [""],
    outcomes: [""],
    targetAudience: "",
    isActive: true,
    isFeatured: false,
  })

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  function handleTitleChange(title: string) {
    setFormData({
      ...formData,
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    })
  }

  function addObjective() {
    setFormData({ ...formData, objectives: [...formData.objectives, ""] })
  }

  function updateObjective(index: number, value: string) {
    const newObjectives = [...formData.objectives]
    newObjectives[index] = value
    setFormData({ ...formData, objectives: newObjectives })
  }

  function removeObjective(index: number) {
    setFormData({
      ...formData,
      objectives: formData.objectives.filter((_, i) => i !== index),
    })
  }

  function addOutcome() {
    setFormData({ ...formData, outcomes: [...formData.outcomes, ""] })
  }

  function updateOutcome(index: number, value: string) {
    const newOutcomes = [...formData.outcomes]
    newOutcomes[index] = value
    setFormData({ ...formData, outcomes: newOutcomes })
  }

  function removeOutcome(index: number) {
    setFormData({
      ...formData,
      outcomes: formData.outcomes.filter((_, i) => i !== index),
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      let imageUrl = ""
      if (imageFile) {
        imageUrl = await uploadToImageKit(
          imageFile,
          `program-${Date.now()}-${imageFile.name}`,
          "medwhole/programs"
        )
      }

      const response = await fetch("/api/admin/programs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          imageUrl,
          objectives: formData.objectives.filter((o) => o.trim()),
          outcomes: formData.outcomes.filter((o) => o.trim()),
        }),
      })

      if (!response.ok) throw new Error("Failed to create program")

      router.push("/admin/programs")
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create program")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/programs">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Add Program</h1>
          <p className="text-muted-foreground">Create a new program</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Program Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="image">Program Image</Label>
                <div className="flex items-center gap-4">
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      width={200}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-50 h-30 rounded-lg bg-gray-100 flex items-center justify-center">
                      <Upload className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="max-w-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Program Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="health">Health Services</SelectItem>
                    <SelectItem value="education">Education & Academy</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="advocacy">Advocacy</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shortDescription">Short Description *</Label>
                <Textarea
                  id="shortDescription"
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  rows={2}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Full Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={5}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetAudience">Target Audience</Label>
                <Input
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                  placeholder="e.g., Healthcare professionals, Students"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Objectives</Label>
                  <Button type="button" variant="outline" size="sm" onClick={addObjective}>
                    Add Objective
                  </Button>
                </div>
                {formData.objectives.map((objective, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={objective}
                      onChange={(e) => updateObjective(index, e.target.value)}
                      placeholder="Enter objective"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeObjective(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Outcomes</Label>
                  <Button type="button" variant="outline" size="sm" onClick={addOutcome}>
                    Add Outcome
                  </Button>
                </div>
                {formData.outcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={outcome}
                      onChange={(e) => updateOutcome(index, e.target.value)}
                      placeholder="Enter outcome"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeOutcome(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="isActive"
                    checked={formData.isActive}
                    onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                  />
                  <Label htmlFor="isActive">Active</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="isFeatured"
                    checked={formData.isFeatured}
                    onCheckedChange={(checked) => setFormData({ ...formData, isFeatured: checked })}
                  />
                  <Label htmlFor="isFeatured">Featured</Label>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" asChild>
                <Link href="/admin/programs">Cancel</Link>
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Creating..." : "Create Program"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
