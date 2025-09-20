import { Badge } from "@/components/ui/badge"
import { Award, Users, Target } from "lucide-react"

export function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-amber-50 dark:from-blue-950/20 dark:to-amber-950/20">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="px-4 py-2">
            Biz haqimizda
          </Badge>

          <h1 className="text-4xl lg:text-5xl font-bold text-balance">OVERMAX - Kelajak uchun ta'lim</h1>

          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Biz 2020-yilda tashkil etilgan zamonaviy ta'lim markazimiz. Bizning maqsadimiz - yoshlarni kelajak
            kasblariga tayyorlash va ularga zamonaviy ko'nikmalarni o'rgatish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg">Maqsadimiz</h3>
              <p className="text-muted-foreground">Har bir o'quvchini kelajak kasbi uchun tayyorlash</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg">Jamoamiz</h3>
              <p className="text-muted-foreground">Tajribali va professional mentorlar</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-lg">Sifatimiz</h3>
              <p className="text-muted-foreground">Yuqori sifatli ta'lim va amaliy tajriba</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
