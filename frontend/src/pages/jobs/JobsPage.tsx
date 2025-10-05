import { useMemo, useState } from 'react'

type Job = {
  id: string
  title: string
  company: string
  location: string
  domain: string
  experience: string
}

const MOCK_JOBS: Job[] = [
  { id: 'j1', title: 'Frontend Engineer', company: 'Tech Corp', location: 'Remote', domain: 'Engineering', experience: '2+ years' },
  { id: 'j2', title: 'Data Analyst', company: 'DataWorks', location: 'Mumbai, IN', domain: 'Analytics', experience: '1+ years' },
  { id: 'j3', title: 'Backend Developer', company: 'CloudBase', location: 'Bengaluru, IN', domain: 'Engineering', experience: '3+ years' },
]

export function JobsPage() {
  const [query, setQuery] = useState('')
  const [domain, setDomain] = useState('')
  const [location, setLocation] = useState('')

  const filtered = useMemo(() => {
    return MOCK_JOBS.filter((j) =>
      (!query || (j.title + j.company).toLowerCase().includes(query.toLowerCase())) &&
      (!domain || j.domain === domain) &&
      (!location || j.location.toLowerCase().includes(location.toLowerCase()))
    )
  }, [query, domain, location])

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Jobs</h1>

      <div className="rounded-md border bg-card text-card-foreground p-4 grid gap-3 md:grid-cols-3">
        <input
          className="rounded-md border bg-background px-3 py-2"
          placeholder="Search title or company"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select className="rounded-md border bg-background px-3 py-2" value={domain} onChange={(e) => setDomain(e.target.value)}>
          <option value="">All domains</option>
          <option>Engineering</option>
          <option>Analytics</option>
        </select>
        <input
          className="rounded-md border bg-background px-3 py-2"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="grid gap-3">
        {filtered.map((j) => (
          <a key={j.id} href={`/jobs/${j.id}`} className="rounded-md border bg-card text-card-foreground p-4 flex items-center justify-between hover:bg-accent/50">
            <div>
              <div className="font-medium">{j.title}</div>
              <div className="text-sm text-muted-foreground">{j.company} · {j.location}</div>
              <div className="text-xs text-muted-foreground">{j.domain} · {j.experience}</div>
            </div>
            <span className="rounded-md border px-3 py-2 text-sm">View</span>
          </a>
        ))}
      </div>
    </div>
  )
}
