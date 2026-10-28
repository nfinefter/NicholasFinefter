import { CodeFuDemo } from './CodeFuDemo'
import { EshyftDemo } from './EshyftDemo'
import { MarkbaseDemo } from './MarkbaseDemo'
import { MoonDemo } from './MoonDemo'
import { OnDemandElectricalDemo } from './OnDemandElectricalDemo'
import { PulseDashDemo } from './PulseDashDemo'
import { QuizBuddyDemo } from './QuizBuddyDemo'
import { StockBotDemo } from './StockBotDemo'

export { Counter } from './Counter'

export function PlaylistDemo({ slug }: { slug: string }) {
  switch (slug) {
    case 'stockbot':
      return <StockBotDemo />
    case 'pulse-dash':
    case 'creator-analytics':
      return <PulseDashDemo />
    case 'adaptive-quiz':
      return <QuizBuddyDemo />
    case 'moon':
      return <MoonDemo />
    case 'markbase':
      return <MarkbaseDemo />
    case 'eshyft':
      return <EshyftDemo />
    case 'code-fu':
      return <CodeFuDemo />
    case 'on-demand-electrical':
      return <OnDemandElectricalDemo />
    case 'education':
      return null
    default:
      return null
  }
}
