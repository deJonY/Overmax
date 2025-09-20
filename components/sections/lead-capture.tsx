"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
]

export function LeadCapture() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    consent: false,
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.course || !formData.consent) {
      toast({
        title: "Xatolik",
        description: "Iltimos, barcha maydonlarni to'ldiring va rozilik bering.",
        variant: "destructive",
      })
      return
    }

    // Simulate form submission
    toast({
      title: "Muvaffaqiyat!",
      description: "Arizangiz qabul qilindi! Tez orada bog'lanamiz.",
    })

    // Reset form
    setFormData({
      name: "",
      phone: "",
      course: "",
      consent: false,
    })

    // Open Telegram deep link
    window.open("https://t.me/overmax_education", "_blank")
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl lg:text-3xl text-white">Bepul konsultatsiya oling!</CardTitle>
              <p className="text-white/90">Ma'lumot olish va ro'yxatdan o'tish uchun formani to'ldiring</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Ism familiya *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ismingizni kiriting"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Telefon raqam *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+998 XX XXX XX XX"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Qiziqtirgan kurs *</Label>
                  <Select
                    value={formData.course}
                    onValueChange={(value) => setFormData({ ...formData, course: value })}
                  >
                    <SelectTrigger className="bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Kursni tanlang" />
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

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                    className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                  />
                  <Label htmlFor="consent" className="text-sm text-white/90">
                    Shaxsiy ma'lumotlarimni qayta ishlashga roziman *
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full bg-white text-blue-600 hover:bg-white/90">
                  Ariza yuborish
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
