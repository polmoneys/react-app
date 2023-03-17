import { useRef } from 'react'
import useResizeObserver from '@/system/hooks/useResizeObserver'
import useSerie from './useSerie'
import { type DataPoints } from './types'

interface SparklineProps {
  items: DataPoints
  width?: number
  height?: number
  fillColor?: string
  strokeColor?: string
  topFillColor?: string
  strokeWidth?: number
  circleColor?: string
  circleRadius?: number
}

const Sparkline = (props: SparklineProps): JSX.Element => {
  const {
    items,
    width,
    height,
    fillColor = 'var(--gray-700)',
    topFillColor = 'var(--gray-600)',
    strokeColor = 'var(--color-focus)',
    circleColor = 'var(--color-focus)',
    strokeWidth = 2,
    circleRadius = 3,
  } = props
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const parentSize = useResizeObserver(containerRef)
  const svgWidth = width ?? parentSize.width ?? 200
  const svgHeight = height ?? parentSize.height ?? 100

  const { pathData, circles, pathDataTop } = useSerie({
    items,
    width: svgWidth,
    height: svgHeight,
    circleRadius,
  })

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%', maxHeight: height ?? '100%' }}
    >
      <svg ref={svgRef} width={svgWidth} height={svgHeight}>
        <path d={pathDataTop} fill={topFillColor} />
        <path
          d={pathData}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
        {circles.map((c, i) => (
          <circle
            key={i}
            cx={c.x}
            cy={c.y}
            r={circleRadius}
            fill={circleColor}
          />
        ))}
      </svg>
    </div>
  )
}
export default Sparkline
