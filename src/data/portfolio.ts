export type ProfileType = 'recruiter' | 'client' | 'explorer'

export interface Track {
  id: string
  title: string
  subtitle?: string
  duration: string
}

export interface PlaylistItem {
  slug: string
  title: string
  subtitle: string
  description: string
  type: 'project' | 'website'
  gradientFrom: string
  gradientTo: string
  mesh: string
  gradient: string
  image?: string
  tracks: Track[]
  tags: string[]
}

/** @deprecated Use PlaylistItem */
export type Playlist = PlaylistItem

export type CardVariant = 'square' | 'wide'

export interface BrowseRow {
  id: string
  title: string
  playlistSlugs: string[]
  variant?: CardVariant
}

export interface Skill {
  name: string
  level: number
  category: 'language' | 'tool'
}

export interface Profile {
  id: ProfileType
  label: string
  hint: string
  greeting: string
  emoji: string
  icon: string
}

export const person = {
  shortName: 'Nicholas',
  fullName: 'Nicholas Finefter',
  tagline:
    'I build clean websites and useful software that help real businesses look better, move faster, and convert more.',
}

export const fullName = person.fullName
export const tagline = person.tagline

export const aboutBio = [
  'I started in Quality Assurance, where I learned how real systems break — and how to make them resilient. That foundation pushed me into software development, where I now design and ship tools that solve real problems for real people.',
  "My focus today is software, automation, and websites. I don't just write code. I build systems that are clear, useful, and made to last.",
]

export const focusAreas = [
  'AI',
  'Automation',
  'Web Dev',
  'Data',
  'QA',
  'DevOps',
]

export const featuredPlaylist = 'stockbot'
export const featuredSlug = featuredPlaylist
export const featuredPlaylistSlug = featuredPlaylist

export const profiles: Profile[] = [
  {
    id: 'recruiter',
    label: 'Recruiter',
    hint: 'Hiring focus',
    emoji: '💼',
    icon: 'briefcase',
    greeting: 'Skills and shipped projects — tuned for technical review.',
  },
  {
    id: 'client',
    label: 'Client',
    hint: 'Project outcomes',
    emoji: '🤝',
    icon: 'users',
    greeting: 'Outcomes, metrics, and website case studies front and center.',
  },
  {
    id: 'explorer',
    label: 'Explorer',
    hint: 'Full portfolio',
    emoji: '🧭',
    icon: 'compass',
    greeting: 'Everything — dig into demos and the full builder story.',
  },
]

