import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, ArrowRight, Filter } from "lucide-react"

export default function ProjectsTable() {
  const projects = [
    {
      id: 1,
      companyIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      name: "Material Figma Version",
      budget: "$14,000",
      team: "Design",
      completion: 50,
    },
    {
      id: 2,
      companyIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      name: "Add Progress Track",
      budget: "$3,000",
      team: "Development",
      completion: 10,
    },
    {
      id: 3,
      companyIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discord/discord-original.svg",
      name: "Fix Platform Errors",
      budget: "$20,000",
      team: "Back-End",
      completion: 50,
    },
    {
      id: 4,
      companyIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      name: "Launch Mobile App",
      budget: "$5,000",
      team: "Design",
      completion: 50,
    },
    {
      id: 5,
      companyIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      name: "New Pricing Page",
      budget: "$2,000",
      team: "Marketing",
      completion: 50,
    },
  ]

  return (
    <Card className="w-full max-w-5xl mx-auto mt-10">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Projects</CardTitle>
          <p className="text-sm text-muted-foreground">30 done this month</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
          <Button>New Project</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Companies</TableHead>
              <TableHead>Members</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Completion</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((p) => (
              <TableRow key={p.id}>
                <TableCell><Checkbox /></TableCell>
                <TableCell className="flex items-center gap-2">
                  <img src={p.companyIcon} alt={p.name} className="w-5 h-5" />
                  {p.name}
                </TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    <p>rasm</p>
                  </div>
                </TableCell>
                <TableCell>{p.budget}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{p.team}</Badge>
                </TableCell>
                <TableCell className="w-[200px]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm w-8">{p.completion}%</span>
                    <Progress value={p.completion} className="h-2 flex-1" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-muted-foreground">Page 2 of 10</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-1" /> Prev
            </Button>
            <Button variant="outline" size="sm">
              Next <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
