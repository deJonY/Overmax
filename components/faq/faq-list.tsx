import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Qanday qilib ro'yxatdan o'tish mumkin?",
    answer:
      "Ro'yxatdan o'tish uchun bizning saytimizda ariza to'ldiring, to'g'ridan-to'g'ri bizga qo'ng'iroq qiling (+998 97 334 66 66) yoki Telegram orqali murojaat qiling (@overmax_education). Bizning mutaxassislarimiz siz bilan bog'lanib, barcha savollaringizga javob berishadi va sizga mos kursni tanlashda yordam beradi.",
  },
  {
    question: "Kurslar qancha davom etadi?",
    answer:
      "Kurslar davomiyligi 2 oydan 6 oygacha. Bu kurs turiga bog'liq. Masalan, SMM kursi 2 oy, ingliz tili kursi 6 oy davom etadi. Har bir kurs uchun aniq davomiylik kurs sahifasida ko'rsatilgan. Darslar haftasiga 2-3 marta o'tkaziladi.",
  },
  {
    question: "Yosh chegarasi bormi?",
    answer:
      "Ha, har bir kurs uchun yosh chegarasi bor. Eng kichik yoshdagi o'quvchilar 7 yoshdan (rassomchilik kursi), eng kattasi 18+ yoshgacha qabul qilinadi. Ko'pchilik IT kurslari 14+ yoshdan, til kurslari 8+ yoshdan boshlanadi. Aniq ma'lumot uchun kurs sahifasiga qarang yoki biz bilan bog'laning.",
  },
  {
    question: "To'lov qanday amalga oshiriladi?",
    answer:
      "To'lovni naqd, plastik karta orqali yoki bank o'tkazmasi orqali amalga oshirish mumkin. Shuningdek, oylik to'lov rejasi ham mavjud. Kurs boshlanishidan oldin 50% to'lov, qolgan qismini oyma-oy to'lash mumkin. Chegirmalar va aktsiyalar haqida ma'lumot olish uchun biz bilan bog'laning.",
  },
  {
    question: "Online darslar bormi?",
    answer:
      "Ha, ba'zi kurslar uchun online format mavjud. Ayniqsa, AI, Backend dasturlash va SMM kurslari online formatda ham o'tiladi. Online darslar Zoom platformasi orqali o'tkaziladi va barcha darslar yozib olinadi. Shuningdek, gibrid format ham mavjud - ba'zi darslar offline, ba'zilari online.",
  },
  {
    question: "Dars davomiyligi qancha?",
    answer:
      "Har bir dars 1.5-2 soat davom etadi. Darslar orasida 15-30 daqiqalik tanaffus bor. Haftasiga 2-3 marta dars o'tkaziladi. Aniq jadval kurs boshlanishidan oldin e'lon qilinadi va o'quvchilarning qulay vaqti hisobga olinadi.",
  },
  {
    question: "Sertifikat beriladimi?",
    answer:
      "Ha, kursni muvaffaqiyatli tugatgan barcha o'quvchilarga OVERMAX sertifikati beriladi. Sertifikat olish uchun barcha darslarning kamida 80%ida qatnashish va yakuniy loyihani taqdim etish kerak. Sertifikat elektron va qog'oz ko'rinishida beriladi.",
  },
  {
    question: "Ota-onalar uchun hisobot bormi?",
    answer:
      "Ha, biz ota-onalar bilan doimiy aloqada bo'lamiz. Har oyda o'quvchining o'sishi, davomligi va natijalari haqida batafsil hisobot yuboriladi. Shuningdek, ota-onalar istalgan vaqtda mentor bilan uchrashib, farzandining rivojlanishi haqida ma'lumot olishlari mumkin.",
  },
  {
    question: "Kursdan keyin ish topishda yordam berasizmi?",
    answer:
      "Ha, biz bitiruvchilarimizga ish topishda yordam beramiz. Bizning hamkor kompaniyalar bilan aloqamiz bor va eng yaxshi o'quvchilarni ularga tavsiya qilamiz. Shuningdek, CV yozish, suhbatga tayyorgarlik va portfolio yaratishda yordam beramiz.",
  },
  {
    question: "Guruh hajmi qancha?",
    answer:
      "Har bir guruhda maksimal 12-15 o'quvchi bo'ladi. Bu har bir o'quvchiga individual e'tibor berish va sifatli ta'lim olishni ta'minlaydi. Kichik guruhlar mentorlar bilan yaqin muloqot qilish imkonini beradi.",
  },
  {
    question: "Darslarni qoldirgan taqdirda nima bo'ladi?",
    answer:
      "Agar siz darsni qoldirsangiz, dars yozib olingan bo'ladi va keyinroq ko'rishingiz mumkin. Shuningdek, mentor bilan individual konsultatsiya olish imkoniyati ham bor. Muhim mavzularni tushunmay qolmaslik uchun qo'shimcha yordam beramiz.",
  },
]

export function FAQList() {
  return (
    <section className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
