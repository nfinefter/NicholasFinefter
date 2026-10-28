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

export const fullName = 'Nicholas Finefter'

export const tagline =
  'Software engineering student in Los Angeles. I started out in QA, moved into full-stack, and now do both as an SDET, so I test what I ship.'

export const contact = {
  email: 'nfinefter@gmail.com',
  linkedin: 'https://linkedin.com/in/nicholas-finefter',
  github: 'https://github.com/nfinefter',
}

export const aboutBio = [
  'I started in QA at ESHYFT, where I validated 50+ web and mobile features, ran 200+ test cases and caught 30+ critical defects before release. Production issues dropped 15%.',
  'At Moon I\'m an SDET. I built our end-to-end regression suite from scratch (90% coverage), set up CI/CD quality gates that cut pipeline runtime 66%, and shipped a metrics dashboard and a few internal tools. Before that I built full-stack features at Markbase AI with React, Express, DynamoDB and Cognito.',
  'On the side I build projects like PulseDash, StockBot and QuizBuddy, and I teach kids to code at Code Fu. I\'m working on my master\'s in software engineering at WGU.',
]

export const focusAreas = [
  'AI',
  'Automation',
  'Test Automation',
  'CI/CD',
  'Web Dev',
  'Data',
  'QA',
  'DevOps',
  'Cloud',
]

export const featuredPlaylist = 'stockbot'

export const featuredByProfile: Record<ProfileType, string> = {
  recruiter: 'moon',
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
    greeting: 'Experience and skills first.',
  },
  {
    id: 'client',
    label: 'Client',
    hint: 'Project outcomes',
    emoji: '🤝',
    icon: 'users',
    accent: 'from-blue-500 to-indigo-700',
    greeting: 'Website work and results first.',
  },
  {
    id: 'explorer',
    label: 'Explorer',
    hint: 'Full portfolio',
    emoji: '🧭',
    icon: 'compass',
    accent: 'from-violet-500 to-purple-700',
    greeting: 'Everything, demos included.',
  },
]

