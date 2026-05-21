import { useEffect, useState } from 'react'

export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0)

  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const step = (now: number) => {
      const p = Math.min((now - start) / 1500, 1)
      setV(Math.floor(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to])

  return (
    <>
      {suffix === '$' && '$'}
      {v.toLocaleString()}
      {suffix !== '$' ? suffix : ''}
    </>
  )
}
