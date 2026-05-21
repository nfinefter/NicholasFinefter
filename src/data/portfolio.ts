export type ProfileType = 'recruiter' | 'client' | 'explorer'

export type PlaylistType = 'project' | 'website' | 'experience' | 'compilation'

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
  type: PlaylistType
  icon: string
  gradientFrom: string
  gradientTo: string
  mesh: string
  gradient: string
  image?: string
  tracks: Track[]
  tags: string[]
  links?: { github?: string; live?: string }
  employer?: string
  period?: string
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
  accent: string
}

/** Audience perspectives (subagents) that tailor the portfolio experience */
export type Perspective = Profile

export const person = {
  shortName: 'Nicholas',
  fullName: 'Nicholas Finefter',
  tagline:
    'Software engineering student building scalable full-stack applications with React, Express, and AWS — from QA discipline to shipped products.',
}

export const fullName = person.fullName
export const tagline = person.tagline

export const contact = {
  email: 'nfinefter@gmail.com',
  linkedin: 'https://linkedin.com/in/nicholas-finefter',
  github: 'https://github.com/nfinefter',
}

export const aboutBio = [
  'At ESHYFT I tested 50+ web and mobile features, executed 200+ manual and automated test cases, and caught 30+ critical defects pre-release — reducing production issues by 15% and helping releases ship 30% faster.',
  'I now develop full-stack at Markbase Ai (React, Express, AWS, DynamoDB, Cognito), and build PulseDash, StockBot, and QuizBuddy — unified creator analytics, automated trading, and AI-powered study quizzes.',
]

export const focusAreas = [
  'AI',
  'Automation',
  'Web Dev',
  'Data',
  'QA',
  'DevOps',
  'Cloud',
]

export const featuredPlaylist = 'stockbot'
export const featuredSlug = featuredPlaylist
export const featuredPlaylistSlug = featuredPlaylist

export const featuredByProfile: Record<ProfileType, string> = {
  recruiter: 'markbase',
  client: 'on-demand-electrical',
  explorer: 'stockbot',
}

export const LEGACY_SLUG_REDIRECTS: Record<string, string> = {
  'creator-analytics': 'pulse-dash',
}

export const PLAYLIST_TYPE_LABELS: Record<PlaylistType, string> = {
  project: 'Project',
  website: 'Website',
  experience: 'Experience',
  compilation: 'Compilation',
}

export const profiles: Profile[] = [
  {
    id: 'recruiter',
    label: 'Recruiter',
    hint: 'Hiring focus',
    emoji: '💼',
    icon: 'briefcase',
    accent: 'from-green-500 to-emerald-700',
    greeting: 'Skills and shipped projects — tuned for technical review.',
  },
  {
    id: 'client',
    label: 'Client',
    hint: 'Project outcomes',
    emoji: '🤝',
    icon: 'users',
    accent: 'from-blue-500 to-indigo-700',
    greeting: 'Outcomes, metrics, and website case studies front and center.',
  },
  {
    id: 'explorer',
    label: 'Explorer',
    hint: 'Full portfolio',
    emoji: '🧭',
    icon: 'compass',
    accent: 'from-violet-500 to-purple-700',
    greeting: 'Everything — dig into demos and the full builder story.',
  },
]

export const perspectives = profiles

