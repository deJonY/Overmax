"use client" // Added client directive for useI18n hook

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()
  const badges = ["AI", "Frontend", "Backend", "Til kurslari", "Robototexnika"]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-amber-50 dark:from-blue-950/20 dark:to-amber-950/20">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 ps-30">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance">{t("hero.title")}</h1>
              <p className="text-xl text-muted-foreground text-pretty">{t("hero.subtitle")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">{t("hero.cta_primary")}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/courses">{t("hero.cta_secondary")}</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="px-3 py-1">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right content - Mascot */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/mascot.jpg"
                alt="OVERMAX Mascot"
                width={400}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {t("hero.slogan")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