export const playlists: PlaylistItem[] = [
  {
    slug: 'stockbot',
    title: 'StockBot',
    subtitle: 'Automated trading',
    icon: 'stock',
    description:
      'A Python backend that places stock and crypto trades on its own, based on strategy logic and live market data. A React dashboard shows portfolio performance, signals and open positions over REST APIs.',
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
        subtitle: 'Frontend and backend wired together',
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
      'A dashboard for creators. Link your social accounts, see all your revenue in one place, and get suggestions for growing your audience and earnings based on your engagement data.',
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
      'Upload a study guide and get a custom quiz back. Every answer is graded right away, with an explanation of why it is right or wrong.',
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
      'A full website rebuild for On Demand Electrical, a licensed electrician in the San Fernando Valley. They do 24/7 emergency calls, panel upgrades, EV chargers and new installs, and give free quotes.',
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
    slug: 'moon',
    title: 'Moon',
    subtitle: 'Software Development Engineer in Test',
    icon: 'moon',
    description:
      'I built the end-to-end regression suite from scratch, put CI/CD quality gates in front of every merge, and shipped a team-wide metrics dashboard and several internal tools. I also work as a software engineer on sprint delivery.',
    type: 'experience',
    employer: 'Moon · Los Angeles, CA',
    period: 'Jun 2026 – Present',
    gradientFrom: '#64748b',
    gradientTo: '#0f172a',
    mesh: 'bg-gradient-to-br from-slate-500 via-slate-700 to-slate-950',
    gradient: 'linear-gradient(135deg, #64748b, #0f172a)',
    tags: ['SDET', 'Test Automation', 'CI/CD', 'GitHub Actions'],
    tracks: [
      {
        id: 'mo-1',
        title: 'End-to-end regression suite',
        subtitle: 'Built from scratch · 90% coverage',
        duration: '4:30',
      },
      {
        id: 'mo-2',
        title: 'UI, API & visual tests',
        subtitle: 'Across the app and its business logic',
        duration: '3:15',
      },
      {
        id: 'mo-3',
        title: 'CI/CD quality gates',
        subtitle: 'GitHub Actions blocks regressions pre-merge',
        duration: '3:48',
      },
      {
        id: 'mo-4',
        title: '66% faster pipeline',
        subtitle: 'Parallelization & selective execution, no loss in coverage',
        duration: '3:05',
      },
      {
        id: 'mo-5',
        title: 'Same-day feature delivery',
        subtitle: 'Software engineer on sprints, AI-assisted workflows',
        duration: '3:40',
      },
      {
        id: 'mo-6',
        title: 'Internal tools',
        subtitle: 'Built for engineers and staff',
        duration: '2:50',
      },
      {
        id: 'mo-7',
        title: 'Metrics dashboard',
        subtitle: 'Test health, coverage & deployment status',
        duration: '3:22',
      },
    ],
  },
  {
    slug: 'markbase',
    title: 'Markbase AI',
    subtitle: 'Full Stack Software Engineer',
    icon: 'cloud',
    description:
      'I built full-stack features in React and Express, designed the REST APIs behind them, and ran our AWS dev environment (DynamoDB, Cognito). I also built an AI agent that acts as a CMO, then wrote a Postman suite of 20+ prompt and API tests that cut manual QA time by 35%.',
    type: 'experience',
    employer: 'Markbase AI · Los Angeles, CA',
    period: 'Dec 2025 – Sep 2026',
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
        subtitle: 'REST APIs for 100+ test users',
        duration: '4:12',
      },
      {
        id: 'mb-2',
        title: 'AWS development environment',
        subtitle: 'Dedicated dev environment',
        duration: '3:45',
      },
      {
        id: 'mb-3',
        title: 'DynamoDB + Cognito',
        subtitle: 'Data storage and user auth',
        duration: '3:20',
      },
      {
        id: 'mb-4',
        title: 'AI agent (CMO)',
        subtitle: 'Handles marketing tasks',
        duration: '2:58',
      },
      {
        id: 'mb-5',
        title: 'Postman test suite',
        subtitle: '20+ prompt & API tests · 35% less manual QA',
        duration: '3:33',
      },
    ],
  },
  {
    slug: 'eshyft',
    title: 'ESHYFT',
    subtitle: 'QA Engineer',
    icon: 'shield',
    description:
      'Validated 50+ web and mobile features with Postman and Swagger, and led QA across several releases: end-to-end, regression and API testing with the devs and PMs. I also found a big gap in password management and led the one-month Bitwarden rollout that got rid of shared passwords.',
    type: 'experience',
    employer: 'ESHYFT · Howell, NJ',
    period: 'Jul 2025 – Oct 2025',
    gradientFrom: '#059669',
    gradientTo: '#064e3b',
    mesh: 'bg-gradient-to-br from-emerald-600 via-green-800 to-emerald-950',
    gradient: 'linear-gradient(135deg, #059669, #064e3b)',
    image: '/logos/eshyft.png',
    tags: ['Postman', 'Swagger', 'QA', 'API Testing'],
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
        title: 'Predictable release cadence',
        subtitle: 'Regression & API testing with devs and PMs',
        duration: '3:42',
      },
      {
        id: 'es-5',
        title: 'Bitwarden implementation',
        subtitle: 'One-month rollout · no more shared passwords',
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
      'I write lesson plans and projects for 20+ students covering sequencing, loops, conditionals, variables and events. I teach them to turn requirements into working code by iterating and debugging, run bigger projects where sprites pass messages to each other, and have helped students deploy their own apps.',
    type: 'experience',
    employer: 'Code Fu · Los Angeles, CA',
    period: 'Aug 2024 – Present',
    gradientFrom: '#f59e0b',
    gradientTo: '#b45309',
    mesh: 'bg-gradient-to-br from-amber-500 via-orange-600 to-yellow-900',
    gradient: 'linear-gradient(135deg, #f59e0b, #b45309)',
    image: '/logos/code-fu.png',
    tags: ['Scratch', 'Curriculum', 'Teaching'],
    tracks: [
      {
        id: 'cf-1',
        title: 'Scratch lesson plans',
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
        subtitle: 'Interactive Scratch projects',
        duration: '2:30',
      },
      {
        id: 'cf-4',
        title: 'Requirements to working code',
        subtitle: 'Iterative development & debugging',
        duration: '3:15',
      },
      {
        id: 'cf-5',
        title: 'Multi-sprite message-passing',
        subtitle: 'Game logic & application state',
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
      "B.S. in Software Engineering at Western Governors University (Oct 2025 to Oct 2026), now working on the M.S., expected April 2027. Before that, an associate's in Computer Science (transfer pathway) at Los Angeles Pierce College.",
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
        title: 'WGU: M.S. Software Engineering',
        subtitle: 'Millcreek, UT · anticipated Apr 2027',
        duration: 'Oct 2026 – Apr 2027',
      },
      {
        id: 'ed-2',
        title: 'WGU: B.S. Software Engineering',
        subtitle: 'Millcreek, UT',
        duration: 'Oct 2025 – Oct 2026',
      },
      {
        id: 'ed-3',
        title: 'Pierce College: AS CS Transfer Pathway',
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
    playlistSlugs: ['moon', 'markbase', 'eshyft', 'code-fu'],
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
  { name: 'TypeScript', level: 88, category: 'language' },
  { name: 'Python', level: 88, category: 'language' },
  { name: 'C#', level: 72, category: 'language' },
  { name: 'SQL', level: 85, category: 'language' },
  { name: 'HTML', level: 90, category: 'language' },
  { name: 'CSS', level: 88, category: 'language' },
  { name: 'React', level: 92, category: 'language' },
  { name: 'Node.js', level: 85, category: 'language' },
  { name: 'Express', level: 90, category: 'language' },
  { name: '.NET', level: 70, category: 'language' },
  { name: 'Playwright', level: 90, category: 'tool' },
  { name: 'Appium', level: 80, category: 'tool' },
  { name: 'Postman', level: 92, category: 'tool' },
  { name: 'Swagger', level: 88, category: 'tool' },
  { name: 'GitHub Actions', level: 88, category: 'tool' },
  { name: 'CI/CD', level: 88, category: 'tool' },
  { name: 'Test Automation', level: 90, category: 'tool' },
  { name: 'REST APIs', level: 90, category: 'tool' },
  { name: 'AWS', level: 88, category: 'tool' },
  { name: 'Azure', level: 70, category: 'tool' },
  { name: 'DynamoDB', level: 85, category: 'tool' },
  { name: 'MongoDB', level: 75, category: 'tool' },
  { name: 'Git', level: 90, category: 'tool' },
  { name: 'Docker', level: 78, category: 'tool' },
  { name: 'Jira', level: 80, category: 'tool' },
  { name: 'Figma', level: 70, category: 'tool' },
  { name: 'Agile', level: 80, category: 'tool' },
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
