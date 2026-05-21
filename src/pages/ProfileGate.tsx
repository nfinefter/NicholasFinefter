import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { profiles } from '@/data/portfolio'
import { useProfile } from '@/hooks/useProfile'
import { getProfileIcon } from '@/lib/icons'
import { cn } from '@/lib/utils'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 260, damping: 22 } },
}

export default function ProfileGate() {
  const navigate = useNavigate()
  const { profile, setProfile } = useProfile()

  useEffect(() => {
    if (profile) {
      navigate('/browse', { replace: true })
    }
  }, [profile, navigate])

  const selectPerspective = (id: (typeof profiles)[number]['id']) => {
    setProfile(id)
    navigate('/browse', { replace: true })
  }

  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h1
        className="mb-3 text-center text-3xl font-bold tracking-tight text-white md:text-5xl"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Who&apos;s viewing?
      </motion.h1>
      <motion.p
        className="mb-12 max-w-md text-center text-sm text-neutral-400 md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Pick a perspective — each subagent tailors what you see first.
      </motion.p>

      <motion.div
        className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {profiles.map((perspective) => {
          const Icon = getProfileIcon(perspective.icon)
          return (
            <motion.button
              key={perspective.id}
              type="button"
              variants={item}
              onClick={() => selectPerspective(perspective.id)}
              className="group flex flex-col items-center gap-4 rounded-xl border border-transparent bg-transparent p-4 outline-none focus-visible:ring-2 focus-visible:ring-[#1ed760] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              <motion.div
                className={cn(
                  'flex h-28 w-28 items-center justify-center rounded-md bg-gradient-to-br shadow-lg transition-shadow duration-300 md:h-32 md:w-32',
                  perspective.accent,
                  'group-hover:shadow-[0_0_32px_rgba(30,215,96,0.25)]',
                )}
              >
                <Icon className="h-12 w-12 text-white/90 md:h-14 md:w-14" strokeWidth={1.25} />
              </motion.div>
              <motion.div className="text-center">
                <p className="text-lg font-semibold text-neutral-300 transition-colors group-hover:text-white">
                  {perspective.label}
                </p>
                <p className="mt-1 text-xs text-neutral-500">{perspective.hint}</p>
              </motion.div>
            </motion.button>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
