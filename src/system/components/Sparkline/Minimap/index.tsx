import type React from 'react'
import { Fragment, useState } from 'react'
import { type DataPoint } from '../types'

interface ChartWithMiniMapProps {
  data: DataPoint[][]
  children: (data: DataPoint[][]) => React.ReactNode
  windowSize: number
}

const ChartWithMiniMap: React.FC<ChartWithMiniMapProps> = ({
  data,
  children,
  windowSize,
}) => {
  const [windowStart, setWindowStart] = useState(0)

  const handleMiniMapChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setWindowStart(parseInt(event.target.value, 10))
  }

  const dataWindow = data.map(dataset =>
    dataset.slice(windowStart, windowStart + windowSize),
  )

  const maxValue = Math.max(...data.map(dataset => dataset.length - windowSize))

  return (
    <Fragment>
      <div>{children(dataWindow)}</div>
      <input
        type="range"
        min={0}
        max={maxValue}
        value={windowStart}
        onChange={handleMiniMapChange}
        style={{ width: '100%' }}
      />
    </Fragment>
  )
}

export default ChartWithMiniMap