export const playlists: PlaylistItem[] = [
  {
    slug: 'stockbot',
    title: 'StockBot',
    subtitle: 'Automated trading',
    icon: 'stock',
    description:
      'Python backend executes automated stock and cryptocurrency trades from dynamic strategy logic and real-time market data. React dashboard monitors portfolio performance, trading signals, and live positions via REST APIs.',
    type: 'project',
    gradientFrom: '#334155',
    gradientTo: '#064e3b',
    mesh: 'bg-gradient-to-br from-slate-700 via-slate-800 to-emerald-950',
    gradient: 'linear-gradient(135deg, #334155, #064e3b)',
    image: '/logos/stockbot.svg',
    tags: ['Python', 'React', 'REST APIs', 'Crypto & Equities'],
    links: {
      github: 'https://github.com/nfinefter/StockBot',
    },
    tracks: [
      {
        id: 'sb-1',
        title: 'Python trading backend',
        subtitle: 'Dynamic strategy logic & market data',
        duration: '4:12',
      },
      {
        id: 'sb-2',
        title: 'Stocks & crypto execution',
        subtitle: 'Automated trades via REST APIs',
        duration: '3:45',
      },
      {
        id: 'sb-3',
        title: 'React performance dashboard',
        subtitle: 'Portfolio value & live positions',
        duration: '4:05',
      },
      {
        id: 'sb-4',
        title: 'Trading signals',
        subtitle: 'Strategy output surfaced in UI',
        duration: '2:18',
      },
      {
        id: 'sb-5',
        title: 'Integrated API endpoints',
        subtitle: 'Frontend ↔ backend monitoring',
        duration: '3:11',
      },
    ],
  },
  {
    slug: 'pulse-dash',
    title: 'PulseDash',
    subtitle: 'Creator revenue dashboard',
    icon: 'chart',
    description:
      'Unified creator analytics: link multiple social accounts, consolidate revenue streams in one dashboard, and surface actionable growth recommendations from engagement and earnings data.',
    type: 'project',
    gradientFrom: '#7c3aed',
    gradientTo: '#312e81',
    mesh: 'bg-gradient-to-br from-violet-600 via-purple-800 to-indigo-950',
    gradient: 'linear-gradient(135deg, #7c3aed, #312e81)',
    image: '/logos/pulse-dash.svg',
    tags: ['React', 'Tailwind', 'Supabase'],
    links: {
      live: 'https://pulsedash.dev',
      github: 'https://github.com/nfinefter/creator-pulse-dashboard',
    },
    tracks: [
      {
        id: 'pd-1',
        title: 'Multi-platform linking',
        subtitle: 'Connect social accounts in one place',
        duration: '3:40',
      },
      {
        id: 'pd-2',
        title: 'Revenue consolidation',
        subtitle: 'Single dashboard for all streams',
        duration: '4:12',
      },
      {
        id: 'pd-3',
        title: 'Engagement & earnings insights',
        subtitle: 'Performance tracking across platforms',
        duration: '3:55',
      },
      {
        id: 'pd-4',
        title: 'Growth recommendations',
        subtitle: 'Actionable tips for audience & revenue',
        duration: '3:20',
      },
      {
        id: 'pd-5',
        title: 'Optimization guidance',
        subtitle: 'Expansion and revenue maximization',
        duration: '2:48',
      },
    ],
  },
  {
    slug: 'adaptive-quiz',
    title: 'QuizBuddy',
    subtitle: 'Adaptive quiz generator',
    icon: 'quiz',
    description:
      'Upload study guides to automatically generate custom quizzes with dynamic content processing. Real-time feedback and answer evaluation with immediate explanations reinforce course material.',
    type: 'project',
    gradientFrom: '#0891b2',
    gradientTo: '#0f172a',
    mesh: 'bg-gradient-to-br from-cyan-600 via-blue-800 to-slate-900',
    gradient: 'linear-gradient(135deg, #0891b2, #0f172a)',
    image: '/logos/quizbuddy.svg',
    tags: ['React', 'Tailwind', 'OpenAI'],
    links: {
      github: 'https://github.com/nfinefter/QuizBuddy',
    },
    tracks: [
      {
        id: 'aq-1',
        title: 'Study guide upload',
        subtitle: 'PDF, docs, and pasted notes',
        duration: '3:20',
      },
      {
        id: 'aq-2',
        title: 'Dynamic quiz generation',
        subtitle: 'OpenAI-powered question banks',
        duration: '2:45',
      },
      {
        id: 'aq-3',
        title: 'Real-time feedback',
        subtitle: 'Instant evaluation per answer',
        duration: '1:58',
      },
      {
        id: 'aq-4',
        title: 'Answer explanations',
        subtitle: 'Why each option is right or wrong',
        duration: '2:12',
      },
      {
        id: 'aq-5',
        title: 'Interactive learning flow',
        subtitle: 'Navigate full generated quiz banks',
        duration: '3:33',
      },
    ],
  },
  {
    slug: 'on-demand-electrical',
    title: 'On Demand Electrical',
    subtitle: 'Client website · SFV electricians',
    icon: 'bolt',
    description:
      'Client project (not listed on resume): end-to-end website rebuild for On Demand Electrical — licensed San Fernando Valley electricians with 24/7 emergency service, panel upgrades, EV chargers, installs, and free quotes.',
    type: 'website',
    gradientFrom: '#d97706',
    gradientTo: '#713f12',
    mesh: 'bg-gradient-to-br from-amber-600 via-orange-700 to-yellow-900',
    gradient: 'linear-gradient(135deg, #d97706, #713f12)',
    image: '/logos/ode.svg',
    links: {
      live: 'https://on-demand-electrical.com/',
    },
    tags: ['Web Design', 'Local SEO', 'Performance', 'Lead Gen', 'Mobile'],
    tracks: [
      {
        id: 'ode-1',
        title: 'Brand & positioning',
        subtitle: 'Licensed SFV electricians, trust-first hero',
        duration: '3:40',
      },
      {
        id: 'ode-2',
        title: 'Service coverage',
        subtitle: 'Emergency, panels, EV chargers, installs, repairs',
        duration: '4:12',
      },
      {
        id: 'ode-3',
        title: 'Quote & lead capture',
        subtitle: 'Free-quote CTAs above the fold on every breakpoint',
        duration: '2:55',
      },
      {
        id: 'ode-4',
        title: 'Mobile-first layout',
        subtitle: 'Tap-to-call, sticky contact, readable on-site',
        duration: '3:18',
      },
      {
        id: 'ode-5',
        title: 'Local SEO foundation',
        subtitle: 'SFV-focused metadata, headings, and service clarity',
        duration: '3:45',
      },
      {
        id: 'ode-6',
        title: 'Performance optimization',
        subtitle: 'Fast loads & Core Web Vitals focus',
        duration: '3:30',
      },
      {
        id: 'ode-7',
        title: 'SEO & accessibility',
        subtitle: 'Structured content for local search',
        duration: '3:15',
      },
      {
        id: 'ode-8',
        title: 'Conversion-focused UX',
        subtitle: 'Quote paths vs. legacy site',
        duration: '3:42',
      },
    ],
  },
  {
    slug: 'markbase',
    title: 'Markbase Ai',
    subtitle: 'Full Stack Software Engineer (Intern to Part-Time)',
    icon: 'cloud',
    description:
      'Develop full-stack features with React and Express, design RESTful APIs, deploy an AWS dev environment (DynamoDB, Cognito), build an AI agent acting as a CMO, and maintain a Postman test suite for prompt and API validation.',
    type: 'experience',
    employer: 'Markbase Ai · Los Angeles, CA',
    period: 'Dec 2025 – Present',
    gradientFrom: '#0ea5e9',
    gradientTo: '#1e3a8a',
    mesh: 'bg-gradient-to-br from-sky-500 via-blue-700 to-indigo-950',
    gradient: 'linear-gradient(135deg, #0ea5e9, #1e3a8a)',
    image: '/logos/markbase.png',
    tags: ['React', 'Express', 'AWS', 'DynamoDB', 'Cognito', 'Postman'],
    tracks: [
      {
        id: 'mb-1',
        title: 'React & Express.js features',
        subtitle: 'RESTful API design & integration',
        duration: '4:12',
      },
      {
        id: 'mb-2',
        title: 'AWS development environment',
        subtitle: 'Deploy & manage cloud infrastructure',
        duration: '3:45',
      },
      {
        id: 'mb-3',
        title: 'DynamoDB + Cognito',
        subtitle: 'Data storage & secure authentication',
        duration: '3:20',
      },
      {
        id: 'mb-4',
        title: 'AI agent (CMO)',
        subtitle: 'Marketing department automation',
        duration: '2:58',
      },
      {
        id: 'mb-5',
        title: 'Postman test suite',
        subtitle: 'Automated prompt & API validation',
        duration: '3:33',
      },
    ],
  },
  {
    slug: 'eshyft',
    title: 'ESHYFT',
    subtitle: 'QA Engineer (Intern to Full-Time)',
    icon: 'shield',
    description:
      'Tested 50+ web and mobile features with Postman and Swagger; spearheaded QA across releases with end-to-end, regression, and API testing. Led Bitwarden rollout for centralized credential security.',
    type: 'experience',
    employer: 'ESHYFT · Howell, NJ',
    period: 'Jul 2025 – Oct 2025',
    gradientFrom: '#059669',
    gradientTo: '#064e3b',
    mesh: 'bg-gradient-to-br from-emerald-600 via-green-800 to-emerald-950',
    gradient: 'linear-gradient(135deg, #059669, #064e3b)',
    image: '/logos/eshyft.png',
    tags: ['Postman', 'Swagger', 'Testomatio', 'QA', 'API Testing'],
    tracks: [
      {
        id: 'es-1',
        title: '200+ test cases',
        subtitle: 'Manual & automated · 50+ features',
        duration: '4:30',
      },
      {
        id: 'es-2',
        title: '30+ critical defects',
        subtitle: 'Caught pre-release',
        duration: '3:15',
      },
      {
        id: 'es-3',
        title: '15% fewer production issues',
        subtitle: 'Validated web & mobile builds',
        duration: '3:00',
      },
      {
        id: 'es-4',
        title: '30% faster release cycle',
        subtitle: 'Regression & API testing with dev/PM',
        duration: '3:42',
      },
      {
        id: 'es-5',
        title: 'Bitwarden implementation',
        subtitle: '100% credential security · 25% workflow gain',
        duration: '2:50',
      },
      {
        id: 'es-6',
        title: 'Release QA leadership',
        subtitle: 'End-to-end testing across product releases',
        duration: '4:05',
      },
    ],
  },
  {
    slug: 'code-fu',
    title: 'Code Fu',
    subtitle: 'Senior Instructor',
    icon: 'bolt',
    description:
      'Design Scratch Jr lesson plans covering sequencing, loops, conditionals, variables, and event handling. Teach students to translate requirements into code with iterative development and debugging; lead multi-sprite message-passing game projects.',
    type: 'experience',
    employer: 'Code Fu · Los Angeles, CA',
    period: 'Aug 2024 – Present',
    gradientFrom: '#f59e0b',
    gradientTo: '#b45309',
    mesh: 'bg-gradient-to-br from-amber-500 via-orange-600 to-yellow-900',
    gradient: 'linear-gradient(135deg, #f59e0b, #b45309)',
    image: '/logos/code-fu.png',
    tags: ['Scratch Jr', 'Curriculum', 'Teaching'],
    tracks: [
      {
        id: 'cf-1',
        title: 'Scratch Jr lesson plans',
        subtitle: 'Sequencing & control flow fundamentals',
        duration: '3:20',
      },
      {
        id: 'cf-2',
        title: 'Loops, conditionals, variables',
        subtitle: 'Core concepts for young learners',
        duration: '2:45',
      },
      {
        id: 'cf-3',
        title: 'Event handling',
        subtitle: 'Interactive Scratch Jr projects',
        duration: '2:30',
      },
      {
        id: 'cf-4',
        title: 'Requirements → working code',
        subtitle: 'Iterative development & debugging',
        duration: '3:15',
      },
      {
        id: 'cf-5',
        title: 'Multi-sprite message-passing',
        subtitle: 'Complex game logic & application state',
        duration: '3:10',
      },
    ],
  },
  {
    slug: 'education',
    title: 'Education',
    subtitle: "Bachelor's & Master's · Associate's",
    icon: 'graduation',
    description:
      "Bachelor's and Master's in Software Engineering at Western Governors University (anticipated Apr 2027). Associate's in Computer Science Transfer Pathway at Los Angeles Pierce College.",
    type: 'compilation',
    gradientFrom: '#6366f1',
    gradientTo: '#312e81',
    mesh: 'bg-gradient-to-br from-indigo-500 via-violet-700 to-indigo-950',
    gradient: 'linear-gradient(135deg, #6366f1, #312e81)',
    image: '/logos/education.svg',
    tags: ['WGU', 'Pierce College', 'Software Engineering'],
    tracks: [
      {
        id: 'ed-1',
        title: 'WGU — BS & MS Software Engineering',
        subtitle: 'Millcreek, UT',
        duration: 'Oct 2025 – Apr 2027',
      },
      {
        id: 'ed-2',
        title: 'Pierce College — AS CS Transfer Pathway',
        subtitle: 'Los Angeles, CA',
        duration: 'Aug 2024 – Jun 2025',
      },
    ],
  },
]

