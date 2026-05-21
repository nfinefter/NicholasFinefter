import { useEffect, useState } from 'react'
import { Bot, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const STACK = ['React', 'Express', 'Lambda', 'API Gateway', 'Cognito', 'DynamoDB']

const CHAT = [
  {
    role: 'user' as const,
    text: 'Draft a product launch email for our AI marketing assistant — friendly, under 120 words.',
  },
  {
    role: 'assistant' as const,
    text: 'Subject: Meet your new campaign co-pilot\n\nHi there — Markbase helps you ship on-brand copy in minutes. Upload your brief, pick a tone, and get subject lines, body copy, and social snippets ready to review. Built for teams who move fast without sacrificing voice.',
  },
  {
    role: 'user' as const,
    text: 'Shorten the body and add a clear CTA.',
  },
  {
    role: 'assistant' as const,
    text: 'Ship on-brand campaigns in minutes — upload a brief, choose a tone, export ready-to-send copy. Start your next launch → [Try Markbase]',
  },
]

export function MarkbaseDemo() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= CHAT.length) return
    const t = setTimeout(() => setVisible((v) => v + 1), 900)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <div className="mt-8 max-w-xl">
      <div className="mb-4 flex flex-wrap gap-2">
        {STACK.map((pill) => (
          <span
            key={pill}
            className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200/90"
          >
            {pill}
          </span>
        ))}
      </div>

      <div className="space-y-3 rounded-xl border border-white/10 bg-[#181818] p-4">
        {CHAT.slice(0, visible).map((msg, i) => (
          <div
            key={i}
            className={cn(
              'flex gap-3 text-sm',
              msg.role === 'user' ? 'justify-end' : 'justify-start',
            )}
          >
            {msg.role === 'assistant' && (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#282828]">
                <Bot className="h-4 w-4 text-amber-400" />
              </div>
            )}
            <div
              className={cn(
                'max-w-[85%] rounded-lg px-3 py-2',
                msg.role === 'user'
                  ? 'bg-[#1db954]/20 text-white'
                  : 'bg-[#282828] text-neutral-200',
              )}
            >
              {msg.text}
            </div>
            {msg.role === 'user' && (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#282828]">
                <User className="h-4 w-4 text-neutral-400" />
              </div>
            )}
          </div>
        ))}
        {visible < CHAT.length && (
          <p className="text-xs text-neutral-500 animate-pulse">Assistant is typing…</p>
        )}
      </div>

      <p className="mt-3 text-xs text-neutral-500">
        Simulated marketing chat · Postman: 12 API tests passing
      </p>
    </div>
  )
}
