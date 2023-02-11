import { useCallback } from 'react'

const useFocusReturn = () => {
  const moveFocus = useCallback((id: string) => {
    return window.setTimeout(() => {
      const el = document.getElementById(id) as HTMLElement
      window.requestAnimationFrame(() => {
        el?.focus()
      })
    }, 0)
  }, [])

  return moveFocus
}

export default useFocusReturn
