import { cn } from '@/lib/utils'
import { getProjectIcon } from '@/lib/icons'
import type { PlaylistItem } from '@/data/portfolio'

interface PlaylistCoverProps {
  item: PlaylistItem
  className?: string
  iconClassName?: string
}

function isLogoImage(src: string) {
  return src.startsWith('/logos/')
}

export function PlaylistCover({
  item,
  className,
  iconClassName = 'h-10 w-10 md:h-14 md:w-14',
}: PlaylistCoverProps) {
  const Icon = getProjectIcon(item.icon)

  if (item.image) {
    if (isLogoImage(item.image)) {
      return (
        <div
          className={cn(
            'flex h-full w-full items-center justify-center p-[20%]',
            item.mesh,
            className,
          )}
        >
          <img
            src={item.image}
            alt={`${item.title} logo`}
            className="h-full w-full object-contain drop-shadow-sm"
            loading="lazy"
          />
        </div>
      )
    }

    return (
      <img
        src={item.image}
        alt={item.title}
        className={cn('h-full w-full object-cover object-top', className)}
        loading="lazy"
      />
    )
  }

  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center',
        item.mesh,
        className,
      )}
    >
      <Icon className={cn('text-white/90', iconClassName)} strokeWidth={1.25} />
    </div>
  )
}
