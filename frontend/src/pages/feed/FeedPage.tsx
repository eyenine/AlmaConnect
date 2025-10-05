import { useState } from 'react'

type Post = {
  id: string
  author: string
  content: string
}

export function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([
    { id: '1', author: 'Alumni A', content: 'Excited to announce our reunion event next month!' },
    { id: '2', author: 'Student B', content: 'Looking for a mentor in Data Science.' },
  ])
  const [text, setText] = useState('')

  function submit() {
    if (!text.trim()) return
    setPosts([{ id: String(Date.now()), author: 'You', content: text }, ...posts])
    setText('')
  }

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Community Feed</h1>

      <div className="rounded-md border bg-card text-card-foreground p-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share an update..."
          rows={3}
          className="w-full rounded-md border bg-background px-3 py-2"
        />
        <div className="mt-2 flex justify-end">
          <button onClick={submit} className="rounded-md border bg-primary text-primary-foreground px-3 py-2">
            Post
          </button>
        </div>
      </div>

      {posts.map((p) => (
        <article key={p.id} className="rounded-md border bg-card text-card-foreground p-4">
          <div className="font-medium">{p.author}</div>
          <p className="mt-1 text-sm text-muted-foreground whitespace-pre-wrap">{p.content}</p>
        </article>
      ))}
    </div>
  )
}
