import { useMemo } from 'react'
import { type DataPoints } from './types'

interface UseSerieInput {
  items: DataPoints
  width: number
  height: number
  circleRadius: number
}
interface UseSerieOutput {
  pathData: string
  pathDataTop: string
  circles: Array<{ x: number; y: number }>
}

const useSerie = (params: UseSerieInput): UseSerieOutput => {
  const { items, width, height, circleRadius } = params
  return useMemo<UseSerieOutput>(() => {
    const minX = Math.min(...items.map(d => new Date(d.date).getTime()))
    const maxX = Math.max(...items.map(d => new Date(d.date).getTime()))
    const minY = Math.min(...items.map(d => d.value))
    const maxY = Math.max(...items.map(d => d.value))

    const normalizeX = (value: number): number =>
      circleRadius +
      ((value - minX) / (maxX - minX)) * (width - 2 * circleRadius)
    const normalizeY = (value: number): number =>
      circleRadius +
      ((value - minY) / (maxY - minY)) * (height - 2 * circleRadius)

    const pathDataArray = items.map(
      (d, i) =>
        `${i === 0 ? 'M' : 'L'}${normalizeX(new Date(d.date).getTime())},${
          height - normalizeY(d.value)
        }`,
    )

    // Close the path to fill the area
    pathDataArray.push(`L${width - circleRadius},${height}`)
    pathDataArray.push(`L${circleRadius},${height}`)
    pathDataArray.push('Z')

    const pathData = pathDataArray.join(' ')

    const circles = items.map(d => ({
      x: normalizeX(new Date(d.date).getTime()),
      y: height - normalizeY(d.value),
    }))

    const pathDataArrayTop = items.map(
      (d, i) =>
        `${i === 0 ? 'M' : 'L'}${normalizeX(new Date(d.date).getTime())},${
          height - normalizeY(d.value)
        }`,
    )

    pathDataArrayTop.push(`L${width - circleRadius},0`)
    pathDataArrayTop.push(`L${circleRadius},0`)
    pathDataArrayTop.push('Z')

    const pathDataTop = pathDataArrayTop.join(' ')

    return { pathData, circles, pathDataTop }
  }, [items, width, height, circleRadius])
}

export default useSerie
