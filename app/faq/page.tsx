import { FAQHero } from "@/components/faq/faq-hero"
import { FAQList } from "@/components/faq/faq-list"
import { FAQContact } from "@/components/faq/faq-contact"

export default function FAQPage() {
  return (
    <div className="space-y-16">
      <FAQHero />
      <FAQList />
      <FAQContact />
    </div>
  )
}
