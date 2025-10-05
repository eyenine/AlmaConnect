export function AdminDashboardPage() {
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-md border bg-card text-card-foreground p-4">
          <div className="text-sm text-muted-foreground">Active users</div>
          <div className="text-2xl font-semibold">1,248</div>
        </div>
        <div className="rounded-md border bg-card text-card-foreground p-4">
          <div className="text-sm text-muted-foreground">Events this month</div>
          <div className="text-2xl font-semibold">12</div>
        </div>
        <div className="rounded-md border bg-card text-card-foreground p-4">
          <div className="text-sm text-muted-foreground">Open jobs</div>
          <div className="text-2xl font-semibold">34</div>
        </div>
      </div>
      <div className="rounded-md border bg-card text-card-foreground p-4 h-64">Charts placeholder</div>
    </div>
  )
}


