import React from 'react'

/**
 * Hook that determines if a component has been mounted on the client.
 * Useful for avoiding hydration mismatches or running effects only after mount.
 * @returns {boolean} `true` once the component is mounted, otherwise `false`.
 */
export function useMounted() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
