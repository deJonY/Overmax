import { Hero } from "@/components/sections/hero"
import { CoursesPreview } from "@/components/sections/courses-preview"
import { WhyOvermax } from "@/components/sections/why-overmax"
import { Stats } from "@/components/sections/stats"
import { SchedulePreview } from "@/components/sections/schedule-preview"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { LeadCapture } from "@/components/sections/lead-capture"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CoursesPreview />
      <WhyOvermax />
      <Stats />
      <SchedulePreview />
      <Testimonials />
      <FAQ />
      <LeadCapture />
    </div>
  )
}
