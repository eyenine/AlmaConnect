import { useParams } from 'react-router-dom'

export function JobDetailsPage() {
  const { id } = useParams()

  return (
    <div className="grid gap-4">
      <div className="text-sm text-muted-foreground">Job ID: {id}</div>
      <h1 className="text-2xl font-semibold">Frontend Engineer</h1>
      <div className="text-sm text-muted-foreground">Tech Corp · Remote · Engineering · 2+ years</div>
      <p className="text-sm">We are looking for a frontend engineer proficient in React and TypeScript. Experience with Tailwind and accessibility best practices is a plus.</p>
      <div className="flex gap-2">
        <button className="rounded-md border bg-primary text-primary-foreground px-3 py-2 text-sm">Apply</button>
        <button className="rounded-md border px-3 py-2 text-sm">Save</button>
      </div>
    </div>
  )
}
