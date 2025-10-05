const ITEMS = [
  { id: 'n1', text: 'Your event RSVP is confirmed.' },
  { id: 'n2', text: 'New message from Alumni A.' },
  { id: 'n3', text: 'Job "Frontend Engineer" is closing soon.' },
]

export function NotificationsPage() {
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Notifications</h1>
      <div className="grid gap-2">
        {ITEMS.map((i) => (
          <div key={i.id} className="rounded-md border bg-card text-card-foreground p-3 text-sm">
            {i.text}
          </div>
        ))}
      </div>
    </div>
  )
}


