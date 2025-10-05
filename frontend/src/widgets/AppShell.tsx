import { Outlet, Link } from 'react-router-dom'
import { ThemeToggle } from '../components/ThemeToggle'
import { Sidebar } from './Sidebar'

export function AppShell() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <Link to="/feed" className="font-semibold">AlmaConnect</Link>
          <nav className="flex items-center gap-3">
            <Link className="text-sm text-muted-foreground hover:text-foreground" to="/feed">Feed</Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground" to="/jobs">Jobs</Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground" to="/events">Events</Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground" to="/search">Search</Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground" to="/notifications">Notifications</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex gap-6 py-6">
          <Sidebar />
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
