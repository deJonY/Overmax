import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="px-4 py-2">
            <FileText className="h-4 w-4 mr-2" />
            Foydalanish shartlari
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Foydalanish shartlari</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            OVERMAX O'quv Markazi xizmatlaridan foydalanish shartlari va qoidalari
          </p>
          <p className="text-sm text-muted-foreground">Oxirgi yangilanish: 2024-yil 1-yanvar</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Umumiy qoidalar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                OVERMAX O'quv Markazi veb-saytidan va xizmatlaridan foydalanish orqali siz ushbu foydalanish shartlariga
                rozilik bildirasiz. Agar siz ushbu shartlarga rozi bo'lmasangiz, iltimos, saytdan foydalanmang.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Xizmatlar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>OVERMAX O'quv Markazi quyidagi xizmatlarni taqdim etadi:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IT sohasida professional kurslar</li>
                <li>Chet tillarini o'rgatish kurslari</li>
                <li>Robototexnika va dizayn kurslari</li>
                <li>Online va offline ta'lim formatlari</li>
                <li>Individual mentorlik xizmatlari</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Ro'yxatdan o'tish va to'lov</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Kurslarga ro'yxatdan o'tish uchun:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To'liq va to'g'ri ma'lumotlar berish kerak</li>
                <li>Kurs narxining kamida 50%ini oldindan to'lash kerak</li>
                <li>Qolgan summani belgilangan muddatlarda to'lash kerak</li>
                <li>To'lov qabuli bilan shartnoma kuchga kiradi</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. O'quvchi majburiyatlari</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>O'quvchi quyidagilarga majbur:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Darslarda muntazam qatnashish (kamida 80%)</li>
                <li>Berilgan vazifalarni o'z vaqtida bajarish</li>
                <li>Boshqa o'quvchi va mentorlarni hurmat qilish</li>
                <li>Kurs materiallarini noto'g'ri maqsadlarda ishlatmaslik</li>
                <li>Markaz qoidalariga rioya qilish</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Markaz majburiyatlari</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>OVERMAX O'quv Markazi quyidagilarni ta'minlaydi:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sifatli ta'lim xizmatlari</li>
                <li>Tajribali mentorlar bilan darslar</li>
                <li>Zamonaviy o'quv materiallari</li>
                <li>Kurs yakunida sertifikat berish</li>
                <li>Texnik yordam va qo'llab-quvvatlash</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Bekor qilish va qaytarish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Kursni bekor qilish shartlari:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Kurs boshlanishidan 3 kun oldin - to'liq qaytarish</li>
                <li>Kurs boshlanganidan keyin 1 hafta ichida - 50% qaytarish</li>
                <li>1 haftadan keyin - qaytarish yo'q</li>
                <li>Markaz tomonidan bekor qilish - to'liq qaytarish</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Intellektual mulk</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Barcha kurs materiallari, video darslar va boshqa kontent OVERMAX O'quv Markazining intellektual mulki
                hisoblanadi. Ularni ruxsatsiz nusxalash, tarqatish yoki sotish taqiqlanadi.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Javobgarlik cheklovi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                OVERMAX O'quv Markazi o'quvchining kurs yakunidagi natijalari uchun to'liq javobgar emas. Natija
                o'quvchining faolligi, qobiliyati va mehnatiga bog'liq.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Nizolarni hal qilish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Barcha nizolar birinchi navbatda muzokaralar yo'li bilan hal qilinadi. Kelishuvga erishilmagan taqdirda,
                nizolar O'zbekiston Respublikasi qonunlariga muvofiq hal qilinadi.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Bog'lanish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Foydalanish shartlari bo'yicha savollaringiz bo'lsa, biz bilan bog'laning:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Telefon: +998 97 334 66 66</li>
                <li>Telegram: @overmax_education</li>
                <li>Manzil: Toshkent shahar</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
