import { useEffect, useState } from 'react'
import { Bot, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const STACK = ['React', 'Express', 'AWS', 'Cognito', 'DynamoDB', 'Postman']

const CHAT = [
  {
    role: 'user' as const,
    text: 'Write a short launch email for our new feature. Keep it under 80 words.',
  },
  {
    role: 'assistant' as const,
    text: 'Subject: Campaign copy from a quick brief\n\nHi there, we just shipped a faster way to draft campaign copy. Tell us your goal and tone, and you get subject lines, body copy and social posts to review and edit. Give it a try this week.',
  },
  {
    role: 'user' as const,
    text: 'Shorter, and add a call to action.',
  },
  {
    role: 'assistant' as const,
    text: 'Draft campaign copy from a one-line brief. Pick a tone, edit it, send it. Try it today.',
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
                'max-w-[85%] whitespace-pre-line rounded-lg px-3 py-2',
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
        Mock chat for illustration, not real agent output.
      </p>
    </div>
  )
}
