import { useRef, useState } from 'react'
import {
  View,
  Shape,
  Line,
  ButtonIcon,
  IconSlash,
  Col,
  Row,
  Sparkbar,
  Donut,
  type Area,
  Areas,
} from '@/system/components'
import { useRect } from '@reach/rect'
import ScatterPlot from '@/system/components/ScatterPlot'
import WaffleChart from '@/system/components/Waffle'

const generateFakeData = (startValue: number, range: number, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    label: `Point ${i + 1}`,
    x: i,
    y: startValue + Math.random() * range,
  }))
}

const waffleData = [
  { label: 'A', value: 50, color: 'red' },
  { label: 'B', value: 100, color: 'blue' },
  { label: 'C', value: 250, color: 'green' },
]

const series = [
  {
    data: generateFakeData(10, 30, 50),
    fillColor: 'red',
    strokeColor: 'black',
  },
  {
    data: generateFakeData(10, 30, 50),
    fillColor: 'blue',
    strokeColor: 'black',
  },
  {
    data: generateFakeData(90, 30, 50),
    fillColor: 'green',
    strokeColor: 'black',
  },
]

interface CustomArea extends Area {
  label: string
}

const customData: CustomArea[] = [
  { value: 10, label: 'A' },
  { value: 20, label: 'B' },
  { value: 30, label: 'C' },
]

const PatternDataViz = (): JSX.Element => {
  const [variant, setVariant] = useState<'curve' | 'line'>('line')

  const refA = useRef<HTMLDivElement | null>(null) // Point A
  const refB = useRef<HTMLDivElement | null>(null) // Point B
  const refC = useRef<HTMLDivElement | null>(null) // Point C

  const maskRef = useRef<HTMLDivElement | null>(null)

  const rect = useRect(maskRef, { observe: true })

  return (
    <View.Popout>
      <Col as="div" gap="2em">
        <Row as="div" gap="var(--gap-4)">
          <Donut value={2} />
          <Donut value={25} />
          <Donut value={50} />
          <Donut value={75} />
          <Donut value={99} />
        </Row>

        <ButtonIcon
          onClick={() => {
            setVariant(prev => (prev === 'line' ? 'curve' : 'line'))
          }}
        >
          <IconSlash label="" />
        </ButtonIcon>

        <Sparkbar values={[10, 20, 120, 80, 40, 70, 80]} />
        <Sparkbar.Vertical values={[10, 20, 120, 80, 40, 70, 80]} />
        <ScatterPlot series={series} svgWidth={500} svgHeight={200} />
        <ScatterPlot series={[series[0]]} svgWidth={500} svgHeight={200} />
        <WaffleChart
          data={waffleData}
          gridSize={10}
          cellSize={30}
          cellGap={2}
        />
        <div style={{ width: '300px', height: '300px', border: '2px solid' }}>
          <Areas<CustomArea> datum={customData} />
        </div>
      </Col>

      <div ref={maskRef} className="demo-party">
        <div className="ref-1" ref={refA}>
          <Shape.Square fill="var(--color-invalid)" size={100} />
        </div>
        <div className="ref-2" ref={refB}>
          <Shape.Square fill="var(--color-invalid)" size={100} />
        </div>
        <div className="ref-3" ref={refC}>
          <Shape.Square fill="var(--color-invalid)" size={100} />
        </div>
        <Line
          boundary={rect}
          variant={variant}
          round
          refs={[refA, refB, refC]}
          weigth={10}
          fill={'yellow'}
        />
      </div>
    </View.Popout>
  )
}

export default PatternDataViz
