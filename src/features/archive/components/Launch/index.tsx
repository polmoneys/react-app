import { Fragment } from 'react'
import { Card, Col, HelveticaNeue } from '@/system/components'
import { formatDate } from '@/system/utils/date'
import { type Launch as LaunchInterface } from '../../interfaces/Launches'

interface Props {
  launch?: LaunchInterface
}
function Launch(props: Props): JSX.Element {
  const { launch } = props
  if (launch === undefined) return <Fragment />
  return (
    <Card.Landscape as="div" key={launch.id} className="launch-card">
      <Card.Title>
        <HelveticaNeue>{launch.name}</HelveticaNeue>
      </Card.Title>
      <Col as="div">
        <HelveticaNeue>Flight number: {launch.flightNumber}</HelveticaNeue>
        <HelveticaNeue>On: {formatDate(launch.date)}</HelveticaNeue>
        <HelveticaNeue>Success: {launch.success ? 'Y' : 'N'}</HelveticaNeue>
      </Col>
    </Card.Landscape>
  )
}

export default Launch
