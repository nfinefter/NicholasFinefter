import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { ProfileType } from '@/data/portfolio'

const PROFILE_KEY = 'portfolio-profile'

function readProfile(): ProfileType | null {
  const stored = localStorage.getItem(PROFILE_KEY)
  if (stored === 'recruiter' || stored === 'client' || stored === 'explorer') {
    return stored
  }
  return null
}

interface ProfileContextValue {
  profile: ProfileType | null
  setProfile: (id: ProfileType) => void
  clearProfile: () => void
}

const ProfileContext = createContext<ProfileContextValue | null>(null)

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfileState] = useState<ProfileType | null>(() => readProfile())

  useEffect(() => {
    if (profile) {
      localStorage.setItem(PROFILE_KEY, profile)
    } else {
      localStorage.removeItem(PROFILE_KEY)
    }
  }, [profile])

  const setProfile = useCallback((id: ProfileType) => {
    setProfileState(id)
    localStorage.setItem(PROFILE_KEY, id)
  }, [])

  const clearProfile = useCallback(() => {
    setProfileState(null)
    localStorage.removeItem(PROFILE_KEY)
  }, [])

  const value = useMemo(
    () => ({ profile, setProfile, clearProfile }),
    [profile, setProfile, clearProfile],
  )

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

export function useProfile() {
  const context = useContext(ProfileContext)
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider')
  }
  return context
}

export { PROFILE_KEY, readProfile }
