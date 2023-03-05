import { useState, useEffect } from 'react'

/*
    Usage:
    const fixedHeader = useScroll(window) >= 100;
*/

export const useScroll = (domNode: any): number => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const scroller = (): void => {
      setScrollY(domNode.scrollY ?? domNode.scrollTop)
    }

    domNode.addEventListener('scroll', scroller, { passive: true })

    return () => domNode.removeEventListener('scroll', scroller)
  }, [domNode])

  return scrollY
}

export default useScroll
