import { useMemo, useState } from 'react'

type Person = {
  id: string
  name: string
  company: string
  batch: string
  skills: string[]
  location: string
}

const PEOPLE: Person[] = [
  { id: 'p1', name: 'Alumni A', company: 'Tech Corp', batch: '2016', skills: ['React', 'Node'], location: 'Delhi' },
  { id: 'p2', name: 'Student B', company: 'Intern', batch: '2026', skills: ['Python', 'ML'], location: 'Pune' },
  { id: 'p3', name: 'Faculty C', company: 'University', batch: '-', skills: ['Research'], location: 'Chennai' },
]

export function SearchPage() {
  const [q, setQ] = useState('')
  const [skill, setSkill] = useState('')
  const [batch, setBatch] = useState('')

  const results = useMemo(() => {
    return PEOPLE.filter((p) =>
      (!q || p.name.toLowerCase().includes(q.toLowerCase()) || p.company.toLowerCase().includes(q.toLowerCase())) &&
      (!skill || p.skills.map((s) => s.toLowerCase()).includes(skill.toLowerCase())) &&
      (!batch || p.batch === batch)
    )
  }, [q, skill, batch])

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Search Directory</h1>
      <div className="rounded-md border bg-card text-card-foreground p-4 grid gap-3 md:grid-cols-3">
        <input className="rounded-md border bg-background px-3 py-2" placeholder="Name or company" value={q} onChange={(e) => setQ(e.target.value)} />
        <input className="rounded-md border bg-background px-3 py-2" placeholder="Skill (e.g. React)" value={skill} onChange={(e) => setSkill(e.target.value)} />
        <input className="rounded-md border bg-background px-3 py-2" placeholder="Batch (e.g. 2018)" value={batch} onChange={(e) => setBatch(e.target.value)} />
      </div>
      <div className="grid gap-3">
        {results.map((p) => (
          <div key={p.id} className="rounded-md border bg-card text-card-foreground p-4">
            <div className="font-medium">{p.name}</div>
            <div className="text-sm text-muted-foreground">{p.company} · Batch {p.batch} · {p.location}</div>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              {p.skills.map((s) => (
                <span key={s} className="rounded-md border px-2 py-1">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


