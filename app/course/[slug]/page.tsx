import { notFound } from "next/navigation"
import { getCourseBySlug } from "@/lib/courses"
import { CourseHero } from "@/components/course-hero"
import { CourseProgram } from "@/components/course-program"
import { CourseDetails } from "@/components/course-details"
import { CourseApplication } from "@/components/course-application"

interface CoursePageProps {
  params: {
    slug: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getCourseBySlug(params.slug)

  if (!course) {
    notFound()
  }

  return (
    <div className="space-y-12">
      <CourseHero course={course} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CourseProgram course={course} />
          </div>
          <div className="space-y-6">
            <CourseDetails course={course} />
            <CourseApplication course={course} />
          </div>
        </div>
      </div>
    </div>
  )
}
