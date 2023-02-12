import { type RefObject, useEffect } from 'react'

type AnyEvent = MouseEvent | TouchEvent

function useActionOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void,
): void {
  useEffect(() => {
    const listener = (event: AnyEvent): void => {
      const el = ref?.current
      // Do nothing if clicking ref's element or descendent elements
      if (el == null || el.contains(event.target as Node)) {
        return
      }
      handler(event)
    }

    document.addEventListener(`mousedown`, listener)
    document.addEventListener(`touchstart`, listener)

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`touchstart`, listener)
    }
    // Reload only if ref or handler changes
  }, [ref, handler])
}

export default useActionOutside
