import { Fragment } from 'react'

export interface YAxisProps {
  minY: number
  maxY: number
  yAxisTicks: number
  tickInterval: number
  normalizeY: (value: number) => number
  height: number
  width?: number
  circles?: boolean
  circleRadius?: number
  tickHeight?: number
}

const YAxis = (props: YAxisProps): JSX.Element => {
  const {
    minY,
    yAxisTicks,
    tickInterval,
    normalizeY,
    width = 50,
    height,
    circles = false,
    circleRadius = 2,
    tickHeight = 10,
  } = props

  const adjustedSvgHeight = height - 2 * circleRadius
  const adjustedNormalizeY = (value: number): number =>
    normalizeY(value) - circleRadius

  const markup = (): JSX.Element[] => {
    const ticks = []

    for (let i = 0; i <= yAxisTicks; i++) {
      const tickValue = minY + i * tickInterval
      const y = adjustedSvgHeight - adjustedNormalizeY(tickValue)

      ticks.push(
        <Fragment key={i}>
          {circles ? (
            <circle cx={tickHeight / 2} cy={y} r={circleRadius} fill="#000" />
          ) : (
            <line x1={0} y1={y} x2={tickHeight} y2={y} stroke="#000" />
          )}
          <text x={tickHeight + 5} y={y + 4} fontSize="10" textAnchor="start">
            {tickValue.toFixed(1)}
          </text>
        </Fragment>,
      )
    }

    return ticks
  }

  return (
    <svg width={width} height={height} style={{ overflowY: 'visible' }}>
      {markup()}
    </svg>
  )
}

export default YAxis
