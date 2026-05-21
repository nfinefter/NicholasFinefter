import { Shield, Smartphone } from 'lucide-react'
import { Counter } from './Counter'

const CHIPS = ['REST APIs', 'Postman', 'Testomatio', 'iOS', 'Android', 'Regression']

export function EshyftDemo() {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-[#282828] p-4">
          <p className="text-xs text-neutral-400">Test cases authored</p>
          <p className="mt-1 text-2xl font-bold text-white">
            <Counter to={200} />
          </p>
        </div>
        <div className="rounded-lg bg-[#282828] p-4">
          <p className="text-xs text-neutral-400">Defects logged</p>
          <p className="mt-1 text-2xl font-bold text-white">
            <Counter to={30} />
          </p>
        </div>
        <div className="col-span-2 rounded-lg bg-[#282828] p-4 sm:col-span-1">
          <p className="text-xs text-neutral-400">Prod incidents reduced</p>
          <p className="mt-1 text-2xl font-bold text-[#1db954]">
            <Counter to={15} suffix="%" />
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {CHIPS.map((c) => (
          <span
            key={c}
            className="inline-flex items-center gap-1 rounded-full bg-[#282828] px-3 py-1 text-xs text-neutral-300"
          >
            {c === 'iOS' || c === 'Android' ? (
              <Smartphone className="h-3 w-3 text-neutral-500" />
            ) : null}
            {c}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-lg border border-violet-500/20 bg-violet-500/5 px-4 py-3">
        <Shield className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />
        <div>
          <p className="text-sm font-medium text-white">Bitwarden rollout (1-month lead)</p>
          <p className="mt-0.5 text-xs text-neutral-400">
            Improved team credential security by 100% and workflow efficiency by 25% through
            centralized access control — per resume.
          </p>
        </div>
      </div>
    </div>
  )
}
