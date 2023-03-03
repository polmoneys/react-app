function mapPoints(
  el: any,
  boundary: { x: number; y: number },
  spaceX = 0,
  spaceY = 0,
): [number, number] {
  let rect
  if ('current' in el) {
    rect = el.current.getBoundingClientRect()
  } else {
    rect = el.getBoundingClientRect()
  }
  const offsetWidth = Math.round(rect.width / 2)
  const offsetHeight = Math.round(rect.height / 2)
  return [
    Math.round(Number(rect.left) + offsetWidth - boundary.x) - spaceX,
    Math.round(Number(rect.top) + offsetHeight - boundary.y) - spaceY,
  ]
}

export async function matchRefsToPoints(
  refs: any,
  boundary: any,
  spaceX: number,
  spaceY: number,
): Promise<Array<[number, number]>> {
  const points = refs.map((p: any) => mapPoints(p, boundary, spaceX, spaceY))
  return await new Promise((resolve, reject) => {
    resolve(points)
  })
}
