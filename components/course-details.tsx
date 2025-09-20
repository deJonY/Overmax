import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, User, MapPin, Star } from "lucide-react"
import type { Course } from "@/lib/courses"

interface CourseDetailsProps {
  course: Course
}

export function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Kurs haqida</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Davomiyligi</span>
            </div>
            <span className="font-semibold">{course.duration}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Format</span>
            </div>
            <Badge variant="outline">{course.format}</Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="text-sm">Mentor</span>
            </div>
            <span className="font-semibold">{course.mentor}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span className="text-sm">Reyting</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{course.rating}</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-blue-600">{course.priceFrom.toLocaleString()} so'm</div>
            <div className="text-sm text-muted-foreground">oyiga</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-semibold">Boshlanish sanalar</span>
          </div>
          <div className="space-y-1">
            {course.startDates.map((date, index) => (
              <div key={index} className="text-sm text-muted-foreground">
                {new Date(date).toLocaleDateString("uz-UZ", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
