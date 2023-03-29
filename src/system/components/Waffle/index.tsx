interface WaffleItem {
  label: string
  value: number
  color?: string
}

interface WaffleChartProps {
  data: WaffleItem[]
  gridSize?: number
  cellSize?: number
  cellGap?: number
}

const WaffleChart = (props: WaffleChartProps): JSX.Element => {
  const { data, gridSize = 10, cellSize = 20, cellGap = 2 } = props
  const total = data.reduce((acc, item) => acc + item.value, 0)
  const totalCells = gridSize * gridSize
  const cellData = data.flatMap(({ label, value, color = 'gray' }) => {
    const cellCount = Math.round((value / total) * totalCells)
    return Array.from({ length: cellCount }, (_, i) => ({
      label,
      color,
    }))
  })

  const chartWidth = gridSize * (cellSize + cellGap)
  const chartHeight = gridSize * (cellSize + cellGap)

  return (
    <svg width={chartWidth} height={chartHeight}>
      {cellData.map(({ label, color }, index) => {
        const row = Math.floor(index / gridSize)
        const col = index % gridSize
        const x = col * (cellSize + cellGap)
        const y = row * (cellSize + cellGap)
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={cellSize}
            height={cellSize}
            fill={color}
          />
        )
      })}
    </svg>
  )
}

export default WaffleChart
