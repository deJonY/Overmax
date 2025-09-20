import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

export function FAQContact() {
  return (
    <section className="bg-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Savolingizga javob topa olmadingizmi?</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Biz bilan bog'laning va bepul konsultatsiya oling
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mx-auto">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Qo'ng'iroq qiling</div>
                    <div className="text-sm text-muted-foreground">+998 97 334 66 66</div>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mx-auto">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <div className="text-sm text-muted-foreground">@overmax_education</div>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/20 rounded-xl flex items-center justify-center mx-auto">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Xabar yuboring</div>
                    <div className="text-sm text-muted-foreground">Aloqa sahifasi orqali</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Biz bilan bog'laning</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
