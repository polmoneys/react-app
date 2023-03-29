interface ChartLegendProps {
  seriesLabels: string[]
  seriesColors: string[]
}

const ChartLegend = (props: ChartLegendProps): JSX.Element => {
  const { seriesLabels, seriesColors } = props
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {seriesLabels.map((label, index) => (
        <li
          key={index}
          style={{
            backgroundColor: seriesColors[index % seriesColors.length],
          }}
        >
          {label}
        </li>
      ))}
    </ul>
  )
}

export default ChartLegend
