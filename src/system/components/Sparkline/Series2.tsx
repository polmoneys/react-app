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
  yAxisCircle?: boolean
  highlightedIndex: number | null
  TooltipComponent?: React.FC<{
    x: number
    y: number
    data: any
    color: string
  }>
}

const SparklineSeries2 = (props: Props): JSX.Element => {
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
    highlightedIndex,
    TooltipComponent,
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
      <svg
        ref={svgRef}
        width={width}
        height={height}
        aria-label={caption}
        style={{ overflow: 'visible!important' }}
      >
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
        {highlightedIndex !== null && (
          <Fragment>
            <line
              x1={items[0].circles[highlightedIndex].x}
              y1={0}
              x2={items[0].circles[highlightedIndex].x}
              y2={height}
              stroke="rgba(0, 0, 0, 0.2)"
              strokeWidth={1}
            />

            {items.map((normalizedData, datasetIndex: number) => (
              <g key={`crosshair-${datasetIndex}`}>
                <line
                  x1={0}
                  y1={normalizedData.circles[highlightedIndex].y}
                  x2={width}
                  y2={normalizedData.circles[highlightedIndex].y}
                  stroke="rgba(0, 0, 0, 0.2)"
                  strokeWidth={1}
                />
                <text
                  x={normalizedData.circles[highlightedIndex].x + 10}
                  y={normalizedData.circles[highlightedIndex].y - 5}
                  fontSize={12}
                  fontFamily="sans-serif"
                >
                  {itemsProp[datasetIndex][highlightedIndex].value}
                </text>
              </g>
            ))}
          </Fragment>
        )}
      </svg>
      {TooltipComponent !== undefined &&
        highlightedIndex !== null &&
        items.map((normalizedData, datasetIndex: number) => (
          <TooltipComponent
            key={datasetIndex}
            x={normalizedData.circles[highlightedIndex].x + 10}
            y={normalizedData.circles[highlightedIndex].y - 5}
            data={itemsProp[datasetIndex][highlightedIndex]}
            color={circleColors[highlightedIndex % circleColors.length]}
          />
        ))}
    </div>
  )
}

export default SparklineSeries2
