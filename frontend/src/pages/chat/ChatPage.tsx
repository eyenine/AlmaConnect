import { useState } from 'react'

type Conversation = {
  id: string
  name: string
  lastMessage: string
}

type Message = {
  id: string
  from: 'me' | 'them'
  text: string
}

const CONVERSATIONS: Conversation[] = [
  { id: 'c1', name: 'Alumni A', lastMessage: 'See you at the event!' },
  { id: 'c2', name: 'Student B', lastMessage: 'Thanks for the resume feedback.' },
]

const MESSAGES: Record<string, Message[]> = {
  c1: [
    { id: 'm1', from: 'them', text: 'Hi! Are you attending the reunion?' },
    { id: 'm2', from: 'me', text: 'Yes! Looking forward to it.' },
  ],
  c2: [
    { id: 'm1', from: 'them', text: 'Could you review my resume?' },
    { id: 'm2', from: 'me', text: 'Sure, sent suggestions.' },
  ],
}

export function ChatPage() {
  const [active, setActive] = useState(CONVERSATIONS[0].id)
  const [text, setText] = useState('')

  const list = CONVERSATIONS
  const msgs = MESSAGES[active] || []

  function send() {
    if (!text.trim()) return
    (MESSAGES[active] = [...msgs, { id: String(Date.now()), from: 'me', text }])
    setText('')
  }

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Messages</h1>
      <div className="rounded-md border overflow-hidden grid grid-cols-1 md:grid-cols-3">
        <aside className="border-b md:border-b-0 md:border-r max-h-[60vh] overflow-auto">
          {list.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={[
                'w-full text-left px-3 py-2 border-b last:border-b-0',
                active === c.id ? 'bg-accent' : 'hover:bg-accent/50',
              ].join(' ')}
            >
              <div className="font-medium">{c.name}</div>
              <div className="text-xs text-muted-foreground truncate">{c.lastMessage}</div>
            </button>
          ))}
        </aside>
        <section className="md:col-span-2 flex flex-col h-[60vh]">
          <div className="flex-1 overflow-auto p-4 space-y-2">
            {msgs.map((m) => (
              <div key={m.id} className={m.from === 'me' ? 'text-right' : 'text-left'}>
                <span className={[
                  'inline-block rounded-xl px-3 py-2',
                  m.from === 'me' ? 'bg-primary text-primary-foreground' : 'bg-accent',
                ].join(' ')}>
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t p-3 flex gap-2">
            <input
              className="flex-1 rounded-md border bg-background px-3 py-2"
              placeholder="Type a message"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={send} className="rounded-md border px-3 py-2">Send</button>
          </div>
        </section>
      </div>
    </div>
  )
}


