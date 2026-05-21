import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Briefcase,
  CandlestickChart,
  CircleHelp,
  Cloud,
  Compass,
  GraduationCap,
  Shield,
  Users,
  Zap,
} from 'lucide-react'

export const profileIconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  users: Users,
  compass: Compass,
}

export const projectIconMap: Record<string, LucideIcon> = {
  stock: CandlestickChart,
  chart: BarChart3,
  quiz: CircleHelp,
  bolt: Zap,
  cloud: Cloud,
  shield: Shield,
  graduation: GraduationCap,
}

export function getProfileIcon(name: string): LucideIcon {
  return profileIconMap[name] ?? Compass
}

export function getProjectIcon(name: string): LucideIcon {
  return projectIconMap[name] ?? BarChart3
}
