import {
  HelveticaNeue,
  HelveticaNeueBold,
  Col,
  Row,
  IconHeart,
  View,
  Card,
  Couple,
  Popper,
  ButtonIcon,
  IconQuestion,
} from '@/system/components'

const PatternCouple = (): JSX.Element => {
  return (
    <View.Popout>
      <Col as="aside" gap="var(--gap-3)">
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
        <Popper
          content={
            <Col
              as="div"
              options={{
                DANGEROUS: {
                  backgroundColor: 'var(--color-invalid)',
                  padding: 'var(--gap-3)',
                },
              }}
            >
              <HelveticaNeueBold dangerousColor="var(--white-100)">
                hello darkness my old friend
              </HelveticaNeueBold>
            </Col>
          }
          position="left"
        >
          {({ toggle }) => {
            return (
              <ButtonIcon onClick={toggle}>
                <IconQuestion label="" />
              </ButtonIcon>
            )
          }}
        </Popper>
      </Col>
    </View.Popout>
  )
}

export default PatternCouple
