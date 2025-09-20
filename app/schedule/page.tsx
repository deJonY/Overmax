import { ScheduleTable } from "@/components/schedule-table"
import { ScheduleFilters } from "@/components/schedule-filters"

export default function SchedulePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-balance">Dars jadvali</h1>
        <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
          Haftalik dars jadvali va barcha kurslar bo'yicha ma'lumot
        </p>
      </div>

      <div className="space-y-6">
        <ScheduleFilters />
        <ScheduleTable />
      </div>
    </div>
  )
}
