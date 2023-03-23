import { useState, useEffect } from 'react'

interface UserPreferences {
  darkMode: boolean
  reducedMotion: boolean
  reducedData: boolean
  userAgent: string
  hardwareConcurrency: number
  deviceMemory: number
  online: boolean
}

const useUserPreferences = (): UserPreferences => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    darkMode: false,
    reducedMotion: false,
    reducedData: false,
    userAgent: '',
    hardwareConcurrency: 0,
    deviceMemory: 0,
    online: true,
  })

  useEffect(() => {
    const updatePreferences = () => {
      setPreferences({
        darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
        reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)')
          .matches,
        reducedData: window.matchMedia('(prefers-reduced-data: reduce)')
          .matches,
        userAgent: window.navigator.userAgent,
        hardwareConcurrency: window.navigator.hardwareConcurrency || 0,
        deviceMemory: (window.navigator as any).deviceMemory || 0,
        online: window.navigator.onLine,
      })
    }

    updatePreferences()

    const darkModeListener = window.matchMedia('(prefers-color-scheme: dark)')
    const reducedMotionListener = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    const reducedDataListener = window.matchMedia(
      '(prefers-reduced-data: reduce)',
    )

    darkModeListener.addListener(updatePreferences)
    reducedMotionListener.addListener(updatePreferences)
    reducedDataListener.addListener(updatePreferences)
    window.addEventListener('online', updatePreferences)
    window.addEventListener('offline', updatePreferences)

    return () => {
      darkModeListener.removeListener(updatePreferences)
      reducedMotionListener.removeListener(updatePreferences)
      reducedDataListener.removeListener(updatePreferences)
      window.removeEventListener('online', updatePreferences)
      window.removeEventListener('offline', updatePreferences)
    }
  }, [])

  return preferences
}

export default useUserPreferences
