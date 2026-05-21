import { motion } from 'framer-motion'
import { profiles } from '@/data/portfolio'
import { useProfile } from '@/hooks/useProfile'
import { cn } from '@/lib/utils'

function getTimeBasedGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  if (hour < 21) return 'Good evening'
  return 'Good night'
}

interface GreetingHeaderProps {
  className?: string
}

export default function GreetingHeader({ className }: GreetingHeaderProps) {
  const greeting = getTimeBasedGreeting()
  const { profile } = useProfile()
  const profileMeta = profiles.find((p) => p.id === profile)
  const displayName = profileMeta?.label ?? 'Guest'

  return (
    <motion.header
      className={cn('px-6 pt-8 md:px-8 md:pt-10', className)}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
        {greeting}
        <span className="text-neutral-400">, {displayName}</span>
      </h1>
      {profileMeta && (
        <p className="mt-2 max-w-xl text-sm text-neutral-400 md:text-base">{profileMeta.greeting}</p>
      )}
    </motion.header>
  )
}
