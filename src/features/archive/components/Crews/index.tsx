import { useAppDispatch } from '@/config/store/hooks'
import { Button, Card, Col } from '@/system/components'
import { classes } from '@/system/utils/theme'
import { type default as CrewsInterface } from '../../interfaces/Crews'
import { addBulk } from '../../store'
import Crew from '../Crew'

interface Props {
  crew?: CrewsInterface
}

const assignColumnSize = (ask: number): string => {
  if (FULL.includes(ask)) return '12'
  if (HALF.includes(ask)) return '6'
  return ''
}
const FULL = [6]
const HALF = [10, 11]
const POSITIONS = [...FULL, ...HALF]

function Crews(props: Props): JSX.Element {
  const { crew } = props
  const dispatch = useAppDispatch()

  return (
    <Col as="div">
      <div data-ad="">
        {crew?.map((person, pos: number) => {
          return (
            <div key={person.id} data-ad-item={assignColumnSize(pos)}>
              <Card ratio="auto" as="div" dangerousStyles={{ width: '100%' }}>
                <Card.Media
                  src={person.image}
                  height={'340px'}
                  alt=""
                  objectPosition="top center"
                />
                <Card.Actions
                  className={classes(
                    POSITIONS.includes(pos) && 'demo-ad-full-card-actions',
                  )}
                >
                  <Button onClick={() => dispatch(addBulk({ id: person.id }))}>
                    {person.name.slice(0, 9)}...
                  </Button>
                </Card.Actions>
              </Card>
            </div>
          )
        })}
      </div>
    </Col>
  )
}

export default Crews
