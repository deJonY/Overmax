"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Menu, X } from "lucide-react"
import { useState } from "react"
import { EnhancedThemeToggle } from "@/components/enhanced-theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useI18n()

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.courses"), href: "/courses" },
    { name: t("nav.schedule"), href: "/schedule" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+998973346666" className="flex items-center gap-2 hover:opacity-80">
                <Phone className="h-4 w-4" />
                +998 97 334 66 66
              </a>
              <a
                href="https://t.me/overmax_education"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80"
              >
                <MessageCircle className="h-4 w-4" />
                Telegram
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <EnhancedThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">OVERMAX</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild>
              <Link href="/contact">{t("nav.register")}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <EnhancedThemeToggle />
                <LanguageSwitcher />
              </div>
              <Button asChild className="w-full">
                <Link href="/contact">{t("nav.register")}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
