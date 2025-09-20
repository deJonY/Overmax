import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User } from "lucide-react"

const team = [
  {
    name: "Aziz Karimov",
    role: "Frontend & AI Mentor",
    experience: "5+ yil tajriba",
    specialization: "React.js, Next.js, AI/ML",
    description: "Google va Microsoft kompaniyalarida ishlagan. 100+ loyiha ustida ishlaganlar.",
  },
  {
    name: "Malika Tosheva",
    role: "AI & Data Science Mentor",
    experience: "6+ yil tajriba",
    specialization: "Python, TensorFlow, Data Science",
    description: "Stanford universitetida AI bo'yicha magistr. 50+ AI loyiha yaratgan.",
  },
  {
    name: "Sardor Alimov",
    role: "Backend & Robotics Mentor",
    experience: "7+ yil tajriba",
    specialization: "Node.js, Python, Arduino",
    description: "Samsung va Intel kompaniyalarida senior developer. Robototexnika bo'yicha ekspert.",
  },
  {
    name: "John Smith",
    role: "English Language Mentor",
    experience: "10+ yil tajriba",
    specialization: "IELTS, TOEFL, Business English",
    description: "Cambridge sertifikatlangan o'qituvchi. 1000+ o'quvchini muvaffaqiyatga olib kelgan.",
  },
  {
    name: "Nigora Karimova",
    role: "Design Mentor",
    experience: "4+ yil tajriba",
    specialization: "UI/UX, Graphic Design, Art",
    description: "Adobe sertifikatlangan dizayner. 200+ kreativ loyiha yaratgan.",
  },
  {
    name: "Dilshod Rahimov",
    role: "Mathematics Mentor",
    experience: "8+ yil tajriba",
    specialization: "Algebra, Geometry, Olimpiada",
    description: "Matematika olimpiadasi bo'yicha respublika g'olibi. 300+ o'quvchini tayyorlagan.",
  },
]

export function AboutTeam() {
  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-balance">Bizning jamoamiz</h2>
        <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
          Professional va tajribali mentorlar bilan tanishing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all hover:-translate-y-1">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center text-white">
                  <User className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>

              <div className="space-y-2">
                <Badge variant="outline">{member.experience}</Badge>
                <p className="text-sm font-medium">{member.specialization}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
