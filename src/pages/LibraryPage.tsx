import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { playlists } from '@/data/portfolio'
import { useLiked } from '@/hooks/useLiked'
import { cn } from '@/lib/utils'

type Tab = 'playlists' | 'liked'

export default function LibraryPage() {
  const [searchParams] = useSearchParams()
  const [tab, setTab] = useState<Tab>(() =>
    searchParams.get('filter') === 'liked' ? 'liked' : 'playlists',
  )
  const { liked, toggle, isLiked } = useLiked()

  const items = useMemo(() => {
    if (tab === 'liked') return playlists.filter((p) => liked.includes(p.slug))
    return playlists
  }, [tab, liked])

  return (
    <motion.div
      className="px-4 py-6 md:px-8 md:py-8"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="mb-6 text-2xl font-bold text-white md:text-3xl">Your Library</h1>

      <div className="mb-6 flex gap-2">
        {(
          [
            ['playlists', 'Playlists'],
            ['liked', 'Liked'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              tab === id ? 'bg-white text-black' : 'bg-[#282828] text-white hover:bg-[#3e3e3e]',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="group flex items-center gap-4 rounded-md p-2 hover:bg-[#282828]"
          >
            <Link to={`/playlist/${p.slug}`} className="flex flex-1 items-center gap-4">
              <div className={cn('h-14 w-14 shrink-0 rounded', p.mesh)} />
              <div className="min-w-0">
                <p className="truncate font-medium text-white">{p.title}</p>
                <p className="text-sm text-neutral-400">
                  {p.type === 'website' ? 'Album' : 'Playlist'} · {p.tracks.length} tracks
                </p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => toggle(p.slug)}
              className="p-2 text-neutral-400 transition-colors hover:text-[#1db954]"
              aria-label={isLiked(p.slug) ? 'Unlike' : 'Like'}
            >
              <Heart
                className={cn('h-5 w-5', isLiked(p.slug) && 'fill-[#1db954] text-[#1db954]')}
              />
            </button>
          </motion.div>
        ))}
      </div>

      {items.length === 0 && tab === 'liked' && (
        <p className="mt-4 text-neutral-400">No liked projects yet. Heart something from a playlist page.</p>
      )}
    </motion.div>
  )
}
