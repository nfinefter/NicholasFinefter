import { useEffect, useState } from 'react'
import { Calendar, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const STRATEGIES = [
  'SMA Crossover',
  'RSI Mean Reversion',
  'MACD Signal',
  'Bollinger Bands',
  'Momentum',
  'VWAP Reversion',
  'Opening Range Breakout',
  'Pairs Trading',
] as const

export function StockBotDemo() {
  const [strategy, setStrategy] = useState(0)
  const [mode, setMode] = useState<'scheduled' | 'one-click'>('scheduled')
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
    <div className="mt-8">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          Paper trading · Alpaca
        </span>
        <span className="text-xs text-neutral-500">Simulated trade log</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Strategies
          </p>
          <div className="flex flex-wrap gap-2">
            {STRATEGIES.map((s, i) => (
              <button
                key={s}
                type="button"
                onClick={() => setStrategy(i)}
                className={cn(
                  'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
                  strategy === i
                    ? 'bg-white text-black'
                    : 'bg-[#282828] text-neutral-300 hover:bg-[#3e3e3e]',
                )}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-4 inline-flex rounded-full bg-[#282828] p-1 text-xs">
            <button
              type="button"
              onClick={() => setMode('scheduled')}
              className={cn(
                'flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors',
                mode === 'scheduled' ? 'bg-white text-black' : 'text-neutral-400',
              )}
            >
              <Calendar className="h-3.5 w-3.5" />
              Scheduled
            </button>
            <button
              type="button"
              onClick={() => setMode('one-click')}
              className={cn(
                'flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors',
                mode === 'one-click' ? 'bg-white text-black' : 'text-neutral-400',
              )}
            >
              <Zap className="h-3.5 w-3.5" />
              One-click
            </button>
          </div>

          <p className="mt-4 text-sm text-neutral-400">
            Active: <span className="text-white">{STRATEGIES[strategy]}</span>
            {mode === 'scheduled'
              ? ' · runs at market open today & tomorrow'
              : ' · run once immediately'}
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
    </div>
  )
}