export const browseRows: BrowseRow[] = [
  {
    id: 'projects',
    title: 'Featured projects',
    playlistSlugs: ['stockbot', 'pulse-dash', 'adaptive-quiz'],
  },
  {
    id: 'business',
    title: 'Website case studies',
    playlistSlugs: ['on-demand-electrical'],
    variant: 'wide',
  },
  {
    id: 'experience',
    title: 'Experience',
    playlistSlugs: ['markbase', 'eshyft', 'code-fu'],
  },
  {
    id: 'skills',
    title: 'Top skills in action',
    playlistSlugs: ['markbase', 'stockbot', 'pulse-dash', 'adaptive-quiz'],
  },
  {
    id: 'jump-back',
    title: 'Jump back in',
    playlistSlugs: playlists.map((p) => p.slug),
  },
]

export const skills: Skill[] = [
  { name: 'JavaScript', level: 90, category: 'language' },
  { name: 'Python', level: 88, category: 'language' },
  { name: 'React', level: 92, category: 'language' },
  { name: 'C++', level: 75, category: 'language' },
  { name: 'C#', level: 72, category: 'language' },
  { name: 'HTML', level: 90, category: 'language' },
  { name: 'CSS', level: 88, category: 'language' },
  { name: 'SQL', level: 85, category: 'language' },
  { name: 'Node.js', level: 85, category: 'language' },
  { name: 'Express', level: 90, category: 'language' },
  { name: 'AWS', level: 88, category: 'tool' },
  { name: 'DynamoDB', level: 85, category: 'tool' },
  { name: 'REST APIs', level: 90, category: 'tool' },
  { name: 'Postman', level: 92, category: 'tool' },
  { name: 'Swagger', level: 88, category: 'tool' },
  { name: 'Testomatio', level: 85, category: 'tool' },
  { name: 'Jasmine', level: 80, category: 'tool' },
  { name: 'Git', level: 90, category: 'tool' },
  { name: 'Docker', level: 78, category: 'tool' },
]

