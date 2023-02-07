import { useRef, useEffect } from "react";

/*
  Call an effect after a component update, skipping the initial mount.
  credits @reach/reach-ui
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
