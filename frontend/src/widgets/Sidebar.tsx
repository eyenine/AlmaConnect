import { Link, useLocation } from 'react-router-dom'

const nav = [
  { to: '/feed', label: 'Feed' },
  { to: '/profile/you', label: 'Profile' },
  { to: '/jobs', label: 'Jobs' },
  { to: '/events', label: 'Events' },
  { to: '/groups', label: 'Groups' },
  { to: '/chat', label: 'Chat' },
]

export function Sidebar() {
  const { pathname } = useLocation()

  return (
    <aside className="hidden md:block w-60 shrink-0 border-r">
      <div className="p-3">
        <nav className="grid gap-1">
          {nav.map((item) => {
            const active = pathname.startsWith(item.to)
            return (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  'rounded-md px-3 py-2 text-sm',
                  active
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50',
                ].join(' ')}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
