import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { profiles } from '@/data/portfolio'
import { useProfile } from '@/hooks/useProfile'
import { getProfileIcon } from '@/lib/icons'
import { cn } from '@/lib/utils'

export function AppHeader() {
  const navigate = useNavigate()
  const { profile, clearProfile } = useProfile()
  const meta = profiles.find((p) => p.id === profile)

  const switchPerspective = () => {
    clearProfile()
    navigate('/')
  }

  if (!meta) return null

  const Icon = getProfileIcon(meta.icon)

  return (
    <header
      className={cn(
        'sticky top-0 z-30 flex items-center justify-end gap-3',
        'border-b border-white/5 bg-[#121212]/90 px-4 py-3 backdrop-blur-md md:px-8',
      )}
    >
      <div className="mr-auto flex min-w-0 items-center gap-2">
        <div
          className={cn(
            'flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br',
            meta.accent,
          )}
        >
          <Icon className="size-3.5 text-white/90" strokeWidth={1.5} />
        </div>
        <span className="truncate text-sm text-neutral-400">
          <span className="font-medium text-white">{meta.label}</span> perspective
        </span>
      </div>

      <button
        type="button"
        onClick={switchPerspective}
        className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-[#282828] px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-[#3e3e3e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1ed760]"
        aria-label="Switch perspective"
        title="Switch perspective"
      >
        <LogOut className="size-4 shrink-0" aria-hidden />
        <span className="hidden sm:inline">Switch perspective</span>
        <span className="sm:hidden">Switch</span>
      </button>
    </header>
  )
}
