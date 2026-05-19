import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import MediaCard from '@/components/browse/MediaCard'
import { getPlaylistsForRow, type BrowseRow } from '@/data/portfolio'

interface ContentRowProps {
  row: BrowseRow
  className?: string
}

export default function ContentRow({ row, className }: ContentRowProps) {
  const items = getPlaylistsForRow(row)
  const variant = row.variant ?? 'square'
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    const frame = requestAnimationFrame(onSelect)
    return () => {
      cancelAnimationFrame(frame)
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  if (items.length === 0) return null

  return (
    <motion.section
      className={cn('group/row relative mb-8 px-6 md:px-8', className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">{row.title}</h2>

      <button
        type="button"
        aria-label="Scroll left"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(
          'absolute left-0 top-[52%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur-sm transition-opacity hover:bg-black/90 disabled:pointer-events-none disabled:opacity-30 md:left-2',
          isHovered && canScrollPrev ? 'opacity-100' : 'opacity-0 focus-visible:opacity-100',
        )}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        aria-label="Scroll right"
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={cn(
          'absolute right-0 top-[52%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur-sm transition-opacity hover:bg-black/90 disabled:pointer-events-none disabled:opacity-30 md:right-2',
          isHovered && canScrollNext ? 'opacity-100' : 'opacity-0 focus-visible:opacity-100',
        )}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <motion.div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((item) => (
            <MediaCard key={item.slug} item={item} variant={variant} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
