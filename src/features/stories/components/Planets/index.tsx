import { List } from '@/system/components/Lists'
import Shape from '@/system/components/Shape'
import {
  HelveticaNeue,
  HelveticaNeueBold,
} from '@/system/components/Typography'
import { type default as PlanetsInterface } from '../../interfaces/Planets'

interface Props {
  isFetching: boolean
  planets: PlanetsInterface
}
function Planets(props: Props): JSX.Element {
  const { planets, isFetching } = props

  const format = (diameter: number): string =>
    new Intl.NumberFormat('en-US', {
      style: 'unit',
      unit: 'meter',
      unitDisplay: 'long',
    }).format(diameter)

  return (
    <List label="planets">
      {isFetching && (
        <List.Divider>
          <HelveticaNeueBold>Loading</HelveticaNeueBold>
        </List.Divider>
      )}
      <List.Divider>
        <HelveticaNeue>5 Featured planets</HelveticaNeue>
      </List.Divider>
      {planets?.list.slice(0, 5).map(planet => (
        <List.Item
          end={
            <Shape
              sides={22}
              size={planet.diameter / 500}
              fill="var(--gray-600)"
            />
          }
          key={planet.id}
        >
          <HelveticaNeueBold>{planet.name}</HelveticaNeueBold>
          <HelveticaNeue> Diameter {format(planet.diameter)}</HelveticaNeue>
        </List.Item>
      ))}
    </List>
  )
}

export default Planets
