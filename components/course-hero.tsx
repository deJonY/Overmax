import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, MapPin } from "lucide-react"
import type { Course } from "@/lib/courses"

interface CourseHeroProps {
  course: Course
}

export function CourseHero({ course }: CourseHeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-amber-50 dark:from-blue-950/20 dark:to-amber-950/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge variant="outline">{course.category}</Badge>
            <Badge variant="secondary">{course.level}</Badge>
            <Badge variant="outline">{course.age}</Badge>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-balance">{course.title}</h1>

          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">{course.fullDesc}</p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {course.students} o'quvchi
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {course.format}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {course.rating} reyting
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
