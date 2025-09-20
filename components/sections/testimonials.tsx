import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Aziza Karimova",
    course: "Frontend dasturlash",
    rating: 5,
    text: "OVERMAX da o'qish juda qiziqarli! Mentorlar juda yaxshi tushuntiradi va har doim yordam beradi. Endi men o'zim veb-sayt yarata olaman!",
    age: "16 yosh",
  },
  {
    name: "Bobur Alimov",
    course: "Sun'iy Intellekt",
    rating: 5,
    text: "AI kursi hayotimni o'zgartirdi. Endi men sun'iy intellekt bilan ishlashni bilaman va kelajakda bu sohada ishlashni xohlayman.",
    age: "17 yosh",
  },
  {
    name: "Malika Tosheva",
    course: "Ingliz tili",
    rating: 5,
    text: "Ingliz tili kursida juda ko'p narsalarni o'rgandim. Endi men inglizcha erkin gaplasha olaman va xorijiy kitoblarni o'qiyman.",
    age: "14 yosh",
  },
  {
    name: "Sardor Karimov",
    course: "Robototexnika",
    rating: 5,
    text: "Robot yasash juda qiziq! Darslar amaliy va tushunarli. Endi men o'zim robot yasay olaman va uni dasturlashni bilaman.",
    age: "12 yosh",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">O'quvchilarimiz fikri</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Bizning o'quvchilarimiz OVERMAX haqida nima deyishadi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200 dark:text-blue-800" />
                  <p className="text-muted-foreground italic pl-6">"{testimonial.text}"</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.age}</div>
                  </div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.course}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
