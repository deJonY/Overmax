import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutValues } from "@/components/about/about-values"
import { AboutTeam } from "@/components/about/about-team"
import { AboutStats } from "@/components/about/about-stats"

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
    </div>
  )
}
