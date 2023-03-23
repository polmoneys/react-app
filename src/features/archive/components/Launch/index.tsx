import { Fragment } from 'react'
import {
  Card,
  Col,
  GroteskXL,
  HelveticaNeue,
  HelveticaNeueThin,
} from '@/system/components'
import { type Launch as LaunchInterface } from '../../interfaces/Launches'
import { classes } from '@/system/utils/theme'
import { formatDateTime } from '@/system/utils/date'

interface Props {
  launch?: LaunchInterface
}
function Launch(props: Props): JSX.Element {
  const { launch } = props
  if (launch === undefined) return <Fragment />

  return (
    <Card.Landscape
      as="div"
      key={launch.id}
      data-theme=""
      className={classes(launch.success ? 'accent' : 'invalid', 'launch-card')}
    >
      <Card.Title>
        <GroteskXL>{launch.name}</GroteskXL>
      </Card.Title>
      <Col as="div">
        <HelveticaNeue>Flight number: {launch.flightNumber}</HelveticaNeue>
        <HelveticaNeueThin as="span">
          On: {formatDateTime(new Date(launch.date))}
        </HelveticaNeueThin>
      </Col>
    </Card.Landscape>
  )
}

export default Launch
