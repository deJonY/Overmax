import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="px-4 py-2">
            <Shield className="h-4 w-4 mr-2" />
            Maxfiylik siyosati
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Maxfiylik siyosati</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            OVERMAX O'quv Markazi maxfiylik siyosati va shaxsiy ma'lumotlarni himoya qilish tamoyillari
          </p>
          <p className="text-sm text-muted-foreground">Oxirgi yangilanish: 2024-yil 1-yanvar</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Umumiy ma'lumotlar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                OVERMAX O'quv Markazi sizning shaxsiy ma'lumotlaringizni himoya qilishni jiddiy qabul qiladi. Ushbu
                maxfiylik siyosati bizning veb-saytimiz va xizmatlarimizdan foydalanish jarayonida qanday ma'lumotlar
                to'planishi, ishlatilishi va himoya qilinishi haqida ma'lumot beradi.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. To'planadigan ma'lumotlar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Biz quyidagi turdagi ma'lumotlarni to'playmiz:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Shaxsiy ma'lumotlar: ism, familiya, telefon raqami, email manzili</li>
                <li>Ta'lim ma'lumotlari: qiziqtirgan kurslar, daraja, yosh</li>
                <li>Texnik ma'lumotlar: IP manzil, brauzer turi, qurilma ma'lumotlari</li>
                <li>Foydalanish ma'lumotlari: saytda o'tkazilgan vaqt, ko'rilgan sahifalar</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Ma'lumotlardan foydalanish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Sizning ma'lumotlaringiz quyidagi maqsadlarda ishlatiladi:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Kurs ro'yxatdan o'tish va ta'lim xizmatlarini taqdim etish</li>
                <li>Siz bilan bog'lanish va konsultatsiya berish</li>
                <li>Xizmatlarimizni yaxshilash va yangi kurslar haqida xabar berish</li>
                <li>Statistik tahlil va hisobotlar tayyorlash</li>
                <li>Qonuniy talablarni bajarish</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Ma'lumotlarni himoya qilish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Biz sizning shaxsiy ma'lumotlaringizni himoya qilish uchun zamonaviy xavfsizlik choralarini qo'llaymiz:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL shifrlash texnologiyasi</li>
                <li>Xavfsiz serverlar va ma'lumotlar bazasi</li>
                <li>Cheklangan kirish huquqlari</li>
                <li>Muntazam xavfsizlik auditlari</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Ma'lumotlarni uchinchi shaxslarga berish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Biz sizning shaxsiy ma'lumotlaringizni uchinchi shaxslarga sotmaymiz, ijaraga bermaymiz yoki
                almashmaymiz. Ma'lumotlar faqat quyidagi hollarda bo'lishilishi mumkin:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sizning aniq roziligingiz bilan</li>
                <li>Qonuniy talablar asosida</li>
                <li>Xizmat ko'rsatuvchi hamkorlar bilan (faqat kerakli hajmda)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Sizning huquqlaringiz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Siz quyidagi huquqlarga egasiz:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>O'z ma'lumotlaringizni ko'rish va o'zgartirish</li>
                <li>Ma'lumotlarni o'chirish talab qilish</li>
                <li>Ma'lumotlarni qayta ishlashga e'tiroz bildirish</li>
                <li>Ma'lumotlarni ko'chirish</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Cookie fayllar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Bizning saytimiz cookie fayllardan foydalanadi. Bu fayllar saytning ishlashini yaxshilash va sizga
                moslashtirilgan tajriba taqdim etish uchun ishlatiladi. Siz brauzer sozlamalarida cookie fayllarni
                o'chirib qo'yishingiz mumkin.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Bog'lanish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Maxfiylik siyosati bo'yicha savollaringiz bo'lsa, biz bilan bog'laning:</p>
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
