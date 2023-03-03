import {
  List,
  Shape,
  HelveticaNeue,
  HelveticaNeueBold,
} from '@/system/components'
import { type default as PeopleInterface } from '../../interfaces/People'

interface Props {
  isFetching: boolean
  people: PeopleInterface
}
function People(props: Props): JSX.Element {
  const { people, isFetching } = props

  return (
    <List label="people">
      {isFetching && (
        <List.Divider>
          <HelveticaNeueBold>Loading</HelveticaNeueBold>
        </List.Divider>
      )}
      <List.Divider>
        <HelveticaNeue>5 Favorites characters</HelveticaNeue>
      </List.Divider>
      {people?.list.slice(0, 5).map((people, pos: number) => (
        <List.Item
          start={<Shape sides={pos + 3} size={36} fill="var(--gray-600)" />}
          end={<HelveticaNeue>{people?.homeWorld}</HelveticaNeue>}
          key={people.id}
        >
          <HelveticaNeueBold>{people.name}</HelveticaNeueBold>
          <HelveticaNeue>Borned around {people?.birthYear}</HelveticaNeue>
        </List.Item>
      ))}
    </List>
  )
}

export default People
