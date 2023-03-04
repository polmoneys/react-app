import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { HelveticaNeueBold, Breadcrumb, View, Col } from '@/system/components'
import PatternGradients from './gradients'
import PatternCouple from './couple'

const Pattern = (): JSX.Element => {
  const { pattern: patternParam } = useParams()
  const pattern = patternParam ?? 'undefined'
  return (
    <View.Feature>
      <Breadcrumb to={`/pattern${patternParam ?? ''}`}>
        Tip {patternParam}
      </Breadcrumb>
      <Col as="div" gap="var(--gap-3)">
        <HelveticaNeueBold>PATTERN {patternParam}</HelveticaNeueBold>
        {
          {
            gradients: <PatternGradients />,
            couple: <PatternCouple />,
            undefined: <Fragment />,
          }[pattern]
        }
      </Col>
    </View.Feature>
  )
}

export default Pattern
