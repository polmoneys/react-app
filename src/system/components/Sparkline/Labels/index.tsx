import { type ReactNode, useMemo } from 'react'

interface DataPoint {
  label: string
  value: number
  date: string
}

interface ChartDataLabelsProps {
  data: DataPoint[][]
  positions: Array<Array<{ x: number; y: number }>>
  seriesColors: string[]
  fontSize?: number
}

const ChartDataLabels = (props: ChartDataLabelsProps): JSX.Element => {
  const { data, positions, seriesColors, fontSize = 12 } = props

  const labels = useMemo(() => {
    const allLabels: ReactNode[] = []

    data.forEach((series, seriesIndex) => {
      series.forEach((point, pointIndex) => {
        allLabels.push(
          <text
            key={`${seriesIndex}-${pointIndex}`}
            x={positions[seriesIndex][pointIndex].x}
            y={positions[seriesIndex][pointIndex].y - fontSize / 2}
            fill={seriesColors[seriesIndex % seriesColors.length]}
            fontSize={fontSize}
            textAnchor="middle"
          >
            {point.value}
          </text>,
        )
      })
    })

    return allLabels
  }, [data, positions, seriesColors, fontSize])

  return <>{labels}</>
}

export default ChartDataLabels
