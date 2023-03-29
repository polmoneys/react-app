import type React from 'react'

interface DataPoint {
  label: string
  x: number
  y: number
}

interface Serie {
  data: DataPoint[]
  fillColor?: string
  strokeColor?: string
}

interface ScatterPlotProps {
  series: Serie[]
  svgWidth: number
  svgHeight: number
  circleRadius?: number
}

const ScatterPlot: React.FC<ScatterPlotProps> = ({
  series,
  svgWidth,
  svgHeight,
  circleRadius = 3,
}) => {
  const allDataPoints = series.flatMap(({ data }) => data)
  const minX = Math.min(...allDataPoints.map(({ x }) => x))
  const maxX = Math.max(...allDataPoints.map(({ x }) => x))
  const minY = Math.min(...allDataPoints.map(({ y }) => y))
  const maxY = Math.max(...allDataPoints.map(({ y }) => y))

  const normalizeX = (value: number): number => {
    return (
      ((value - minX) / (maxX - minX)) * (svgWidth - 2 * circleRadius) +
      circleRadius
    )
  }

  const normalizeY = (value: number): number => {
    return (
      ((value - minY) / (maxY - minY)) * (svgHeight - 2 * circleRadius) +
      circleRadius
    )
  }

  return (
    <svg width={svgWidth} height={svgHeight}>
      {series.flatMap(
        ({ data, fillColor = 'red', strokeColor = 'black' }, serieIndex) =>
          data.map(({ label, x, y }, index) => (
            <circle
              key={`${serieIndex}-${index}`}
              cx={normalizeX(x)}
              cy={svgHeight - normalizeY(y)}
              r={circleRadius}
              fill={fillColor}
              stroke={strokeColor}
            />
          )),
      )}
    </svg>
  )
}

export default ScatterPlot
