import {
  useRef,
  useEffect,
  type EffectCallback,
  type DependencyList,
} from 'react'

/*
  Call an effect after a component update, skipping the initial mount.
  credits @reach/reach-ui
*/

export function useUpdateEffect(
  effect: EffectCallback,
  deps?: DependencyList,
): void {
  const mounted = useRef(false)
  useEffect(() => {
    if (mounted.current) {
      effect()
    } else {
      mounted.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export const useUnmount = (callback: () => void): void => {
  const unmountRef = useRef(callback)
  unmountRef.current = callback
  useEffect(
    () => () => {
      unmountRef.current?.()
    },
    [],
  )
}

export function useEffectOnlyOnce(
  effect: EffectCallback,
  deps?: DependencyList,
): void {
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return

    hasRun.current = true
    effect()
  }, deps)
}

export function useEffectEveryNthTime(
  effect: EffectCallback,
  n: number,
  deps?: DependencyList,
): void {
  const count = useRef(0)

  useEffect(() => {
    count.current++

    if (count.current % n === 0) {
      effect()
    }
  }, deps)
}
