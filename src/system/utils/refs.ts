/**
 * Utility to merge 'local' and/or forwardRef...
 * ...for complex components.
 * Usage: ref={mergeRefs(localUseRef, refForwarded)}
 *
 */

export function mergeRefs<T = any>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>,
): React.RefCallback<T> {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref != null) {
        ;(ref as React.MutableRefObject<T | null>).current = value
      }
    })
  }
}
