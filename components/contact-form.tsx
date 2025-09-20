"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

const courses = [
  "Sun'iy Intellekt (AI)",
  "Frontend + Grafik Dizayn",
  "Backend dasturlash",
  "Kiberxavfsizlik",
  "Ingliz tili",
  "Xitoy tili",
  "Rus tili",
  "Matematika",
  "Robototexnika",
  "Rassomchilik va Dizaynerlik",
  "SMM",
  "SMM + AI",
  "Libos dizayn",
  "Modellashtirish",
  "Umumiy savol",
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
    consent: false,
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.message || !formData.consent) {
      toast({
        title: "Xatolik",
        description: "Iltimos, majburiy maydonlarni to'ldiring va rozilik bering.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Muvaffaqiyat!",
      description: "Xabaringiz yuborildi! Tez orada bog'lanamiz.",
    })

    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "",
      message: "",
      consent: false,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bizga xabar yuboring</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (ixtiyoriy)</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label>Qiziqtirgan kurs</Label>
            <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Kursni tanlang (ixtiyoriy)" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Xabar *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Savolingizni yoki xabaringizni yozing..."
              rows={4}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
            />
            <Label htmlFor="consent" className="text-sm">
              Shaxsiy ma'lumotlarimni qayta ishlashga roziman *
            </Label>
          </div>

          <div className="text-xs text-muted-foreground">
            * Majburiy maydonlar. Sizning shaxsiy ma'lumotlaringiz{" "}
            <a href="/privacy" className="text-primary hover:underline">
              maxfiylik siyosati
            </a>{" "}
            ga muvofiq himoyalanadi.
          </div>

          <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
            Xabar yuborish
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
