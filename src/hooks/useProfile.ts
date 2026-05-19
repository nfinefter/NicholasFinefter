import { useCallback, useEffect, useState } from 'react'
import type { ProfileType } from '@/data/portfolio'

const PROFILE_KEY = 'portfolio-profile'

function readProfile(): ProfileType | null {
  const stored = localStorage.getItem(PROFILE_KEY)
  if (stored === 'recruiter' || stored === 'client' || stored === 'explorer') {
    return stored
  }
  return null
}

export function useProfile() {
  const [profile, setProfileState] = useState<ProfileType | null>(() =>
    readProfile(),
  )

  useEffect(() => {
    if (profile) {
      localStorage.setItem(PROFILE_KEY, profile)
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

  return { profile, setProfile, clearProfile }
}
