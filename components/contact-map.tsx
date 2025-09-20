import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"

export function ContactMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Bizning joylashuvimiz
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center space-y-2">
            <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
            <p className="text-muted-foreground">Xarita yuklanmoqda...</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-semibold">OVERMAX O'quv Markazi</div>
          <div className="text-muted-foreground">Toshkent shahar</div>
        </div>

        <Button asChild className="w-full bg-transparent" variant="outline">
          <a href="https://yandex.uz/maps/?ll=69.135988,41.306789&z=16" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Yandex Xaritada ochish
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
