import { useRef, useEffect } from "react";
import type * as React from "react";

// stolen from @reach/reach-ui

/**
 * Call an effect after a component update, skipping the initial mount.
 *
 * @param effect Effect to call
 * @param deps Effect dependency list
 */
function useUpdateEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList
) {
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) {
      effect();
    } else {
      mounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useUpdateEffect;
