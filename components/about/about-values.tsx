import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, Award, Target } from "lucide-react"

const values = [
  {
    icon: Code,
    title: "Amaliyot",
    description:
      "Har bir dars real loyihalar va amaliy mashg'ulotlar bilan birga keladi. Nazariya emas, amaliyot orqali o'rganish.",
  },
  {
    icon: Users,
    title: "Mentorlik",
    description:
      "Har bir o'quvchi uchun shaxsiy mentor va individual yo'l-yo'riq. Sizning muvaffaqiyatingiz - bizning muvaffaqiyatimiz.",
  },
  {
    icon: Award,
    title: "Hamjamiyat",
    description: "O'quvchilar, mentorlar va ota-onalar o'rtasida kuchli hamjamiyat va o'zaro yordam muhiti.",
  },
  {
    icon: Target,
    title: "Natijaga yo'naltirilganlik",
    description: "Har bir kurs aniq maqsad va natija bilan yakunlanadi. Portfolio, sertifikat va real ko'nikmalar.",
  },
]

export function AboutValues() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-balance">Bizning qadriyatlarimiz</h2>
        <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
          OVERMAX da biz quyidagi tamoyillar asosida ishlaymiz
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {values.map((value, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <value.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
