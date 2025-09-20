"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import type { Course } from "@/lib/courses"

interface CourseApplicationProps {
  course: Course
}

export function CourseApplication({ course }: CourseApplicationProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    startDate: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.startDate) {
      toast({
        title: "Xatolik",
        description: "Iltimos, barcha maydonlarni to'ldiring.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Muvaffaqiyat!",
      description: "Arizangiz qabul qilindi! Tez orada bog'lanamiz.",
    })

    setFormData({
      name: "",
      phone: "",
      startDate: "",
    })

    // Open Telegram deep link
    window.open("https://t.me/overmax_education", "_blank")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ro'yxatdan o'tish</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ism familiya *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ismingizni kiriting"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefon raqam *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+998 XX XXX XX XX"
            />
          </div>

          <div className="space-y-2">
            <Label>Boshlanish sanasi *</Label>
            <Select
              value={formData.startDate}
              onValueChange={(value) => setFormData({ ...formData, startDate: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sanani tanlang" />
              </SelectTrigger>
              <SelectContent>
                {course.startDates.map((date) => (
                  <SelectItem key={date} value={date}>
                    {new Date(date).toLocaleDateString("uz-UZ", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Ariza yuborish
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
