export const LOCATIONS = ['left', 'center', 'right'] as const
export type Positions = (typeof LOCATIONS)[number]

export function elementIsOutsideViewport(element: HTMLElement): boolean {
  const { left, right } = element.getBoundingClientRect()

  return left <= 0 || right >= window.innerWidth
}

export function getPixelsOffScreen(element: HTMLElement): number {
  const { left, right } = element.getBoundingClientRect()

  return Math.min(0, left, window.innerWidth - right)
}

export function findMostVisiblePosition(element: HTMLElement): Positions {
  const originalClasses = element.className
  const positions: any[] = LOCATIONS.map(position => {
    LOCATIONS.forEach(p => {
      element.classList.remove(p)
    })
    element.classList.add(position)

    return {
      position,
      pixelsOffScreen: getPixelsOffScreen(element),
    }
  })

  element.className = originalClasses
  const { position } = positions.reduce((acc, curr) =>
    curr.pixelsOffScreen > acc.pixelsOffScreen ? curr : acc,
  )
  return position
}
