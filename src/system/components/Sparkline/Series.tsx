import { Fragment, useRef } from 'react'
import useResizeObserver from '@/system/hooks/useResizeObserver'
import { not } from '@/system/utils/language'
import useSeries from './useSeries'
import YAxis from './AxisY'
import { type DataPoint } from './types'

interface Props {
  items: DataPoint[][]
  width?: number
  height?: number
  circleRadius?: number
  lineColors?: string[]
  circleColors?: string[]
  yAxisTicks?: number
}

interface Props {
  items: DataPoint[][]
  width?: number
  height?: number
  circleRadius?: number
  lineColors?: string[]
  circleColors?: string[]
  yAxisTicks?: number
  yAxisCircle?: boolean
}

const SparklineSeries = (props: Props): JSX.Element => {
  const {
    items: itemsProp,
    width: widthProp,
    height: heightProp,
    circleRadius = 2,
    lineColors = [
      'var(--error-100)',
      'var(--color-focus)',
      'yellow',
      'var(--gray-100)',
      'var(--gray-200)',
      'var(--gray-300)',
      'var(--gray-400)',
      'var(--gray-500)',
      'var(--gray-600)',
      'var(--gray-700)',
    ],
    circleColors = [
      'var(--error-100)',
      'var(--color-focus)',
      'yellow',
      'var(--gray-100)',
      'var(--gray-200)',
      'var(--gray-300)',
      'var(--gray-400)',
      'var(--gray-500)',
      'var(--gray-600)',
      'var(--gray-700)',
    ],
    yAxisTicks: yAxisTicksProp,
    yAxisCircle = false,
  } = props
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const parentSize = useResizeObserver(containerRef)
  const width = widthProp ?? parentSize.width ?? 200
  const height = heightProp ?? parentSize.height ?? 100

  const { series, items, minY, maxY, normalizeY, yAxisTicks, tickInterval } =
    useSeries({
      items: itemsProp,
      width,
      height,
      circleRadius,
      yAxisTicks: yAxisTicksProp,
    })

  const caption = `Comparing ${series} series with min of ${minY} and max ${maxY}`
  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        maxHeight: height ?? '100%',
        ...(!not(yAxisTicksProp) && { display: 'flex' }),
      }}
    >
      {!not(yAxisTicksProp) && (
        <YAxis
          minY={minY}
          maxY={maxY}
          yAxisTicks={yAxisTicks}
          tickInterval={tickInterval}
          normalizeY={normalizeY}
          height={height}
          circles={yAxisCircle}
        />
      )}
      <svg ref={svgRef} width={width} height={height} aria-label={caption}>
        {items.map((normalizedData, datasetIndex: number) => (
          <Fragment key={datasetIndex}>
            <path
              d={normalizedData.pathData}
              fill="none"
              stroke={lineColors[datasetIndex % lineColors.length]}
            />
            {normalizedData.circles.map((c, circleIndex: number) => (
              <circle
                key={circleIndex}
                cx={c.x}
                cy={c.y}
                r={circleRadius}
                fill={circleColors[datasetIndex % circleColors.length]}
              />
            ))}
          </Fragment>
        ))}
      </svg>
    </div>
  )
}

export default SparklineSeries
