interface InertElement extends HTMLElement {
  inert: boolean
}

export const inertMain = (status = true): void => {
  const main = document?.querySelector('main')
  if (main != null) (main as InertElement).inert = status
}

export const getDOMId = (el: Element, id: string): string => {
  const currentId = el.getAttribute('id')
  if (currentId !== null) {
    return currentId
  }

  el.setAttribute('id', id)
  return id
}

export const openUrl = (to: string): unknown => window?.open(to, '_blank')

export const scrollToElement = (selector: string): void => {
  const el = document.querySelector(selector)
  if (el != null) {
    el.scrollIntoView()
  }
}

export const clearCookies = (): void => {
  document.cookie
    .split(';')
    .forEach(
      c =>
        (document.cookie = c
          .replace(/^ +/, '')
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)),
    )
}

/**
 * Utility to ask if user preferes to save data.
 * Browser support is atrocious (august 2021).
 */

export const prefersReducedData = (): boolean => {
  const supportsPrefersReducedData = window.matchMedia(
    'not all and (prefers-reduced-data), (prefers-reduced-data)',
  ).matches
  const prefers = window.matchMedia('(prefers-reduced-data: reduce)').matches
  return supportsPrefersReducedData && prefers
}

export const detectDeviceType = (): 'Mobile' | 'Desktop' =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
    ? 'Mobile'
    : 'Desktop'
