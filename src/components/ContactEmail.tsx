import { useState } from 'react'
import { Check, Mail } from 'lucide-react'
import { contact } from '@/data/portfolio'
import { cn } from '@/lib/utils'

interface EmailButtonProps {
  className?: string
  /** Hide the text label below the sm breakpoint (for tight headers). */
  collapseLabel?: boolean
}

/**
 * Opens the visitor's mail app, and also copies the address so it still
 * works on machines with no mail client set up.
 */
export function EmailButton({ className, collapseLabel }: EmailButtonProps) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard
      ?.writeText(contact.email)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {})
  }

  const Icon = copied ? Check : Mail

  return (
    <a
      href={`mailto:${contact.email}`}
      onClick={copy}
      title={`Email ${contact.email}`}
      aria-label={`Email ${contact.email}`}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#282828] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3e3e3e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1ed760]',
        className,
      )}
    >
      <Icon className={cn('h-4 w-4', copied ? 'text-[#1db954]' : 'text-neutral-300')} />
      <span className={cn(collapseLabel && 'hidden sm:inline')}>
        {copied ? 'Copied!' : 'Email'}
      </span>
    </a>
  )
}
