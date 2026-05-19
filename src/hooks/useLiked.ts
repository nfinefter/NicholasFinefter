import { useCallback, useEffect, useState } from 'react'

const LIKED_KEY = 'portfolio-liked'

function readLiked(): string[] {
  try {
    const raw = localStorage.getItem(LIKED_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed)
      ? parsed.filter((s): s is string => typeof s === 'string')
      : []
  } catch {
    return []
  }
}

export function useLiked() {
  const [liked, setLiked] = useState<string[]>(() => readLiked())

  useEffect(() => {
    localStorage.setItem(LIKED_KEY, JSON.stringify(liked))
  }, [liked])

  const toggle = useCallback((slug: string) => {
    setLiked((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    )
  }, [])

  const isLiked = useCallback(
    (slug: string) => liked.includes(slug),
    [liked],
  )

  return { liked, toggle, isLiked }
}
