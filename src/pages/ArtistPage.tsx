import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BadgeCheck, Code2, Link2, Mail, Play } from 'lucide-react'
import { PlaylistCover } from '@/components/PlaylistCover'
import {
  artistProfile,
  contact,
  getExperiencePlaylists,
  getPlaylist,
  getPlaylistsByType,
  skills,
} from '@/data/portfolio'
import { usePlayer } from '@/hooks/usePlayer'
import type { Skill } from '@/data/portfolio'

const SKILL_GROUPS: { id: Skill['category']; label: string }[] = [
  { id: 'language', label: 'Languages & frameworks' },
  { id: 'tool', label: 'Tools & cloud' },
]

function SkillsByGroup() {
  return (
    <div className="space-y-6">
      {SKILL_GROUPS.map(({ id, label }) => {
        const group = skills
          .filter((s) => s.category === id)
          .sort((a, b) => b.level - a.level)

        if (group.length === 0) return null

        return (
          <div key={id}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              {label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-white/10 bg-[#282828] px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:border-[#1db954]/40 hover:bg-[#3e3e3e] hover:text-white"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function DiscographyGrid({ items }: { items: ReturnType<typeof getPlaylistsByType> }) {
  if (items.length === 0) return null

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((p) => (
        <Link
          key={p.slug}
          to={`/playlist/${p.slug}`}
          className="group rounded-lg bg-[#181818] p-4 transition-colors hover:bg-[#282828]"
        >
          <div className="mb-3 aspect-square overflow-hidden rounded-md">
            <PlaylistCover item={p} iconClassName="h-10 w-10" />
          </div>
          <p className="font-semibold text-white group-hover:text-[#1db954]">{p.title}</p>
          <p className="text-xs text-neutral-400">{p.subtitle}</p>
        </Link>
      ))}
    </div>
  )
}

export default function ArtistPage() {
  const { play } = usePlayer()
  const projects = getPlaylistsByType('project')
  const websites = getPlaylistsByType('website')
  const experience = getExperiencePlaylists()
  const education = getPlaylist('education')

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
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#282828] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3e3e3e]"
              >
                <Link2 className="h-4 w-4 text-[#1db954]" />
                LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#282828] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3e3e3e]"
              >
                <Code2 className="h-4 w-4 text-neutral-300" />
                GitHub
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#282828] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3e3e3e]"
              >
                <Mail className="h-4 w-4 text-neutral-300" />
                Email
              </a>
            </div>
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

        <section id="skills" className="mb-10 scroll-mt-24">
          <h2 className="mb-5 text-xl font-bold text-white">Skills</h2>
          <SkillsByGroup />
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-white">Experience</h2>
          <div className="space-y-3">
            {experience.map((job) => (
              <Link
                key={job.slug}
                to={`/playlist/${job.slug}`}
                className="group flex items-center gap-4 rounded-lg bg-[#181818] p-4 transition-colors hover:bg-[#282828]"
              >
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md">
                  <PlaylistCover item={job} iconClassName="h-8 w-8" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-white group-hover:text-[#1db954]">{job.title}</p>
                  <p className="text-sm text-neutral-400">
                    {job.employer}
                    {job.period && ` · ${job.period}`}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {education && (
          <section className="mb-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Education</h2>
              <Link
                to={`/playlist/${education.slug}`}
                className="text-sm font-medium text-[#1db954] hover:underline"
              >
                View details
              </Link>
            </div>
            <Link
              to={`/playlist/${education.slug}`}
              className="group flex items-center gap-4 rounded-lg bg-[#181818] p-4 transition-colors hover:bg-[#282828]"
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md">
                <PlaylistCover item={education} iconClassName="h-8 w-8" />
              </div>
              <div>
                <p className="font-semibold text-white group-hover:text-[#1db954]">{education.title}</p>
                <p className="text-sm text-neutral-400">{education.subtitle}</p>
              </div>
            </Link>
          </section>
        )}

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-white">Projects</h2>
          <DiscographyGrid items={projects} />
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-white">Websites</h2>
          <DiscographyGrid items={websites} />
        </section>
      </div>
    </motion.div>
  )
}