export const playlists: PlaylistItem[] = [
  {
    slug: 'stockbot',
    title: 'StockBot',
    subtitle: 'Automated trading',
    description:
      'Automated trading bot that executes isolated strategies on schedule via API, with built-in performance tracking and risk controls.',
    type: 'project',
    gradientFrom: '#334155',
    gradientTo: '#064e3b',
    mesh: 'bg-gradient-to-br from-slate-700 via-slate-800 to-emerald-950',
    gradient: 'linear-gradient(135deg, #334155, #064e3b)',
    tags: ['Python', 'Automation', 'APIs', 'Trading'],
    tracks: [
      {
        id: 'sb-1',
        title: 'Strategy isolation',
        subtitle: 'Per-process execution',
        duration: '3:42',
      },
      {
        id: 'sb-2',
        title: 'Scheduled API polling',
        subtitle: 'Cron-driven execution',
        duration: '2:18',
      },
      {
        id: 'sb-3',
        title: 'Live P&L tracking',
        subtitle: 'Real-time performance',
        duration: '4:05',
      },
      {
        id: 'sb-4',
        title: 'Risk controls',
        subtitle: 'Position limits & stops',
        duration: '1:56',
      },
      {
        id: 'sb-5',
        title: 'Trade log stream',
        subtitle: 'BUY/SELL audit trail',
        duration: '3:11',
      },
    ],
  },
  {
    slug: 'creator-analytics',
    title: 'Creator Analytics',
    subtitle: 'Revenue dashboard',
    description:
      'Aggregates revenue across platforms and surfaces growth insights in one dashboard for creators.',
    type: 'project',
    gradientFrom: '#7c3aed',
    gradientTo: '#312e81',
    mesh: 'bg-gradient-to-br from-violet-600 via-purple-800 to-indigo-950',
    gradient: 'linear-gradient(135deg, #7c3aed, #312e81)',
    tags: ['React', 'Data', 'Dashboard'],
    tracks: [
      { id: 'ca-1', title: 'Revenue aggregation', duration: '$48.2k' },
      { id: 'ca-2', title: 'Audience metrics', duration: '12.4k' },
      { id: 'ca-3', title: 'Growth insights', duration: '+27%' },
      { id: 'ca-4', title: 'Platform streams', duration: '6 platforms' },
      { id: 'ca-5', title: 'Export reports', duration: '2:30' },
    ],
  },
  {
    slug: 'adaptive-quiz',
    title: 'Adaptive Quiz Generator',
    subtitle: 'Dynamic quizzes',
    description:
      'Generates dynamic quizzes from study guides and gives real-time feedback as learners progress.',
    type: 'project',
    gradientFrom: '#0891b2',
    gradientTo: '#0f172a',
    mesh: 'bg-gradient-to-br from-cyan-600 via-blue-800 to-slate-900',
    gradient: 'linear-gradient(135deg, #0891b2, #0f172a)',
    tags: ['React', 'Education', 'AI'],
    tracks: [
      { id: 'aq-1', title: 'Study guide parsing', duration: '3:20' },
      { id: 'aq-2', title: 'Dynamic question gen', duration: '2:45' },
      { id: 'aq-3', title: 'Real-time feedback', duration: '1:58' },
      { id: 'aq-4', title: 'Progress tracking', duration: '2:12' },
      { id: 'aq-5', title: 'Adaptive difficulty', duration: '3:33' },
    ],
  },
  {
    slug: 'on-demand-electrical',
    title: 'On Demand Electrical',
    subtitle: 'Website case study',
    description:
      'High-converting website rebuild for a local electrical business — sub-second loads, Lighthouse 98, and +312% conversions.',
    type: 'website',
    gradientFrom: '#d97706',
    gradientTo: '#713f12',
    mesh: 'bg-gradient-to-br from-amber-600 via-orange-700 to-yellow-900',
    gradient: 'linear-gradient(135deg, #d97706, #713f12)',
    image: '/ondemandelectrical-homepage.png',
    tags: ['Web', 'SEO', 'Performance'],
    tracks: [
      { id: 'ode-1', title: 'Load time', duration: '0.9s' },
      { id: 'ode-2', title: 'Lighthouse score', duration: '98' },
      { id: 'ode-3', title: 'Conversion lift', duration: '+312%' },
      { id: 'ode-4', title: 'Custom design', duration: '4:20' },
      { id: 'ode-5', title: 'SEO architecture', duration: '3:15' },
    ],
  },
]

export const browseRows: BrowseRow[] = [
  {
    id: 'projects',
    title: 'Featured projects',
    playlistSlugs: ['stockbot', 'creator-analytics', 'adaptive-quiz'],
  },
  {
    id: 'business',
    title: 'Website case studies',
    playlistSlugs: ['on-demand-electrical'],
    variant: 'wide',
  },
  {
    id: 'jump-back',
    title: 'Jump back in',
    playlistSlugs: playlists.map((p) => p.slug),
  },
]

export const skills: Skill[] = [
  { name: 'Python', level: 88, category: 'language' },
  { name: 'React', level: 92, category: 'language' },
  { name: 'Express', level: 90, category: 'language' },
  { name: 'Git', level: 90, category: 'tool' },
  { name: 'REST APIs', level: 90, category: 'tool' },
  { name: 'SQL', level: 85, category: 'tool' },
  { name: 'Test Automation', level: 92, category: 'tool' },
]

export const artistProfile = {
  name: fullName,
  tagline,
  bio: aboutBio,
  monthlyListeners: '2,847 builders',
  verified: true,
}

export function getPlaylist(slug: string): PlaylistItem | undefined {
  return playlists.find((p) => p.slug === slug)
}

export function getPlaylistBySlug(slug: string): PlaylistItem | undefined {
  return getPlaylist(slug)
}

export function getPlaylistsForRow(row: BrowseRow): PlaylistItem[] {
  return row.playlistSlugs
    .map((slug) => getPlaylist(slug))
    .filter((p): p is PlaylistItem => Boolean(p))
}

export function getBrowseRowsForProfile(
  profile: ProfileType | null,
): BrowseRow[] {
  if (profile === 'client') {
    return [
      browseRows.find((r) => r.id === 'business')!,
      browseRows.find((r) => r.id === 'projects')!,
      ...browseRows.filter((r) => !['business', 'projects'].includes(r.id)),
    ].filter(Boolean)
  }
  if (profile === 'recruiter') {
    return [
      browseRows.find((r) => r.id === 'projects')!,
      browseRows.find((r) => r.id === 'jump-back')!,
      ...browseRows.filter((r) => !['projects', 'jump-back'].includes(r.id)),
    ].filter(Boolean)
  }
  return browseRows
}
