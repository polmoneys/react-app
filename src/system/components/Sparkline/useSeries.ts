import { useMemo } from 'react'
import { type DataPoints } from './types'

interface UseSeriesInput {
  items: DataPoints[]
  width: number
  height: number
  circleRadius: number
  yAxisTicks?: number
}

interface UseSeriesOutput {
  items: Array<{
    pathData: string
    circles: Array<{ x: number; y: number }>
  }>
  minY: number
  maxY: number
  yAxisTicks: number
  tickInterval: number
  normalizeY: (x: number) => number
  series: number
}

const useSeries = (props: UseSeriesInput): UseSeriesOutput => {
  const {
    items: itemsProps,
    width,
    height,
    circleRadius = 3,
    yAxisTicks = 5,
  } = props
  return useMemo<UseSeriesOutput>(() => {
    const points = itemsProps.flat()

    const minX = Math.min(...points.map(d => new Date(d.date).getTime()))
    const maxX = Math.max(...points.map(d => new Date(d.date).getTime()))
    const minY = Math.min(...points.map(d => d.value))
    const maxY = Math.max(...points.map(d => d.value))

    const normalizeX = (value: number): number =>
      circleRadius +
      ((value - minX) / (maxX - minX)) * (width - 2 * circleRadius)
    const normalizeY = (value: number): number =>
      circleRadius +
      ((value - minY) / (maxY - minY)) * (height - 2 * circleRadius)

    const normalized = itemsProps.map(item => {
      const pathDataArray = item.map(
        (d, i) =>
          `${i === 0 ? 'M' : 'L'}${normalizeX(new Date(d.date).getTime())},${
            height - normalizeY(d.value)
          }`,
      )

      const pathData = pathDataArray.join(' ')

      const circles = item.map(d => ({
        x: normalizeX(new Date(d.date).getTime()),
        y: height - normalizeY(d.value),
      }))

      return { pathData, circles }
    })

    return {
      series: normalized.length,
      items: normalized,
      minY,
      maxY,
      yAxisTicks,
      tickInterval: (maxY - minY) / yAxisTicks,
      normalizeY,
    }
  }, [itemsProps, width, height, circleRadius, yAxisTicks])
}
export default useSeries
