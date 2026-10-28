import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'

/** Active check for nav links, aware of the ?filter=liked variant of /library. */
export function useNavActive() {
  const { pathname, search } = useLocation()

  return useCallback(
    (to: string) => {
      const [path, query] = to.split('?')
      if (pathname !== path) return false
      if (path !== '/library') return true
      const likedView = new URLSearchParams(search).get('filter') === 'liked'
      return query ? likedView : !likedView
    },
    [pathname, search],
  )
}
