import { Card, CardContent } from "@/components/ui/card"

export function AboutMission() {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-blue-600 to-green-600 text-white">
          <CardContent className="p-8 lg:p-12 text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Bizning missiyamiz</h2>
            <p className="text-xl text-white/90 text-pretty">
              "Overmax — bu faqat kurs emas, balki farzandingiz kelajagi uchun mustahkam asos."
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Biz har bir o'quvchiga individual yondashuv, zamonaviy texnologiyalar va amaliy ko'nikmalar berish orqali
              ularni raqobatbardosh mutaxassis sifatida tayyorlaymiz.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
