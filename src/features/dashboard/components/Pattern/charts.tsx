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
  Sparkline,
  SparklineSeries,
  Donut,
} from '@/system/components'
import { useRect } from '@reach/rect'
import { dataset1, dataset2 } from './utils'
import ScatterPlot from '@/system/components/ScatterPlot'
import WaffleChart from '@/system/components/Waffle'
import {
  type DataPoint,
  type DataPoints,
} from '@/system/components/Sparkline/types'
import ChartWithMiniMap from '@/system/components/Sparkline/Minimap'
import ChartWithTooltip from '@/system/components/Sparkline/Tooltip'
import SparklineSeries2 from '@/system/components/Sparkline/Series2'
import ChartLegend from '@/system/components/Sparkline/Legend'

/*

https://chat.openai.com/chat/2010843e-31e3-4cc3-9567-eaa36305f3a7

*/
// Generate a larger dataset spanning 6 months
const generateData = (startValue: number, length: number, meta = 0) => {
  const data: any[] = []
  for (let i = 0; i < length; i++) {
    const date = new Date(2023, 0, 1)
    date.setDate(date.getDate() + i)
    data.push({
      label: `hey-${meta}-${i}`,
      value: startValue + Math.random() * 20 - 10,
      date: date.toISOString(),
    })
  }
  return data
}

const data = [
  generateData(50, 180),
  generateData(100, 180),
  generateData(150, 180),
]
const data2 = [
  generateData(5, 40, 5),
  generateData(10, 40, 10),
  generateData(15, 40, 15),
]

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

// TODO:
/*

const CombinedChart: React.FC = () => {
  const ChartWithTooltipAndMiniMap = chartWithMiniMap(chartWithTooltip(SparklineSeries));
  return <ChartWithTooltipAndMiniMap items={data} />;
};


*/
interface TProps {
  data: DataPoint | null
  x: number
  y: number
  color: string
}

const CustomTooltip = (props: TProps): JSX.Element | null => {
  const { data, color, x, y } = props
  if (data == null) return null
  console.log({ data })

  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: '5px',
        padding: '5px',
        fontSize: '12px',
        fontWeight: 'bold',
        position: 'absolute',
        left: x,
        top: y,
      }}
    >
      {data.label}
    </div>
  )
}

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
          <Sparkline
            items={dataset1}
            height={100}
            topFillColor="var(--gray-700)"
            fillColor="var(--color-focus)"
            strokeColor="var(--error-100)"
            circleColor="var(--error-200)"
          />
          <ChartWithTooltip data={[dataset1]}>
            {highlightedIndex => (
              <SparklineSeries2
                items={[dataset1]}
                TooltipComponent={CustomTooltip}
                highlightedIndex={highlightedIndex}
                height={300}
                circleRadius={2}
              />
            )}
          </ChartWithTooltip>

          <SparklineSeries height={100} items={[dataset1, dataset2]} />
        </Row>

        <ChartWithMiniMap data={data} windowSize={30}>
          {windowData => (
            <SparklineSeries items={windowData} height={100} circleRadius={2} />
          )}
        </ChartWithMiniMap>

        <ChartWithTooltip data={data2}>
          {highlightedIndex => (
            <SparklineSeries2
              items={data2}
              TooltipComponent={CustomTooltip}
              highlightedIndex={highlightedIndex}
              height={300}
              circleRadius={2}
            />
          )}
        </ChartWithTooltip>

        <ChartLegend
          seriesColors={['var(--error-100)', 'var(--color-focus)', 'yellow']}
          seriesLabels={data2[0].map(l => l.label)}
        />

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
