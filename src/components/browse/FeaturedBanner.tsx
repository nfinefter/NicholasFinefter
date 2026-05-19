import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Playlist } from '@/data/portfolio'
import { usePlayer } from '@/hooks/usePlayer'

interface FeaturedBannerProps {
  project: Playlist
  className?: string
}

export default function FeaturedBanner({ project, className }: FeaturedBannerProps) {
  const { play } = usePlayer()

  return (
    <motion.section
      className={cn('px-6 md:px-8', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.div
        className={cn(
          'relative overflow-hidden rounded-xl p-6 shadow-2xl md:p-10',
          project.mesh,
        )}
        whileHover={{ scale: 1.005 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-white/70">
          Featured project
        </span>
        <h2 className="max-w-xl text-2xl font-bold text-white md:text-4xl">{project.title}</h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/85 md:text-base">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => play(project.slug)}
            className="inline-flex items-center gap-2 rounded-full bg-[#1ed760] px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105 hover:bg-[#1fdf64] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1ed760] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
          >
            <Play className="h-5 w-5 fill-black" />
            Play case study
          </button>
          <Link
            to={`/playlist/${project.slug}`}
            className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
          >
            Learn more
          </Link>
        </div>
        <motion.div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.section>
  )
}
