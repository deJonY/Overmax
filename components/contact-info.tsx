import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Instagram, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aloqa ma'lumotlari</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Phone className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="font-semibold">Telefon</div>
              <a href="tel:+998973346666" className="text-muted-foreground hover:text-primary">
                +998 97 334 66 66
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="font-semibold">Telegram</div>
              <a
                href="https://t.me/overmax_education"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                @overmax_education
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center">
              <Instagram className="h-5 w-5 text-pink-600" />
            </div>
            <div>
              <div className="font-semibold">Instagram</div>
              <a
                href="https://www.instagram.com/overmax_ai?igsh=MXhoNGd1bnRqNHozZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                @overmax_ai
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/20 rounded-lg flex items-center justify-center">
              <MapPin className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <div className="font-semibold">Manzil</div>
              <div className="text-muted-foreground">Toshkent shahar</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Clock className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <div className="font-semibold">Ish vaqti</div>
              <div className="text-muted-foreground">Dush-Yak: 09:00 - 19:00</div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t space-y-3">
          <h3 className="font-semibold">Tezkor aloqa</h3>
          <div className="flex flex-col gap-2">
            <Button asChild className="justify-start bg-transparent" variant="outline">
              <a href="tel:+998973346666">
                <Phone className="h-4 w-4 mr-2" />
                Qo'ng'iroq qilish
              </a>
            </Button>
            <Button asChild className="justify-start bg-transparent" variant="outline">
              <a href="https://t.me/overmax_education" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Telegram orqali yozish
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
