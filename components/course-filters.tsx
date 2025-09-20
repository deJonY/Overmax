"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

const categories = [
  { id: "all", label: "Barchasi" },
  { id: "IT", label: "IT" },
  { id: "Dizayn", label: "Dizayn" },
  { id: "Til", label: "Tillar" },
  { id: "Robotika", label: "Robototexnika" },
  { id: "Marketing", label: "Marketing" },
  { id: "Fan", label: "Fanlar" },
]

const levels = [
  { id: "all", label: "Barchasi" },
  { id: "boshlang'ich", label: "Boshlang'ich" },
  { id: "o'rta", label: "O'rta" },
  { id: "yuqori", label: "Yuqori" },
]

const ages = [
  { id: "all", label: "Barchasi" },
  { id: "7-13", label: "7-13 yosh" },
  { id: "14+", label: "14+ yosh" },
]

const formats = [
  { id: "all", label: "Barchasi" },
  { id: "offline", label: "Offline" },
  { id: "online", label: "Online" },
]

export function CourseFilters() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedAge, setSelectedAge] = useState("all")
  const [selectedFormat, setSelectedFormat] = useState("all")

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Filtrlar</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold">Yo'nalish</Label>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={selectedCategory === category.id}
                  onCheckedChange={() => setSelectedCategory(category.id)}
                />
                <Label htmlFor={`category-${category.id}`} className="text-sm font-normal">
                  {category.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Level Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold">Daraja</Label>
          <div className="space-y-2">
            {levels.map((level) => (
              <div key={level.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`level-${level.id}`}
                  checked={selectedLevel === level.id}
                  onCheckedChange={() => setSelectedLevel(level.id)}
                />
                <Label htmlFor={`level-${level.id}`} className="text-sm font-normal">
                  {level.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Age Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold">Yosh</Label>
          <div className="space-y-2">
            {ages.map((age) => (
              <div key={age.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`age-${age.id}`}
                  checked={selectedAge === age.id}
                  onCheckedChange={() => setSelectedAge(age.id)}
                />
                <Label htmlFor={`age-${age.id}`} className="text-sm font-normal">
                  {age.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Format Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold">Format</Label>
          <div className="space-y-2">
            {formats.map((format) => (
              <div key={format.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`format-${format.id}`}
                  checked={selectedFormat === format.id}
                  onCheckedChange={() => setSelectedFormat(format.id)}
                />
                <Label htmlFor={`format-${format.id}`} className="text-sm font-normal">
                  {format.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
