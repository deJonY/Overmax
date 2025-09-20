"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function ScheduleFilters() {
  const [selectedCourse, setSelectedCourse] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedRoom, setSelectedRoom] = useState("all")

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Kurs</Label>
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger>
                <SelectValue placeholder="Kursni tanlang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha kurslar</SelectItem>
                <SelectItem value="ai">Sun'iy Intellekt</SelectItem>
                <SelectItem value="frontend">Frontend dasturlash</SelectItem>
                <SelectItem value="backend">Backend dasturlash</SelectItem>
                <SelectItem value="english">Ingliz tili</SelectItem>
                <SelectItem value="robotics">Robototexnika</SelectItem>
                <SelectItem value="design">Dizayn</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Daraja</Label>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Darajani tanlang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha darajalar</SelectItem>
                <SelectItem value="beginner">Boshlang'ich</SelectItem>
                <SelectItem value="intermediate">O'rta</SelectItem>
                <SelectItem value="advanced">Yuqori</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Xona</Label>
            <Select value={selectedRoom} onValueChange={setSelectedRoom}>
              <SelectTrigger>
                <SelectValue placeholder="Xonani tanlang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barcha xonalar</SelectItem>
                <SelectItem value="room1">1-xona</SelectItem>
                <SelectItem value="room2">2-xona</SelectItem>
                <SelectItem value="room3">3-xona</SelectItem>
                <SelectItem value="lab">Laboratoriya</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
