import { useReducer, type DispatchWithoutAction } from 'react'

// can only be enabled, onClick={enable} will be stable

function useOnce(): { isEnabled: boolean; enable: DispatchWithoutAction } {
  const [isEnabled, enable] = useReducer(() => true, false)

  return {
    isEnabled,
    enable,
  }
}

export default useOnce
