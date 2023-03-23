import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { HelveticaNeueBold, Breadcrumb } from '@/system/components'
import PatternGradients from './gradients'
import PatternCouple from './couple'
import PatternMarginAuto from './marginAuto'
import PatternDataViz from './charts'

const Pattern = (): JSX.Element => {
  const { pattern: patternParam } = useParams()
  const pattern = patternParam ?? 'undefined'
  return (
    <Fragment>
      <Breadcrumb to={`/patterns/${patternParam ?? ''}`}>
        Pattern {patternParam}
      </Breadcrumb>
      {/* <HelveticaNeueBold format="Aa"> {patternParam}</HelveticaNeueBold> */}
      {
        {
          gradients: <PatternGradients />,
          couple: <PatternCouple />,
          auto: <PatternMarginAuto />,
          viz: <PatternDataViz />,
          undefined: <Fragment />,
        }[pattern]
      }
    </Fragment>
  )
}

export default Pattern
