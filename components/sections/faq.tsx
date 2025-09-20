import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqs = [
  {
    question: "Qanday qilib ro'yxatdan o'tish mumkin?",
    answer:
      "Ro'yxatdan o'tish uchun bizning saytimizda ariza to'ldiring yoki to'g'ridan-to'g'ri bizga qo'ng'iroq qiling. Bizning mutaxassislarimiz siz bilan bog'lanib, barcha savollaringizga javob berishadi.",
  },
  {
    question: "Kurslar qancha davom etadi?",
    answer:
      "Kurslar davomiyligi 2 oydan 6 oygacha. Bu kurs turiga bog'liq. Masalan, SMM kursi 2 oy, ingliz tili kursi 6 oy davom etadi.",
  },
  {
    question: "Yosh chegarasi bormi?",
    answer:
      "Ha, har bir kurs uchun yosh chegarasi bor. Eng kichik yoshdagi o'quvchilar 7 yoshdan, eng kattasi 18+ yoshgacha qabul qilinadi. Aniq ma'lumot uchun kurs sahifasiga qarang.",
  },
  {
    question: "To'lov qanday amalga oshiriladi?",
    answer:
      "To'lovni naqd, plastik karta orqali yoki bank o'tkazmasi orqali amalga oshirish mumkin. Shuningdek, oylik to'lov rejasi ham mavjud.",
  },
  {
    question: "Online darslar bormi?",
    answer:
      "Ha, ba'zi kurslar uchun online format mavjud. Ayniqsa, AI, Backend dasturlash va SMM kurslari online formatda ham o'tiladi.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Tez-tez so'raladigan savollar</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Eng ko'p so'raladigan savollar va ularning javoblari
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/faq">Barcha savollarni ko'rish</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