export const artistProfile = {
  name: fullName,
  tagline,
  bio: aboutBio,
  monthlyListeners: 'Software Engineering · WGU',
  verified: true,
}

function resolveSlug(slug: string): string {
  return LEGACY_SLUG_REDIRECTS[slug] ?? slug
}

export function getPlaylist(slug: string): PlaylistItem | undefined {
  return playlists.find((p) => p.slug === resolveSlug(slug))
}

export function getPlaylistBySlug(slug: string): PlaylistItem | undefined {
  return getPlaylist(slug)
}

export function getPlaylistsByType(type: PlaylistType): PlaylistItem[] {
  return playlists.filter((p) => p.type === type)
}

export function getExperiencePlaylists(): PlaylistItem[] {
  return getPlaylistsByType('experience')
}

export function getPlaylistsForRow(row: BrowseRow): PlaylistItem[] {
  return row.playlistSlugs
    .map((slug) => getPlaylist(slug))
    .filter((p): p is PlaylistItem => Boolean(p))
}

export function getSkillsBrowseItems(): PlaylistItem[] {
  const skillsRow = browseRows.find((r) => r.id === 'skills')
  return skillsRow ? getPlaylistsForRow(skillsRow) : []
}

export function getFeaturedForProfile(profile: ProfileType | null): string {
  if (profile && featuredByProfile[profile]) {
    return featuredByProfile[profile]
  }
  return featuredPlaylist
}

export function getBrowseRowsForProfile(
  profile: ProfileType | null,
): BrowseRow[] {
  const byId = (id: string) => browseRows.find((r) => r.id === id)!

  if (profile === 'recruiter') {
    return [
      byId('experience'),
      byId('projects'),
      byId('skills'),
      byId('jump-back'),
    ]
  }

  if (profile === 'client') {
    return [
      byId('business'),
      byId('projects'),
      byId('experience'),
      ...browseRows.filter(
        (r) => !['business', 'projects', 'experience'].includes(r.id),
      ),
    ]
  }

  return browseRows
}
