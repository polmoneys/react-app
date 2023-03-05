import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { HelveticaNeueBold, Breadcrumb, View, Col } from '@/system/components'
import PatternGradients from './gradients'
import PatternCouple from './couple'
import PatternMarginAuto from './marginAuto'

const Pattern = (): JSX.Element => {
  const { pattern: patternParam } = useParams()
  const pattern = patternParam ?? 'undefined'
  return (
    <Fragment>
      <Breadcrumb to={`/pattern/${patternParam ?? ''}`}>
        Tip {patternParam}
      </Breadcrumb>
      <HelveticaNeueBold format="Aa"> {patternParam}</HelveticaNeueBold>
      {
        {
          gradients: <PatternGradients />,
          couple: <PatternCouple />,
          auto: <PatternMarginAuto />,
          undefined: <Fragment />,
        }[pattern]
      }
    </Fragment>
  )
}

export default Pattern
