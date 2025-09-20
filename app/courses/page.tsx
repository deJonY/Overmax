import { CourseGrid } from "@/components/course-grid"
import { CourseFilters } from "@/components/course-filters"
import { courses } from "@/lib/courses"

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-balance">Bizning kurslarimiz</h1>
        <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
          Kelajak kasblariga tayyorlaydigan zamonaviy kurslar
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-80">
          <CourseFilters />
        </aside>
        <main className="flex-1">
          <CourseGrid courses={courses} />
        </main>
      </div>
    </div>
  )
}
