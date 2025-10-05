import { useMemo, useState } from 'react'

type Event = {
  id: string
  title: string
  date: string // ISO
  location: string
  tags: string[]
}

const MOCK_EVENTS: Event[] = [
  { id: 'e1', title: 'Alumni Reunion 2025', date: '2025-11-20', location: 'Campus Auditorium', tags: ['Reunion'] },
  { id: 'e2', title: 'Web3 Careers Webinar', date: '2025-10-18', location: 'Online', tags: ['Webinar'] },
  { id: 'e3', title: 'Batch of 2015 Meet', date: '2025-12-05', location: 'City Convention Center', tags: ['Batch'] },
]

type RSVP = 'none' | 'interested' | 'going'

export function EventsPage() {
  const [query, setQuery] = useState('')
  const [rsvp, setRsvp] = useState<Record<string, RSVP>>({})

  const filtered = useMemo(() => {
    return MOCK_EVENTS.filter((ev) =>
      !query || ev.title.toLowerCase().includes(query.toLowerCase())
    )
  }, [query])

  function onRsvp(id: string, value: RSVP) {
    setRsvp((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Events</h1>

      <div className="rounded-md border bg-card text-card-foreground p-4 grid gap-3 md:grid-cols-2">
        <input
          className="rounded-md border bg-background px-3 py-2"
          placeholder="Search events"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-3">
        {filtered.map((ev) => (
          <div key={ev.id} className="rounded-md border bg-card text-card-foreground p-4 flex items-start justify-between gap-4">
            <div>
              <a href={`/events/${ev.id}`} className="font-medium hover:underline">{ev.title}</a>
              <div className="text-sm text-muted-foreground">{new Date(ev.date).toDateString()} · {ev.location}</div>
              <div className="mt-2 flex gap-2 text-xs">
                {ev.tags.map((t) => (
                  <span key={t} className="rounded-md border px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className={"rounded-md border px-3 py-2 text-sm " + (rsvp[ev.id] === 'interested' ? 'bg-accent' : '')}
                onClick={() => onRsvp(ev.id, 'interested')}
              >Interested</button>
              <button
                className={"rounded-md border px-3 py-2 text-sm " + (rsvp[ev.id] === 'going' ? 'bg-primary text-primary-foreground' : '')}
                onClick={() => onRsvp(ev.id, 'going')}
              >Going</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


