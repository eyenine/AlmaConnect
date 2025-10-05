import { useContext } from 'react'
import { ThemeContext } from '../lib/theme'

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <button
      className="rounded-md border px-3 py-2 text-sm bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  )
}


