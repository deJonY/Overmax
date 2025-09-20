import { Badge } from "@/components/ui/badge"
import { HelpCircle } from "lucide-react"

export function FAQHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-amber-50 dark:from-blue-950/20 dark:to-amber-950/20">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="px-4 py-2">
            <HelpCircle className="h-4 w-4 mr-2" />
            Savol-javoblar
          </Badge>

          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Tez-tez so'raladigan savollar</h1>

          <p className="text-xl text-muted-foreground text-pretty">
            OVERMAX haqida eng ko'p so'raladigan savollar va ularning batafsil javoblari
          </p>
        </div>
      </div>
    </section>
  )
}
