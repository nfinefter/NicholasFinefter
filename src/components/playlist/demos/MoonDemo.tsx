import { motion } from 'framer-motion'
import { Counter } from './Counter'

const CHIPS = [
  'UI tests',
  'API tests',
  'Visual tests',
  'GitHub Actions',
  'Parallelization',
  'Selective execution',
]

const DASHBOARD = ['Test health', 'Coverage', 'Deployment status']

const RUNTIME = [
  { label: 'Before', pct: 100 },
  { label: 'After', pct: 34 },
]

export function MoonDemo() {
  return (
    <div className="mt-8 max-w-3xl">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-[#282828] p-4">
          <p className="text-xs text-neutral-400">Regression coverage</p>
          <p className="mt-1 text-2xl font-bold text-white">
            <Counter to={90} suffix="%" />
          </p>
        </div>
        <div className="rounded-lg bg-[#282828] p-4">
          <p className="text-xs text-neutral-400">Pipeline runtime cut</p>
          <p className="mt-1 text-2xl font-bold text-[#1db954]">
            <Counter to={66} suffix="%" />
          </p>
        </div>
        <div className="col-span-2 rounded-lg bg-[#282828] p-4 sm:col-span-1">
          <p className="text-xs text-neutral-400">Feature delivery</p>
          <p className="mt-1 text-2xl font-bold text-white">Same-day</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {CHIPS.map((c) => (
          <span
            key={c}
            className="rounded-full bg-[#282828] px-3 py-1 text-xs text-neutral-300"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-[#181818] p-5">
        <p className="text-sm font-semibold text-white">CI pipeline runtime</p>
        <p className="mt-1 text-xs text-neutral-400">
          Relative runtime after parallelizing and running only the tests a change
          affects. Coverage stayed the same.
        </p>
        <div className="mt-4 space-y-3">
          {RUNTIME.map(({ label, pct }, i) => (
            <div key={label} className="flex items-center gap-3 text-xs">
              <span className="w-12 text-neutral-400">{label}</span>
              <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#282828]">
                <motion.div
                  className={i === 0 ? 'h-full bg-neutral-500' : 'h-full bg-[#1db954]'}
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                />
              </div>
              <span className="w-10 text-right text-neutral-300">{pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-[#181818] p-5">
        <p className="text-sm font-semibold text-white">Team metrics dashboard</p>
        <p className="mt-1 text-xs text-neutral-400">
          Gives engineers and leadership a live view of the release.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {DASHBOARD.map((d) => (
            <span
              key={d}
              className="rounded-full border border-[#1db954]/30 bg-[#1db954]/10 px-3 py-1 text-xs text-[#1db954]"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
