interface InertElement extends HTMLElement {
  inert: boolean
}

export const inertMain = (status = true): void => {
  const main = document?.querySelector('main')
  if (main != null) (main as InertElement).inert = status
}

export const getInputTextSelection = (
  input: HTMLInputElement,
): { start: number; length: number } => {
  return {
    start: input.selectionStart ?? 0,
    length: (input.selectionEnd ?? 0) - (input.selectionStart ?? 0),
  }
}

export const getDOMId = (el: Element, id: string): string => {
  const currentId = el.getAttribute('id')
  if (currentId !== null) {
    return currentId
  }

  el.setAttribute('id', id)
  return id
}

export const get1Fr = (): number | string => {
  const grid = document.querySelector('.grid')
  if (grid != null) {
    return getComputedStyle(grid).gridTemplateColumns
  }
  return 0
}

export const openUrl = (to: string): unknown => window?.open(to, '_blank')

export const scrollToElement = (selector: string): void => {
  const el = document.querySelector(selector)
  if (el != null) {
    el.scrollIntoView()
  }
}

export const ponyfills = (): void => {
  /* eslint-disable */

  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      'use strict'
      if (typeof start !== 'number') {
        start = 0
      }

      if (start + search.length > this.length) {
        return false
      } else {
        return this.includes(search, start)
      }
    }
  }

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
      position = position || 0
      return this.substr(position, searchString.length) === searchString
    }
  }
  /* eslint-disable */
}
