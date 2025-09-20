import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, User } from "lucide-react"
import Link from "next/link"

const todaySchedule = [
  {
    time: "09:00 - 11:00",
    course: "Frontend dasturlash",
    level: "Boshlang'ich",
    room: "1-xona",
    mentor: "Aziz Karimov",
  },
  {
    time: "11:30 - 13:30",
    course: "Sun'iy Intellekt",
    level: "O'rta",
    room: "2-xona",
    mentor: "Malika Tosheva",
  },
  {
    time: "14:00 - 16:00",
    course: "Ingliz tili",
    level: "Boshlang'ich",
    room: "3-xona",
    mentor: "John Smith",
  },
  {
    time: "16:30 - 18:30",
    course: "Robototexnika",
    level: "Boshlang'ich",
    room: "Lab",
    mentor: "Sardor Alimov",
  },
]

export function SchedulePreview() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Bugungi dars jadvali</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Bugun o'tkaziladigan darslar va ularning vaqtlari
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4 mb-8">
            {todaySchedule.map((item, index) => (
              <Card key={index} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                        {item.course}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {item.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {item.room}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {item.mentor}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        {item.level}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/schedule">To'liq jadvalni ko'rish</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
