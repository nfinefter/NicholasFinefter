import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  featuredPlaylist,
  getPlaylist,
  type PlaylistItem,
} from '@/data/portfolio'

interface PlayerContextValue {
  current: PlaylistItem
  play: (slug: string) => void
  isPlaying: boolean
  togglePlay: () => void
  toggle: () => void
}

const PlayerContext = createContext<PlayerContextValue | null>(null)

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [slug, setSlug] = useState(featuredPlaylist)
  const [isPlaying, setIsPlaying] = useState(true)

  const current = useMemo(
    () => getPlaylist(slug) ?? getPlaylist(featuredPlaylist)!,
    [slug],
  )

  const play = useCallback((nextSlug: string) => {
    setSlug(nextSlug)
    setIsPlaying(true)
  }, [])

  const togglePlay = useCallback(() => setIsPlaying((p) => !p), [])
  const toggle = togglePlay

  const value = useMemo(
    () => ({ current, play, isPlaying, togglePlay, toggle }),
    [current, play, isPlaying, togglePlay, toggle],
  )

  return createElement(PlayerContext.Provider, { value }, children)
}

export function usePlayer() {
  const ctx = useContext(PlayerContext)
  if (!ctx) {
    throw new Error('usePlayer must be used within PlayerProvider')
  }
  return ctx
}
