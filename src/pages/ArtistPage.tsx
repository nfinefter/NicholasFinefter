import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BadgeCheck, Play } from 'lucide-react'
import { artistProfile, playlists, skills } from '@/data/portfolio'
import { usePlayer } from '@/hooks/usePlayer'
export default function ArtistPage() {
  const { play } = usePlayer()
  const popularTracks = skills.slice(0, 5)

  return (
    <motion.div
      className="pb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <header
        className="relative px-4 pb-8 pt-8 md:px-8 md:pt-12"
        style={{
          background:
            'linear-gradient(180deg, rgb(29 185 84 / 0.35) 0%, #121212 70%)',
        }}
      >
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[#1db954] to-emerald-900 text-5xl font-black text-white shadow-2xl">
            NF
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
              Artist
            </p>
            <h1 className="mt-1 flex items-center justify-center gap-2 text-4xl font-black text-white md:justify-start md:text-6xl">
              {artistProfile.name}
              {artistProfile.verified && (
                <BadgeCheck className="h-8 w-8 fill-[#3d91f4] text-[#121212]" aria-label="Verified" />
              )}
            </h1>
            <p className="mt-2 text-sm text-neutral-300">{artistProfile.monthlyListeners}</p>
          </div>
        </div>
      </header>

      <div className="px-4 md:px-8">
        <button
          type="button"
          onClick={() => play('stockbot')}
          className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#1db954] text-black hover:scale-105"
          aria-label="Play featured"
        >
          <Play className="h-7 w-7 fill-black" />
        </button>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-white">About</h2>
          <p className="mb-3 text-sm leading-relaxed text-neutral-300">{artistProfile.tagline}</p>
          {artistProfile.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mb-3 text-sm leading-relaxed text-neutral-400">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-white">Popular tracks</h2>
          <ol className="space-y-1">
            {popularTracks.map((skill, i) => (
              <li
                key={skill.name}
                className="group flex items-center gap-4 rounded-md p-2 hover:bg-[#282828]"
              >
                <span className="w-6 text-center text-sm text-neutral-500">{i + 1}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[#282828] text-xs font-bold text-[#1db954]">
                  {skill.level}%
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white">{skill.name}</p>
                  <p className="text-xs text-neutral-400 capitalize">{skill.category}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-white">Discography</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {playlists.map((p) => (
              <Link
                key={p.slug}
                to={`/playlist/${p.slug}`}
                className="group rounded-lg bg-[#181818] p-4 transition-colors hover:bg-[#282828]"
              >
                <div
                  className="mb-3 aspect-square rounded-md"
                  style={{
                    background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`,
                  }}
                />
                <p className="font-semibold text-white group-hover:text-[#1db954]">{p.title}</p>
                <p className="text-xs text-neutral-400">{p.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  )
}
