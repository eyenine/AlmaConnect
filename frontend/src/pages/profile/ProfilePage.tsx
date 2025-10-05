export function ProfilePage() {
  const user = {
    name: 'Jane Doe',
    batch: '2018',
    department: 'Computer Science',
    company: 'Tech Corp',
    location: 'Bengaluru, IN',
    bio: 'Alumni mentor. Frontend engineer passionate about education and community building.',
    skills: ['React', 'TypeScript', 'Node.js'],
    links: [{ label: 'LinkedIn', href: '#' }, { label: 'GitHub', href: '#' }],
  }

  return (
    <div className="grid gap-6">
      <header className="rounded-md border bg-card text-card-foreground p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <p className="text-sm text-muted-foreground">Batch {user.batch} · {user.department}</p>
            <p className="text-sm text-muted-foreground">{user.company} · {user.location}</p>
          </div>
          <a className="rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground" href="/profile/edit">Edit Profile</a>
        </div>
      </header>

      <section className="rounded-md border bg-card text-card-foreground p-4">
        <h2 className="font-medium">About</h2>
        <p className="mt-2 text-sm text-muted-foreground">{user.bio}</p>
      </section>

      <section className="rounded-md border bg-card text-card-foreground p-4">
        <h2 className="font-medium">Skills</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {user.skills.map((s) => (
            <span key={s} className="rounded-md border px-2 py-1 text-xs">{s}</span>
          ))}
        </div>
      </section>

      <section className="rounded-md border bg-card text-card-foreground p-4">
        <h2 className="font-medium">Links</h2>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          {user.links.map((l) => (
            <a key={l.label} className="text-primary hover:underline" href={l.href} target="_blank">{l.label}</a>
          ))}
        </div>
      </section>
    </div>
  )
}
