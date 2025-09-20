import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-balance">Biz bilan bog'laning</h1>
        <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
          Savollaringiz bormi? Biz bilan bog'laning va bepul konsultatsiya oling
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <ContactInfo />
          <ContactMap />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
