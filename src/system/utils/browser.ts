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
