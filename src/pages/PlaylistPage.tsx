import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Heart, Pause, Play } from 'lucide-react'
import { PlaylistCover } from '@/components/PlaylistCover'
import { ExternalLinks } from '@/components/playlist/ExternalLinks'
import { PlaylistDemo } from '@/components/playlist/demos'
import {
  getPlaylist,
  LEGACY_SLUG_REDIRECTS,
  PLAYLIST_TYPE_LABELS,
} from '@/data/portfolio'
import { useLiked } from '@/hooks/useLiked'
import { usePlayer } from '@/hooks/usePlayer'
import { cn } from '@/lib/utils'

export default function PlaylistPage() {
  const { slug } = useParams<{ slug: string }>()
  const { current, play, isPlaying, toggle } = usePlayer()
  const { toggle: toggleLike, isLiked } = useLiked()

  if (slug && LEGACY_SLUG_REDIRECTS[slug]) {
    return <Navigate to={`/playlist/${LEGACY_SLUG_REDIRECTS[slug]}`} replace />
  }

  const playlist = slug ? getPlaylist(slug) : undefined

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
          <div className="h-40 w-40 shrink-0 overflow-hidden rounded-md shadow-2xl sm:h-56 sm:w-56">
            <PlaylistCover
              item={playlist}
              iconClassName="h-16 w-16 sm:h-24 sm:w-24"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase">
              {PLAYLIST_TYPE_LABELS[playlist.type]}
            </p>
            <h1 className="mt-2 text-3xl font-black text-white md:text-6xl">{playlist.title}</h1>
            {playlist.type === 'experience' && playlist.employer && (
              <p className="mt-2 text-sm font-medium text-white/90">
                {playlist.employer}
                {playlist.period && (
                  <span className="text-white/60"> · {playlist.period}</span>
                )}
              </p>
            )}
            <p className="mt-2 text-sm text-white/80">{playlist.description}</p>
            <p className="mt-2 text-xs text-white/60">{playlist.tracks.length} tracks</p>
            <ExternalLinks links={playlist.links} className="mt-4" />
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
