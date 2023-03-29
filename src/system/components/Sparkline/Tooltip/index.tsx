import {
  useState,
  useRef,
  type ReactNode,
  type MouseEvent,
  type TouchEvent,
} from 'react'
import { type DataPoint } from '../types'

interface ChartWithTooltipProps {
  data: DataPoint[][]
  children: (highlightedIndex: number | null) => ReactNode
}

const ChartWithTooltip = (props: ChartWithTooltipProps): JSX.Element => {
  const { data, children } = props
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const findClosestIndex = (clientX: number): number | null => {
    if (containerRef.current == null) return null

    const { left, width } = containerRef.current.getBoundingClientRect()
    const xPercentage = (clientX - left) / width
    const index = Math.round(xPercentage * (data[0].length - 1))

    return index
  }

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>): void => {
    setHighlightedIndex(findClosestIndex(event.clientX))
  }

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>): void => {
    if (event.touches.length > 0) {
      setHighlightedIndex(findClosestIndex(event.touches[0].clientX))
    }
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => {
        setHighlightedIndex(null)
      }}
      onMouseLeave={() => {
        setHighlightedIndex(null)
      }}
      style={{ position: 'relative' }}
    >
      {children(highlightedIndex)}
    </div>
  )
}

export default ChartWithTooltip
