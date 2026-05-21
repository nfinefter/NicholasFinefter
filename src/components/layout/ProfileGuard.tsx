import { Navigate, Outlet } from 'react-router-dom'
import { useProfile } from '@/hooks/useProfile'

export function ProfileGuard() {
  const { profile } = useProfile()

  if (!profile) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
