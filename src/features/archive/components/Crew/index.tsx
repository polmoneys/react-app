import { Fragment } from 'react'
import {
  ButtonIcon,
  Card,
  Col,
  HelveticaNeue,
  IconCross,
  Link,
  Row,
} from '@/system/components/'
import { useAppDispatch } from '@/config/store/hooks'
import { not } from '@/system/utils/language'
import useCrewBulk from '../../hooks/useCrewBulk'
import { removeBulk } from '../../store'
import { type Crew as CrewInterface } from '../../interfaces/Crews'

function Crew(): JSX.Element {
  const crews = useCrewBulk()
  const dispatch = useAppDispatch()

  return (
    <Row
      as="div"
      options={{
        wrap: 'wrap',
      }}
    >
      {(crews ?? [])?.map(c => {
        if (not(c.data)) return <Fragment />
        const crewDatum: CrewInterface = c.data!
        return (
          <Card.Landscape
            key={crewDatum.id}
            as="aside"
            className="archive-crew-card"
          >
            <Card.Title>
              <ButtonIcon
                onClick={() => dispatch(removeBulk({ id: crewDatum.id }))}
              >
                <IconCross label="Close details" />
              </ButtonIcon>
            </Card.Title>
            <Col as="div">
              <HelveticaNeue>{crewDatum?.name}</HelveticaNeue>
              <HelveticaNeue>{crewDatum?.agency}</HelveticaNeue>
              <Link to={crewDatum?.wiki ?? ''}>Wikipedia</Link>
            </Col>
          </Card.Landscape>
        )
      })}
    </Row>
  )
}

export default Crew
