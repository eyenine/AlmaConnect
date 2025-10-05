import { useParams } from 'react-router-dom'

export function GroupDetailsPage() {
  const { id } = useParams()

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Group: {id}</h1>
      <div className="rounded-md border bg-card text-card-foreground p-4">Group feed placeholder</div>
      <div className="rounded-md border bg-card text-card-foreground p-4">Announcement placeholder</div>
    </div>
  )
}


