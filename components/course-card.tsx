import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, MapPin } from "lucide-react"
import Link from "next/link"
import type { Course } from "@/lib/courses"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all hover:-translate-y-1">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline">{course.category}</Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {course.rating}
          </div>
        </div>
        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
          {course.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-3">{course.shortDesc}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {course.students}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {course.format}
          </div>
          <Badge variant="secondary" className="justify-center">
            {course.level}
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <Badge variant="outline">{course.age}</Badge>
          <div className="text-right">
            <div className="text-lg font-semibold text-blue-600">{course.priceFrom.toLocaleString()} so'm</div>
            <div className="text-xs text-muted-foreground">oyiga</div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-transparent" variant="outline" asChild>
          <Link href={`/course/${course.slug}`}>Batafsil</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
