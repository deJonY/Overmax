import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, User } from "lucide-react"

const scheduleData = [
  {
    day: "Dushanba",
    sessions: [
      {
        time: "09:00 - 11:00",
        course: "Frontend dasturlash",
        level: "Boshlang'ich",
        room: "1-xona",
        mentor: "Aziz Karimov",
        students: 12,
      },
      {
        time: "11:30 - 13:30",
        course: "Sun'iy Intellekt",
        level: "O'rta",
        room: "2-xona",
        mentor: "Malika Tosheva",
        students: 8,
      },
      {
        time: "14:00 - 16:00",
        course: "Ingliz tili",
        level: "Boshlang'ich",
        room: "3-xona",
        mentor: "John Smith",
        students: 15,
      },
      {
        time: "16:30 - 18:30",
        course: "Robototexnika",
        level: "Boshlang'ich",
        room: "Lab",
        mentor: "Sardor Alimov",
        students: 10,
      },
    ],
  },
  {
    day: "Seshanba",
    sessions: [
      {
        time: "09:00 - 11:00",
        course: "Backend dasturlash",
        level: "Boshlang'ich",
        room: "1-xona",
        mentor: "Sardor Alimov",
        students: 14,
      },
      {
        time: "11:30 - 13:30",
        course: "Grafik dizayn",
        level: "Boshlang'ich",
        room: "2-xona",
        mentor: "Nigora Karimova",
        students: 11,
      },
      {
        time: "14:00 - 16:00",
        course: "Xitoy tili",
        level: "Boshlang'ich",
        room: "3-xona",
        mentor: "Li Wei",
        students: 9,
      },
      {
        time: "16:30 - 18:30",
        course: "SMM",
        level: "Boshlang'ich",
        room: "1-xona",
        mentor: "Aziza Tosheva",
        students: 16,
      },
    ],
  },
  {
    day: "Chorshanba",
    sessions: [
      {
        time: "09:00 - 11:00",
        course: "Kiberxavfsizlik",
        level: "O'rta",
        room: "2-xona",
        mentor: "Bobur Karimov",
        students: 7,
      },
      {
        time: "11:30 - 13:30",
        course: "Frontend dasturlash",
        level: "O'rta",
        room: "1-xona",
        mentor: "Aziz Karimov",
        students: 10,
      },
      {
        time: "14:00 - 16:00",
        course: "Matematika",
        level: "Boshlang'ich",
        room: "3-xona",
        mentor: "Dilshod Rahimov",
        students: 13,
      },
      {
        time: "16:30 - 18:30",
        course: "3D Modellashtirish",
        level: "Boshlang'ich",
        room: "Lab",
        mentor: "Bekzod Rahimov",
        students: 8,
      },
    ],
  },
  {
    day: "Payshanba",
    sessions: [
      {
        time: "09:00 - 11:00",
        course: "Sun'iy Intellekt",
        level: "Yuqori",
        room: "2-xona",
        mentor: "Malika Tosheva",
        students: 6,
      },
      {
        time: "11:30 - 13:30",
        course: "Ingliz tili",
        level: "O'rta",
        room: "3-xona",
        mentor: "John Smith",
        students: 12,
      },
      {
        time: "14:00 - 16:00",
        course: "Libos dizayn",
        level: "Boshlang'ich",
        room: "1-xona",
        mentor: "Gulnora Abdullayeva",
        students: 9,
      },
      {
        time: "16:30 - 18:30",
        course: "Robototexnika",
        level: "O'rta",
        room: "Lab",
        mentor: "Sardor Alimov",
        students: 7,
      },
    ],
  },
  {
    day: "Juma",
    sessions: [
      {
        time: "09:00 - 11:00",
        course: "Backend dasturlash",
        level: "O'rta",
        room: "1-xona",
        mentor: "Sardor Alimov",
        students: 9,
      },
      {
        time: "11:30 - 13:30",
        course: "SMM + AI",
        level: "O'rta",
        room: "2-xona",
        mentor: "Jasur Karimov",
        students: 8,
      },
      {
        time: "14:00 - 16:00",
        course: "Rus tili",
        level: "Boshlang'ich",
        room: "3-xona",
        mentor: "Olga Petrova",
        students: 11,
      },
      {
        time: "16:30 - 18:30",
        course: "Rassomchilik",
        level: "Boshlang'ich",
        room: "Lab",
        mentor: "Nigora Karimova",
        students: 14,
      },
    ],
  },
  {
    day: "Shanba",
    sessions: [
      {
        time: "09:00 - 11:00",
        course: "Frontend dasturlash",
        level: "Boshlang'ich",
        room: "1-xona",
        mentor: "Aziz Karimov",
        students: 15,
      },
      {
        time: "11:30 - 13:30",
        course: "Ingliz tili",
        level: "Boshlang'ich",
        room: "3-xona",
        mentor: "John Smith",
        students: 18,
      },
      {
        time: "14:00 - 16:00",
        course: "Robototexnika",
        level: "Boshlang'ich",
        room: "Lab",
        mentor: "Sardor Alimov",
        students: 12,
      },
      {
        time: "16:30 - 18:30",
        course: "Sun'iy Intellekt",
        level: "Boshlang'ich",
        room: "2-xona",
        mentor: "Malika Tosheva",
        students: 10,
      },
    ],
  },
  {
    day: "Yakshanba",
    sessions: [
      {
        time: "10:00 - 12:00",
        course: "Grafik dizayn",
        level: "O'rta",
        room: "2-xona",
        mentor: "Nigora Karimova",
        students: 8,
      },
      {
        time: "14:00 - 16:00",
        course: "Matematika",
        level: "O'rta",
        room: "3-xona",
        mentor: "Dilshod Rahimov",
        students: 10,
      },
      {
        time: "16:30 - 18:30",
        course: "3D Modellashtirish",
        level: "O'rta",
        room: "Lab",
        mentor: "Bekzod Rahimov",
        students: 6,
      },
    ],
  },
]

export function ScheduleTable() {
  return (
    <div className="space-y-6">
      {scheduleData.map((daySchedule) => (
        <Card key={daySchedule.day}>
          <CardHeader>
            <CardTitle className="text-xl">{daySchedule.day}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vaqt</TableHead>
                    <TableHead>Kurs</TableHead>
                    <TableHead>Daraja</TableHead>
                    <TableHead>Xona</TableHead>
                    <TableHead>Mentor</TableHead>
                    <TableHead>O'quvchilar</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {daySchedule.sessions.map((session, index) => (
                    <TableRow key={index} className="hover:bg-muted/50">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{session.time}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{session.course}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{session.level}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          {session.room}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          {session.mentor}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{session.students} kishi</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
