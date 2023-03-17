import { useRef, useState } from 'react'
import {
  View,
  Shape,
  Line,
  ButtonIcon,
  IconSlash,
  Col,
  Row,
} from '@/system/components'
import { useRect } from '@reach/rect'
import Sparkline from '@/system/components/Sparkline'
import SparklineSeries from '@/system/components/Sparkline/Series'
import Donut from '@/system/components/Donut'
import { dataset1, dataset2 } from './utils'

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
          <SparklineSeries height={100} items={[dataset1, dataset2]} />
        </Row>

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
