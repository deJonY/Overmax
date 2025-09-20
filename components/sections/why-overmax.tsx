import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, Award, Clock, BarChart, Heart } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Amaliy darslar",
    description: "Har bir dars real loyihalar ustida ishlash bilan birga keladi",
  },
  {
    icon: Award,
    title: "Tajriba loyihalar",
    description: "Portfolio uchun professional darajadagi loyihalar yarating",
  },
  {
    icon: Users,
    title: "Mentorlik",
    description: "Tajribali mentorlar tomonidan shaxsiy yo'l-yo'riq",
  },
  {
    icon: BarChart,
    title: "Ota-ona uchun hisobot",
    description: "Farzandingizning o'sishini kuzatib boring",
  },
  {
    icon: Clock,
    title: "Moslashuvchan jadval",
    description: "Sizga qulay vaqtda dars olish imkoniyati",
  },
  {
    icon: Heart,
    title: "Hamjamiyat",
    description: "O'quvchilar va mentorlar bilan kuchli aloqa",
  },
]

export function WhyOvermax() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Nima uchun OVERMAX?</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Bizning afzalliklarimiz va o'quvchilarimizga taqdim etadigan imkoniyatlar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
