import { useState } from 'react'
import { ExternalLink, MapPin, Phone, Shield, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const LIVE_URL = 'https://on-demand-electrical.com/'

const SERVICES = [
  '24/7 emergency service',
  'Panel upgrades',
  'EV charger installation',
  'Electrical repairs',
  'New installations',
  'Free quotes',
] as const

const DELIVERABLES = [
  'Custom brand-forward homepage with clear licensed-electrician positioning',
  'Service-focused copy aligned to SFV homeowners and businesses',
  'Prominent free-quote and contact paths on desktop and mobile',
  'Fast, lightweight front end with strong Core Web Vitals',
  'SEO-ready structure (titles, descriptions, semantic sections)',
  'Live deployment at on-demand-electrical.com',
] as const

const BEFORE_ISSUES = [
  'Generic template with weak branding',
  'Slow load and poor mobile experience',
  'Services buried below the fold',
  'No clear emergency or quote pathway',
] as const

export function OnDemandElectricalDemo() {
  const [showAfter, setShowAfter] = useState(true)

  return (
    <div className="mt-8 space-y-8">
      <section className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Case study
        </p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-300">
          On Demand Electrical needed a site that earns trust in seconds and turns
          urgent searches into calls. The rebuild focuses on licensed SFV
          positioning, high-intent services, and frictionless quote requests —
          backed by measurable speed and conversion gains over the legacy
          presence.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { icon: MapPin, label: 'San Fernando Valley, CA' },
            { icon: Shield, label: 'Licensed & insured' },
            { icon: Phone, label: '24/7 emergency line' },
            { icon: Zap, label: 'Quote-first UX' },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-100/90"
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </span>
          ))}
        </div>
      </section>

      <section>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Services highlighted on the live site
        </p>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((service) => (
            <span
              key={service}
              className="rounded-full bg-[#282828] px-3 py-1.5 text-xs text-neutral-200"
            >
              {service}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-[#181818] p-5">
          <p className="text-sm font-semibold text-white">What I delivered</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            {DELIVERABLES.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1db954]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
          <p className="text-sm font-semibold text-white">Before (legacy site)</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            {BEFORE_ISSUES.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/80" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium text-white">Before / After</p>
          <div className="inline-flex rounded-full bg-[#282828] p-1 text-xs">
            <button
              type="button"
              onClick={() => setShowAfter(false)}
              className={cn(
                'rounded-full px-3 py-1 transition-colors',
                !showAfter ? 'bg-white text-black' : 'text-neutral-400',
              )}
            >
              Before
            </button>
            <button
              type="button"
              onClick={() => setShowAfter(true)}
              className={cn(
                'rounded-full px-3 py-1 transition-colors',
                showAfter ? 'bg-white text-black' : 'text-neutral-400',
              )}
            >
              After (live)
            </button>
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-[#181818]">
          {showAfter ? (
            <>
              <iframe
                title="On Demand Electrical live preview"
                src={LIVE_URL}
                className="h-full w-full bg-white"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-black"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#1db954]" />
                Open on-demand-electrical.com
              </a>
            </>
          ) : (
            <div className="flex h-full flex-col bg-[#e8e6e1] p-6 text-zinc-600">
              <div className="mb-4 flex justify-between border-b border-zinc-400/50 pb-3 text-xs font-bold uppercase tracking-wide text-zinc-500">
                <span>Contractor Template Co.</span>
                <span>Home · About · Contact</span>
              </div>
              <div className="my-auto space-y-3">
                <p className="text-xl font-bold text-zinc-700">
                  Welcome to our electrical services
                </p>
                <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
                  We have been in business for many years. Call us for more
                  information about what we can do for you.
                </p>
                <div className="h-2 w-4/5 max-w-xs rounded bg-zinc-400/60" />
                <div className="h-2 w-3/5 max-w-xs rounded bg-zinc-400/40" />
                <p className="text-[10px] text-zinc-400">
                  Phone number listed in footer only · Not mobile optimized
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-center text-sm sm:grid-cols-4">
          {[
            { l: 'Branding', before: 'Generic', after: 'Licensed SFV' },
            { l: 'Services', before: 'Buried', after: 'Emergency · EV · panels' },
            { l: 'Mobile UX', before: 'Poor', after: 'Optimized' },
            { l: 'Quote CTAs', before: 'Hidden', after: 'Free quotes' },
          ].map((m) => (
            <div key={m.l} className="rounded-lg bg-[#282828] p-3">
              <p className="text-lg font-bold text-white">
                {showAfter ? m.after : m.before}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                {m.l}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
