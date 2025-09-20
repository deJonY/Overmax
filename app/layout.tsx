import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/lib/i18n"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "OVERMAX O'quv Markazi - Kelajak kasblariga tayyorlaydigan zamonaviy markaz",
  description:
    "OVERMAX O'quv Markazi - AI, Frontend, Backend, Tillar va Robototexnika bo'yicha zamonaviy kurslar. Kelajak sari birga qadam tashlaymiz.",
  keywords: "OVERMAX, o'quv markazi, AI kurslari, dasturlash, frontend, backend, ingliz tili, robototexnika",
  openGraph: {
    title: "OVERMAX O'quv Markazi",
    description: "Kelajak kasblariga tayyorlaydigan zamonaviy markaz",
    type: "website",
    locale: "uz_UZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "OVERMAX O'quv Markazi",
    description: "Kelajak kasblariga tayyorlaydigan zamonaviy markaz",
  },
  generator: "OVERMAX O'quv Markazi",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <I18nProvider>
            <Suspense fallback={null}>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <Toaster />
            </Suspense>
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
