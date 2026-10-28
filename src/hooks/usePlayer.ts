import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useNavigate } from 'react-router-dom'
import {
  featuredPlaylist,
  getPlaylist,
  type PlaylistItem,
} from '@/data/portfolio'

interface PlayerContextValue {
  current: PlaylistItem
  play: (slug: string) => void
  playAndOpen: (slug: string) => void
  isPlaying: boolean
  togglePlay: () => void
  toggle: () => void
}

const PlayerContext = createContext<PlayerContextValue | null>(null)

export function PlayerProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
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

  const playAndOpen = useCallback(
    (nextSlug: string) => {
      play(nextSlug)
      navigate(`/playlist/${nextSlug}`)
    },
    [play, navigate],
  )

  const togglePlay = useCallback(() => setIsPlaying((p) => !p), [])
  const toggle = togglePlay

  const value = useMemo(
    () => ({ current, play, playAndOpen, isPlaying, togglePlay, toggle }),
    [current, play, playAndOpen, isPlaying, togglePlay, toggle],
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
