import { Fragment } from 'react'
import {
  Grotesk,
  GroteskXL,
  HelveticaNeue,
  HelveticaNeueBold,
  HelveticaNeueBoldS,
  HelveticaNeueBoldXL,
  HelveticaNeueMedium,
  HelveticaNeueThin,
  Col,
  View,
  Row,
  Button,
  ButtonIcon,
  IconBookmark,
  IconCaretDown,
  IconCaretUp,
  IconCheck,
  IconCross,
  IconHeart,
  IconQuestion,
  IconTwitter,
  Popper,
  Chip,
  Card,
  Couple,
  Breadcrumb,
} from '@/system/components'
import useChips from '@/system/hooks/useChips'

const names = ['John', 'Jim', 'Jules', 'Jack', 'Josh']

const UI = (): JSX.Element => {
  const [selectedNames, dispatchName] = useChips({ initial: [] })

  return (
    <Fragment>
      <Breadcrumb to="/ui">UI</Breadcrumb>
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

        <Row as="div">
          {names.map(name => (
            <Chip
              key={name}
              name={name}
              dispatch={dispatchName}
              isSelected={selectedNames.includes(name)}
            />
          ))}
        </Row>

        {selectedNames.length > 0 ? (
          <Row as="div">
            <HelveticaNeueBoldS>Selected</HelveticaNeueBoldS>
            {selectedNames.join(', ')}
            <Button
              onClick={() => {
                dispatchName({ type: 'clear' })
              }}
            >
              Clear
            </Button>
          </Row>
        ) : null}

        <Col as="div">
          <Row as="div">
            <Button>Bookmark</Button>

            <Button className="unspace">
              <IconBookmark label="" />{' '}
            </Button>
            <ButtonIcon>
              <IconBookmark label="" size="sm" />
            </ButtonIcon>
            <ButtonIcon>
              <IconBookmark label="" />
            </ButtonIcon>
            <ButtonIcon>
              <IconBookmark size="lg" label="" />
            </ButtonIcon>

            <Button badge="3">Whispers</Button>

            <Button data-shape="circle" badge="3">
              Whispers
            </Button>

            <ButtonIcon badge="3">
              <IconBookmark label="" size="lg" />
            </ButtonIcon>
            <ButtonIcon badge="3" data-shape="circle">
              <IconBookmark label="" size="lg" />
            </ButtonIcon>
          </Row>

          {/* <Col as="div">
            <label htmlFor="textarea-test">Free your words</label>

            <Textarea
              id="textarea-test"
              onChangeValue={newContent => {
                console.log(newContent)
              }}
            />
          </Col> */}

          <Col as="div">
            <Grotesk>Aa aa AA</Grotesk>
            <HelveticaNeueThin>Aa aa AA</HelveticaNeueThin>
            <HelveticaNeue>Aa aa AA</HelveticaNeue>
            <HelveticaNeueMedium>Aa aa AA</HelveticaNeueMedium>
            <HelveticaNeueBold>Aa aa AA</HelveticaNeueBold>
            <GroteskXL>Aa aa AA</GroteskXL>

            <HelveticaNeue>Aa aa AA</HelveticaNeue>
            <HelveticaNeueBoldS>Aa aa AA</HelveticaNeueBoldS>
            <HelveticaNeueBoldXL>Aa aa AA</HelveticaNeueBoldXL>
            <HelveticaNeueBold>Aa aa AA</HelveticaNeueBold>
            <HelveticaNeueThin>Aa aa AA</HelveticaNeueThin>
          </Col>

          <HelveticaNeue>Size and family</HelveticaNeue>
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
          <Row as="div" options={{ wrap: 'wrap' }}>
            <IconBookmark stroke={'var(--accent)'} size="sm" label="" />
            <IconCaretDown stroke={'var(--accent)'} size="sm" label="" />
            <IconCaretUp stroke={'var(--accent)'} size="sm" label="" />
            <IconCheck stroke={'var(--accent)'} size="sm" label="" />
            <IconCross stroke={'var(--accent)'} size="sm" label="" />
            <IconHeart stroke={'var(--accent)'} size="sm" label="" />
            <IconTwitter stroke={'var(--accent)'} size="sm" label="" />

            <IconBookmark stroke={'var(--accent)'} label="" />
            <IconCaretDown stroke={'var(--accent)'} label="" />
            <IconCaretUp stroke={'var(--accent)'} label="" />
            <IconCheck stroke={'var(--accent)'} label="" />
            <IconCross stroke={'var(--accent)'} label="" />
            <IconHeart stroke={'var(--accent)'} label="" />
            <IconTwitter stroke={'var(--accent)'} label="" />

            <IconBookmark stroke={'var(--accent)'} size="lg" label="" />
            <IconCaretDown stroke={'var(--accent)'} size="lg" label="" />
            <IconCaretUp stroke={'var(--accent)'} size="lg" label="" />
            <IconCheck stroke={'var(--accent)'} size="lg" label="" />
            <IconCross stroke={'var(--accent)'} size="lg" label="" />
            <IconHeart stroke={'var(--accent)'} size="lg" label="" />
            <IconTwitter stroke={'var(--accent)'} size="lg" label="" />
          </Row>
        </Col>
      </View.Popout>
    </Fragment>
  )
}

export default UI
