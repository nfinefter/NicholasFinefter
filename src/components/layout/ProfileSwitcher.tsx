import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { profiles } from '@/data/portfolio'
import { useProfile } from '@/hooks/useProfile'
import { getProfileIcon } from '@/lib/icons'
import { cn } from '@/lib/utils'

export function ProfileSwitcher({ className }: { className?: string }) {
  const navigate = useNavigate()
  const { profile, clearProfile } = useProfile()
  const meta = profiles.find((p) => p.id === profile)

  if (!meta) return null

  const Icon = getProfileIcon(meta.icon)

  const switchPerspective = () => {
    clearProfile()
    navigate('/')
  }

  return (
    <div className={cn('mt-auto border-t border-white/10 pt-4', className)}>
      <button
        type="button"
        onClick={switchPerspective}
        className="flex w-full items-center gap-3 rounded-md p-2 text-left transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1ed760]"
        aria-label="Switch perspective"
        title="Switch perspective"
      >
        <div
          className={cn(
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br',
            meta.accent,
          )}
        >
          <Icon className="size-4 text-white/90" strokeWidth={1.5} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">{meta.label}</p>
          <p className="truncate text-xs text-neutral-500">Switch perspective</p>
        </div>
        <LogOut className="size-5 shrink-0 text-neutral-400" aria-hidden />
      </button>
    </div>
  )
}
