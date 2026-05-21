import { Code2, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PlaylistLinks {
  github?: string
  live?: string
}

interface ExternalLinksProps {
  links?: PlaylistLinks
  className?: string
}

export function ExternalLinks({ links, className }: ExternalLinksProps) {
  if (!links?.live && !links?.github) return null

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#282828] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3e3e3e] hover:border-white/20"
        >
          <ExternalLink className="h-4 w-4 text-[#1db954]" />
          Live demo
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#282828] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3e3e3e] hover:border-white/20"
        >
          <Code2 className="h-4 w-4 text-neutral-300" />
          View code
        </a>
      )}
    </div>
  )
}
