import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BookOpen } from "lucide-react"
import type { Course } from "@/lib/courses"

interface CourseProgramProps {
  course: Course
}

export function CourseProgram({ course }: CourseProgramProps) {
  return (
    <div className="space-y-8">
      {/* Program */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Kurs dasturi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {course.program.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">
                  {index + 1}
                </div>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* What you'll learn */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Nima o'rganasiz
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {course.whatYouLearn.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
