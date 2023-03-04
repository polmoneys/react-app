import { useCallback } from 'react'

const useFocusMove = (): any => {
  const moveFocus = useCallback((id: string) => {
    console.log({ id }, 'hook')

    return window.setTimeout(() => {
      const el = document.getElementById(id) as HTMLElement
      window.requestAnimationFrame(() => {
        el?.focus()
      })
    }, 0)
  }, [])

  return moveFocus
}

export default useFocusMove
