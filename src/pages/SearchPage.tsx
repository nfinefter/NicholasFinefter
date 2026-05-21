import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search as SearchIcon } from 'lucide-react'
import { PlaylistCover } from '@/components/PlaylistCover'
import { focusAreas, PLAYLIST_TYPE_LABELS, playlists, skills } from '@/data/portfolio'
import { cn } from '@/lib/utils'

type Category = 'all' | 'projects' | 'websites' | 'experience' | 'skills'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Category>('all')

  const results = useMemo(() => {
    const q = query.toLowerCase().trim()
    const playlistResults = playlists.filter((p) => {
      if (category === 'projects' && p.type !== 'project') return false
      if (category === 'websites' && p.type !== 'website') return false
      if (category === 'experience' && p.type !== 'experience') return false
      if (category === 'skills') return false
      if (!q) return true
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.employer?.toLowerCase().includes(q) ||
        p.period?.toLowerCase().includes(q)
      )
    })

    const skillResults =
      category === 'websites' || category === 'experience'
        ? []
        : [...skills.map((s) => s.name), ...focusAreas].filter((name) => {
            if (category === 'projects') return false
            if (!q) return category === 'skills' || category === 'all'
            return name.toLowerCase().includes(q)
          })

    return { playlists: playlistResults, skills: [...new Set(skillResults)] }
  }, [query, category])

  const empty = results.playlists.length === 0 && results.skills.length === 0

  return (
    <motion.div
      className="px-4 py-6 md:px-8 md:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="mb-6 text-2xl font-bold text-white md:text-3xl">Search</h1>

      <div className="relative mb-6">
        <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What do you want to find?"
          className="w-full rounded-full bg-white py-3.5 pl-12 pr-4 text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#1db954]"
          autoFocus
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {(
          [
            ['all', 'All'],
            ['projects', 'Projects'],
            ['websites', 'Websites'],
            ['experience', 'Experience'],
            ['skills', 'Skills'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setCategory(id)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              category === id ? 'bg-white text-black' : 'bg-[#282828] text-white hover:bg-[#3e3e3e]',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {empty ? (
        <p className="text-neutral-400">No results. Try &quot;StockBot&quot; or &quot;Lighthouse&quot;.</p>
      ) : (
        <>
          {results.playlists.length > 0 && (
            <section className="mb-8">
              <h2 className="mb-4 text-lg font-bold text-white">Playlists</h2>
              <motion.div className="grid gap-2">
                {results.playlists.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/playlist/${p.slug}`}
                    className="flex items-center gap-4 rounded-md p-2 hover:bg-[#282828]"
                  >
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded">
                      <PlaylistCover item={p} iconClassName="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{p.title}</p>
                      <p className="text-sm text-neutral-400">
                        {p.subtitle}
                        <span className="text-neutral-500"> · {PLAYLIST_TYPE_LABELS[p.type]}</span>
                      </p>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </section>
          )}
          {results.skills.length > 0 && (
            <section>
              <h2 className="mb-4 text-lg font-bold text-white">Skills & focus</h2>
              <div className="flex flex-wrap gap-2">
                {results.skills.map((s) => (
                  <Link
                    key={s}
                    to="/artist/me#skills"
                    className="rounded-full bg-[#282828] px-4 py-2 text-sm text-white transition-colors hover:bg-[#3e3e3e]"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </motion.div>
  )
}
