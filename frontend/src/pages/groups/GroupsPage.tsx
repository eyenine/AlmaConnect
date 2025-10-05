type Group = {
  id: string
  name: string
  description: string
  members: number
}

const GROUPS: Group[] = [
  { id: 'g1', name: 'Computer Science', description: 'Department group for CS alumni and students.', members: 1240 },
  { id: 'g2', name: 'Batch 2018', description: 'All 2018 graduates across departments.', members: 860 },
]

export function GroupsPage() {
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Groups</h1>

      <div className="grid gap-3">
        {GROUPS.map((g) => (
          <a key={g.id} href={`/groups/${g.id}`} className="rounded-md border bg-card text-card-foreground p-4 hover:bg-accent/50">
            <div className="font-medium">{g.name}</div>
            <p className="text-sm text-muted-foreground">{g.description}</p>
            <div className="text-xs text-muted-foreground mt-1">{g.members} members</div>
          </a>
        ))}
      </div>
    </div>
  )
}


