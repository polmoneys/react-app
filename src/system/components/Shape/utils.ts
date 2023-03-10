function polygon(
  centerX: number,
  centerY: number,
  points: number,
  radius: number,
): string {
  const degreeIncrement = 360 / points
  const d = new Array(points).fill('#').map((p, i) => {
    const point = polarToCartesian(
      centerX,
      centerY,
      radius,
      degreeIncrement * i,
    )
    return `${point.x},${point.y}`
  })
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return `M${d}Z`
}
export { polygon }

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
): {
  x: number
  y: number
} {
  // Transform coordenates so that always points center/up
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}
