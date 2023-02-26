import { useAppDispatch } from '@/config/store/hooks'
import Button from '@/system/components/Buttons'
import { Card } from '@/system/components/Cards'
import Col from '@/system/components/Col'
import Grid from '@/system/components/Grid'
import { type default as CrewsInterface } from '../../interfaces/Crews'
import { addBulk } from '../../store'
import Crew from '../Crew'

interface Props {
  crew?: CrewsInterface
}

function Crews(props: Props): JSX.Element {
  const { crew } = props
  const dispatch = useAppDispatch()

  return (
    <Col as="div">
      <Crew />
      <Grid as="div" size="sm" className="gap:xl">
        {crew?.map(person => (
          <Card ratio="square" as="div" key={person.id}>
            <Card.Media
              src={person.image}
              height="100%"
              alt=""
              objectPosition="top center"
            />
            <Card.Actions>
              <Button onClick={() => dispatch(addBulk({ id: person.id }))}>
                {person.name}
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </Grid>
    </Col>
  )
}

export default Crews
