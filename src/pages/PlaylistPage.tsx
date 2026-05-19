import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, Clock, Heart, Pause, Play } from 'lucide-react'
import { getPlaylist } from '@/data/portfolio'
import { useLiked } from '@/hooks/useLiked'
import { usePlayer } from '@/hooks/usePlayer'
import { cn } from '@/lib/utils'

const strategies = ['Momentum', 'Mean Reversion', 'Breakout']

function StockBotDemo() {
  const [strategy, setStrategy] = useState(0)
  const [trades, setTrades] = useState([
    '[09:31:02] BUY  AAPL × 25  @ 182.40',
    '[09:31:14] SELL TSLA × 10  @ 241.85',
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      const tickers = ['AAPL', 'TSLA', 'NVDA', 'MSFT', 'AMD', 'META']
      const action = Math.random() > 0.5 ? 'BUY ' : 'SELL'
      const t = tickers[Math.floor(Math.random() * tickers.length)]!
      const qty = Math.floor(Math.random() * 50) + 5
      const price = (100 + Math.random() * 200).toFixed(2)
      const time = new Date().toLocaleTimeString('en-US', { hour12: false })
      setTrades((prev) => [`[${time}] ${action} ${t} × ${qty}  @ ${price}`, ...prev].slice(0, 6))
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">Strategies</p>
        <div className="flex flex-wrap gap-2">
          {strategies.map((s, i) => (
            <button
              key={s}
              type="button"
              onClick={() => setStrategy(i)}
              className={cn(
                'rounded-full px-4 py-1.5 text-xs font-medium transition-colors',
                strategy === i
                  ? 'bg-white text-black'
                  : 'bg-[#282828] text-neutral-300 hover:bg-[#3e3e3e]',
              )}
            >
              {s}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-neutral-400">
          Active: <span className="text-white">{strategies[strategy]}</span> · simulated 24h run
        </p>
      </div>
      <div className="rounded-lg border border-white/10 bg-black/40 p-4 font-mono text-xs">
        <div className="mb-2 flex items-center gap-2 text-neutral-500">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <span className="ml-2">stockbot — executing</span>
        </div>
        {trades.map((t, i) => (
          <div key={`${t}-${i}`} className="text-neutral-200">
            <span className="text-neutral-500">$</span> {t}
          </div>
        ))}
      </div>
    </div>
  )
}

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const step = (now: number) => {
      const p = Math.min((now - start) / 1500, 1)
      setV(Math.floor(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to])
  return (
    <>
      {suffix === '$' && '$'}
      {v.toLocaleString()}
      {suffix !== '$' ? suffix : ''}
    </>
  )
}

function CreatorAnalyticsDemo() {
  const stats = [
    { label: 'Revenue', value: 48230, suffix: '$' },
    { label: 'Audience', value: 12400, suffix: '' },
    { label: 'Growth', value: 27, suffix: '%' },
    { label: 'Streams', value: 6, suffix: '' },
  ]
  const bars = Array.from({ length: 24 }, (_, i) => 30 + Math.sin(i / 2) * 20 + ((i * 7) % 35))

  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg bg-[#282828] p-4">
            <p className="text-xs text-neutral-400">{s.label}</p>
            <p className="mt-1 text-xl font-bold text-white">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
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

function AdaptiveQuizDemo() {
  const question = {
    q: 'What does QA stand for?',
    answers: ['Quick Answer', 'Quality Assurance', 'Question Array'],
    correct: 1,
  }
  const [picked, setPicked] = useState<number | null>(null)

  return (
    <div className="mt-8 max-w-lg rounded-xl bg-[#282828] p-6">
      <p className="mb-4 font-semibold text-white">{question.q}</p>
      <div className="space-y-2">
        {question.answers.map((a, i) => (
          <button
            key={a}
            type="button"
            disabled={picked !== null}
            onClick={() => setPicked(i)}
            className={cn(
              'flex w-full items-center justify-between rounded-lg border px-4 py-2.5 text-left text-sm transition-colors',
              picked === i && i === question.correct && 'border-[#1db954] bg-[#1db954]/10',
              picked === i && i !== question.correct && 'border-red-500/50 bg-red-500/10',
              picked === null && 'border-white/10 hover:bg-[#3e3e3e]',
            )}
          >
            {a}
            {picked === i && i === question.correct && <Check className="h-4 w-4 text-[#1db954]" />}
          </button>
        ))}
      </div>
    </div>
  )
}

function OnDemandElectricalDemo() {
  const [showAfter, setShowAfter] = useState(true)

  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center justify-between">
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
            After
          </button>
        </div>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-[#181818]">
        {showAfter ? (
          <img
            src="/ondemandelectrical-homepage.png"
            alt="On Demand Electrical website homepage"
            className="h-full w-full bg-white object-contain object-top"
          />
        ) : (
          <div className="flex h-full flex-col bg-[#f3f3f0] p-6 text-zinc-700">
            <div className="mb-6 flex justify-between border-b border-zinc-300 pb-3 text-sm font-bold">
              Joe&apos;s Plumbing
              <span className="text-[10px] font-normal">HOME · SERVICES · CONTACT</span>
            </div>
            <div className="my-auto space-y-2">
              <div className="text-lg font-bold">Welcome to our website!</div>
              <div className="h-2 w-2/3 rounded bg-zinc-400" />
              <div className="h-2 w-1/2 rounded bg-zinc-400" />
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
        {[
          { l: 'Load time', v: showAfter ? '0.9s' : '4.2s' },
          { l: 'Lighthouse', v: showAfter ? '98' : '54' },
          { l: 'Conversions', v: showAfter ? '+312%' : '—' },
        ].map((m) => (
          <div key={m.l} className="rounded-lg bg-[#282828] p-3">
            <p className="text-lg font-bold text-white">{m.v}</p>
            <p className="text-[10px] uppercase tracking-wider text-neutral-500">{m.l}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PlaylistDemo({ slug }: { slug: string }) {
  switch (slug) {
    case 'stockbot':
      return <StockBotDemo />
    case 'creator-analytics':
      return <CreatorAnalyticsDemo />
    case 'adaptive-quiz':
      return <AdaptiveQuizDemo />
    case 'on-demand-electrical':
      return <OnDemandElectricalDemo />
    default:
      return null
  }
}

export default function PlaylistPage() {
  const { slug } = useParams<{ slug: string }>()
  const playlist = slug ? getPlaylist(slug) : undefined
  const { current, play, isPlaying, toggle } = usePlayer()
  const { toggle: toggleLike, isLiked } = useLiked()

  if (!playlist) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6">
        <p className="text-neutral-400">Playlist not found.</p>
        <Link to="/browse" className="text-[#1db954] hover:underline">
          Back to Home
        </Link>
      </div>
    )
  }

  const liked = isLiked(playlist.slug)
  const isCurrentTrack = current.slug === playlist.slug
  const showPause = isCurrentTrack && isPlaying

  return (
    <div className="pb-8">
      <motion.header
        className={cn('relative px-4 pb-6 pt-6 md:px-8 md:pt-10', playlist.mesh)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-end">
          <div
            className="h-40 w-40 shrink-0 rounded-md shadow-2xl sm:h-56 sm:w-56"
            style={{
              background: playlist.image
                ? undefined
                : `linear-gradient(135deg, ${playlist.gradientFrom}, ${playlist.gradientTo})`,
            }}
          >
            {playlist.image && (
              <img
                src={playlist.image}
                alt={playlist.title}
                className="h-full w-full rounded-md object-cover object-top"
              />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase">{playlist.type}</p>
            <h1 className="mt-2 text-3xl font-black text-white md:text-6xl">{playlist.title}</h1>
            <p className="mt-2 text-sm text-white/80">{playlist.description}</p>
            <p className="mt-2 text-xs text-white/60">{playlist.tracks.length} tracks</p>
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (isCurrentTrack) toggle()
                  else play(playlist.slug)
                }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1db954] text-black hover:scale-105"
                aria-label={showPause ? 'Pause' : 'Play'}
              >
                {showPause ? (
                  <Pause className="h-7 w-7 fill-black" />
                ) : (
                  <Play className="h-7 w-7 fill-black" />
                )}
              </button>
              <button
                type="button"
                onClick={() => toggleLike(playlist.slug)}
                className="text-neutral-300 hover:text-white"
                aria-label={liked ? 'Unlike' : 'Like'}
              >
                <Heart className={cn('h-8 w-8', liked && 'fill-[#1db954] text-[#1db954]')} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="px-4 md:px-8">
        <table className="mt-6 w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-neutral-400">
              <th className="pb-2 pl-2 font-normal">#</th>
              <th className="pb-2 font-normal">Title</th>
              <th className="hidden pb-2 font-normal md:table-cell">Detail</th>
              <th className="pb-2 pr-2 text-right font-normal">
                <Clock className="ml-auto h-4 w-4" />
              </th>
            </tr>
          </thead>
          <tbody>
            {playlist.tracks.map((track, i) => (
              <tr
                key={track.id}
                className="group rounded-md hover:bg-white/10"
              >
                <td className="py-2 pl-2 text-neutral-400 group-hover:text-white">{i + 1}</td>
                <td className="py-2">
                  <p className="font-medium text-white">{track.title}</p>
                  {track.subtitle && (
                    <p className="text-xs text-neutral-400 md:hidden">{track.subtitle}</p>
                  )}
                </td>
                <td className="hidden py-2 text-neutral-400 md:table-cell">
                  {track.subtitle ?? '—'}
                </td>
                <td className="py-2 pr-2 text-right text-neutral-400">{track.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <PlaylistDemo slug={playlist.slug} />
      </div>
    </div>
  )
}
