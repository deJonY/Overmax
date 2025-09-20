import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"
import Link from "next/link"

const featuredCourses = [
  {
    id: 1,
    title: "Sun'iy Intellekt (AI)",
    description: "Zamonaviy AI texnologiyalari va machine learning asoslari",
    duration: "3 oy",
    price: "1 200 000",
    level: "O'rta",
    category: "IT",
    age: "14+",
    rating: 4.9,
    students: 45,
  },
  {
    id: 2,
    title: "Frontend + Grafik Dizayn",
    description: "Web dasturlash va zamonaviy dizayn asoslari",
    duration: "4 oy",
    price: "900 000",
    level: "Boshlang'ich",
    category: "IT/Dizayn",
    age: "14+",
    rating: 4.8,
    students: 67,
  },
  {
    id: 3,
    title: "Backend dasturlash",
    description: "Server tomonidagi dasturlash va ma'lumotlar bazasi",
    duration: "4 oy",
    price: "1 000 000",
    level: "Boshlang'ich",
    category: "IT",
    age: "14+",
    rating: 4.9,
    students: 52,
  },
  {
    id: 4,
    title: "Ingliz tili",
    description: "Amaliy ingliz tili kursi barcha darajalar uchun",
    duration: "6 oy",
    price: "700 000",
    level: "Boshlang'ich",
    category: "Til",
    age: "8+",
    rating: 4.7,
    students: 89,
  },
  {
    id: 5,
    title: "Robototexnika",
    description: "Robotlar yaratish va dasturlash asoslari",
    duration: "4 oy",
    price: "1 100 000",
    level: "Boshlang'ich",
    category: "Robotika",
    age: "10+",
    rating: 4.8,
    students: 34,
  },
  {
    id: 6,
    title: "Kiberxavfsizlik",
    description: "Axborot xavfsizligi va himoya usullari",
    duration: "3 oy",
    price: "1 300 000",
    level: "O'rta",
    category: "IT",
    age: "16+",
    rating: 4.9,
    students: 28,
  },
  {
    id: 7,
    title: "SMM + AI",
    description: "Sun'iy intellekt yordamida ijtimoiy tarmoqlar marketingi",
    duration: "2 oy",
    price: "1 000 000",
    level: "O'rta",
    category: "Marketing",
    age: "16+",
    rating: 4.6,
    students: 41,
  },
  {
    id: 8,
    title: "Xitoy tili",
    description: "Zamonaviy Xitoy tili kursi boshlang'ich darajadan",
    duration: "6 oy",
    price: "700 000",
    level: "Boshlang'ich",
    category: "Til",
    age: "10+",
    rating: 4.5,
    students: 23,
  },
]

export function CoursesPreview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Mashhur kurslarimiz</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Eng so'ralgan va samarali kurslarimiz bilan tanishing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{course.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{course.title}</CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{course.level}</Badge>
                  <Badge variant="outline">{course.age}</Badge>
                </div>

                <div className="text-lg font-semibold text-blue-600">{course.price.toLocaleString()} so'm/oy dan</div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href={`/course/${course.title.toLowerCase().replace(/\s+/g, "-")}`}>Batafsil</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/courses">Barcha kurslarni ko'rish</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
