import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'

const BLOCKS = [
  { color: 'bg-yellow-400', label: 'when 🚩 clicked' },
  { color: 'bg-blue-400', label: 'broadcast "go"' },
  { color: 'bg-green-400', label: 'move 10 steps' },
]

export function CodeFuDemo() {
  return (
    <div className="mt-8 max-w-lg">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
        Message passing · Sprite A → Sprite B
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl bg-[#282828] p-4">
          <p className="mb-3 text-xs font-bold text-orange-400">Sprite A (Cat)</p>
          <div className="space-y-2">
            {BLOCKS.map((b, i) => (
              <motion.div
                key={b.label}
                className={`rounded-md px-3 py-2 text-xs font-bold text-black ${b.color}`}
                initial={{ x: -8, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.15 }}
              >
                {b.label}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-[#282828] p-4">
          <p className="mb-3 text-xs font-bold text-sky-400">Sprite B (Dog)</p>
          <motion.div
            className="flex items-center gap-2 rounded-md bg-purple-400 px-3 py-2 text-xs font-bold text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <MessageSquare className="h-3.5 w-3.5" />
            when I receive &quot;go&quot;
          </motion.div>
          <motion.div
            className="mt-2 rounded-md bg-green-400 px-3 py-2 text-xs font-bold text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            say Hello! for 2 secs
          </motion.div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-neutral-500">
        <span className="rounded bg-orange-400/20 px-2 py-0.5 text-orange-300">Cat</span>
        <ArrowRight className="h-4 w-4" />
        <span className="text-neutral-400">broadcast</span>
        <ArrowRight className="h-4 w-4" />
        <span className="rounded bg-sky-400/20 px-2 py-0.5 text-sky-300">Dog</span>
      </div>

      <p className="mt-4 text-xs text-neutral-500">
        Teaching metaphor for event-driven logic — same patterns students use in Scratch and
        later in real apps.
      </p>
    </div>
  )
}
