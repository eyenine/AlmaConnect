import { ThemeToggle } from './components/ThemeToggle'
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">AlmaConnect</h1>
          <div>
            <ThemeToggle />
          </div>
        </div>
        <p className="text-muted-foreground mt-2">
          React + Tailwind baseline is ready. Use the toggle to switch theme.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <a className="rounded-md border bg-card text-card-foreground p-4 hover:bg-accent hover:text-accent-foreground transition-colors" href="https://react.dev" target="_blank">
            React Docs
          </a>
          <a className="rounded-md border bg-card text-card-foreground p-4 hover:bg-accent hover:text-accent-foreground transition-colors" href="https://tailwindcss.com" target="_blank">
            Tailwind Docs
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
