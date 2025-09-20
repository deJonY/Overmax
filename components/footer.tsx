import Link from "next/link"
import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">OVERMAX</div>
            <p className="text-sm text-muted-foreground">Kelajak kasblariga tayyorlaydigan zamonaviy markaz</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Tezkor havolalar</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/courses" className="text-sm text-muted-foreground hover:text-primary">
                Kurslar
              </Link>
              <Link href="/schedule" className="text-sm text-muted-foreground hover:text-primary">
                Jadval
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                Biz haqimizda
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                Savol-javoblar
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Aloqa</h3>
            <div className="space-y-2">
              <a
                href="tel:+998973346666"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +998 97 334 66 66
              </a>
              <a
                href="https://t.me/overmax_education"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Telegram
              </a>
              <a
                href="https://www.instagram.com/overmax_ai?igsh=MXhoNGd1bnRqNHozZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="font-semibold">Manzil</h3>
            <a
              href="https://yandex.uz/maps/?ll=69.135988,41.306789&z=16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <MapPin className="h-4 w-4 mt-0.5" />
              Toshkent shahar
            </a>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 OVERMAX O'quv Markazi. Barcha huquqlar himoyalangan.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Maxfiylik siyosati
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Foydalanish shartlari
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
