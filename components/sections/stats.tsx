import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Award, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10+",
    label: "Tajribali ustoz",
    description: "Professional mentorlar",
  },
  {
    icon: BookOpen,
    value: "12+",
    label: "Kurs yo'nalishi",
    description: "Turli sohalar bo'yicha",
  },
  {
    icon: Award,
    value: "100+",
    label: "Muvaffaqiyatli o'quvchi",
    description: "Bitiruvchilarimiz",
  },
  {
    icon: Star,
    value: "4.8",
    label: "O'rtacha reyting",
    description: "O'quvchilar bahosi",
  },
]

export function Stats() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Bizning natijalarimiz</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Raqamlar orqali OVERMAX muvaffaqiyati
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
                  <div className="font-semibold">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
