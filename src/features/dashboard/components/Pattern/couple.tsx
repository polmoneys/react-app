import {
  HelveticaNeue,
  Row,
  IconHeart,
  View,
  Card,
  Couple,
} from '@/system/components'

const PatternCouple = (): JSX.Element => {
  return (
    <View.Popout>
      <Card ratio="auto" as="div">
        <Row as="div" gap="var(--gap-3)" size="100%">
          <Couple as="div">
            <HelveticaNeue>
              <IconHeart label="Like it" />
            </HelveticaNeue>
            <HelveticaNeue className="pair-last">React</HelveticaNeue>
          </Couple>
          <Couple as="div" className="pair-shortened ml:auto">
            <HelveticaNeue>
              <IconHeart label="Like it" />
            </HelveticaNeue>
            <HelveticaNeue className="pair-last">React</HelveticaNeue>
          </Couple>
        </Row>
        <Card.Actions>
          <HelveticaNeue className="mr:auto ml:auto">
            Couple is my fav lil component
          </HelveticaNeue>
        </Card.Actions>
      </Card>
    </View.Popout>
  )
}

export default PatternCouple
