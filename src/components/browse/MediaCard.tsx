import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PlaylistCover } from '@/components/PlaylistCover'
import { cn } from '@/lib/utils'
import { PLAYLIST_TYPE_LABELS, type CardVariant, type Playlist } from '@/data/portfolio'

interface MediaCardProps {
  item: Playlist
  variant?: CardVariant
  className?: string
}

export default function MediaCard({
  item,
  variant = 'square',
  className,
}: MediaCardProps) {
  const isWide = variant === 'wide'

  return (
    <motion.div
      className={cn('shrink-0', isWide ? 'w-[280px] sm:w-[320px]' : 'w-[160px] sm:w-[180px]', className)}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      <Link
        to={`/playlist/${item.slug}`}
        className="group block outline-none focus-visible:ring-2 focus-visible:ring-[#1ed760] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
      >
        <motion.div
          className={cn(
            'overflow-hidden rounded-md shadow-md transition-shadow duration-300 group-hover:shadow-[0_8px_32px_rgba(30,215,96,0.2)]',
            !item.image && item.mesh,
            isWide ? 'aspect-[2/1]' : 'aspect-square',
          )}
        >
          <PlaylistCover
            item={item}
            iconClassName={isWide ? 'h-12 w-12' : 'h-10 w-10'}
          />
        </motion.div>
        <p className="mt-3 truncate text-sm font-semibold text-white group-hover:text-[#1ed760]">
          {item.title}
        </p>
        <p className="mt-0.5 truncate text-xs text-neutral-400">
          {item.subtitle}
          <span className="text-neutral-500"> · {PLAYLIST_TYPE_LABELS[item.type]}</span>
        </p>
      </Link>
    </motion.div>
  )
}
