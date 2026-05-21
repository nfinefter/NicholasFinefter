import { motion } from 'framer-motion'
import { Database } from 'lucide-react'

const PLATFORMS = [
  'Social accounts',
  'Revenue streams',
  'Engagement data',
  'Earnings insights',
]

const HIGHLIGHTS = [
  { label: 'Multi-platform linking', detail: 'Unified account connections' },
  { label: 'Revenue dashboard', detail: 'Consolidated creator income' },
  { label: 'Insights engine', detail: 'Engagement & earnings analysis' },
  { label: 'Growth tips', detail: 'Audience & revenue optimization' },
]

const bars = Array.from({ length: 24 }, (_, i) => 30 + Math.sin(i / 2) * 20 + ((i * 7) % 35))

export function PulseDashDemo() {
  return (
    <div className="mt-8">
      <div className="mb-4 flex flex-wrap gap-2">
        {PLATFORMS.map((p) => (
          <span
            key={p}
            className="rounded-full bg-[#282828] px-3 py-1 text-xs font-medium text-neutral-200"
          >
            {p}
          </span>
        ))}
      </div>

      <div className="mb-6 flex items-start gap-3 rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-4 py-3">
        <Database className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
        <p className="text-xs leading-relaxed text-neutral-300">
          Built with React, Tailwind, and Supabase — per resume project stack.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {HIGHLIGHTS.map((s) => (
          <div key={s.label} className="rounded-lg bg-[#282828] p-4">
            <p className="text-xs text-neutral-400">{s.label}</p>
            <p className="mt-1 text-sm font-semibold text-white">{s.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex h-24 items-end gap-1">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-[#1db954]/20 to-[#1db954]"
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.02, duration: 0.4 }}
          />
        ))}
      </div>
    </div>
  )
}
