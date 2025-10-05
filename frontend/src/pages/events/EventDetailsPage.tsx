import { useParams } from 'react-router-dom'

export function EventDetailsPage() {
  const { id } = useParams()

  return (
    <div className="grid gap-4">
      <div className="text-sm text-muted-foreground">Event ID: {id}</div>
      <h1 className="text-2xl font-semibold">Alumni Reunion 2025</h1>
      <div className="text-sm text-muted-foreground">Nov 20, 2025 · Campus Auditorium</div>
      <p className="text-sm">Join alumni across batches for a day of networking, talks, and celebration. Photos and memories will be shared post-event.</p>
      <div className="flex gap-2">
        <button className="rounded-md border px-3 py-2 text-sm">Interested</button>
        <button className="rounded-md border bg-primary text-primary-foreground px-3 py-2 text-sm">Going</button>
      </div>
    </div>
  )
}


