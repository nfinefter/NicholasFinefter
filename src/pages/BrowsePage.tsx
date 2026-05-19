import { motion } from 'framer-motion'
import GreetingHeader from '@/components/browse/GreetingHeader'
import FeaturedBanner from '@/components/browse/FeaturedBanner'
import ContentRow from '@/components/browse/ContentRow'
import { featuredSlug, getBrowseRowsForProfile, getPlaylist, person } from '@/data/portfolio'
import { useProfile } from '@/hooks/useProfile'

export default function BrowsePage() {
  const featured = getPlaylist(featuredSlug)!
  const { profile } = useProfile()
  const rows = getBrowseRowsForProfile(profile)

  return (
    <motion.div
      className="ambient-gradient min-h-full pb-10 pt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <GreetingHeader name={person.shortName} />
      <FeaturedBanner project={featured} className="mt-4" />
      {rows.map((row) => (
        <ContentRow key={row.id} row={row} />
      ))}
    </motion.div>
  )
}
