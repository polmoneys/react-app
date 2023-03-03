import { Fragment, useState } from 'react'
// import { InView } from 'react-intersection-observer'
import {
  Grotesk,
  GroteskXL,
  HelveticaNeue,
  HelveticaNeueBold,
  HelveticaNeueBoldS,
  HelveticaNeueBoldXL,
  HelveticaNeueMedium,
  HelveticaNeueThin,
} from '@/system/components/Typography'
import { Timer } from '@/system/utils/timer'
import { AlertSuccess, AlertError } from '@/system/components/Alerts'
import Col from '@/system/components/Col'
import View from '@/system/components/View'
import Grid from '@/system/components/Grid'
import { Card } from '@/system/components/Cards'
import Row from '@/system/components/Row'
import Button, { ButtonIcon } from '@/system/components/Buttons'
import {
  IconBookmark,
  IconCaretDown,
  IconCaretUp,
  IconCheck,
  IconCross,
  IconHeart,
  IconQuestion,
  IconTwitter,
} from '@/system/components/Icons'
import Couple from '@/system/components/Couple'
import Popper from '@/system/components/Core/Popper'
import Pre from '@/system/components/Pre'
import useChips from '@/system/hooks/useChips'
import Chip from '@/system/components/Buttons/Chip'
import { Breadcrumb } from '@/system/components/Breadcrumb'
import { NavLink } from '@/system/components/Link'
import { Meals } from '../components/Nested'
import Group from '@/system/components/Core/Group'

const names = ['John', 'Jim', 'Jules', 'Jack', 'Josh']

const Dashboard = (): JSX.Element => {
  const [alert, setAlert] = useState<null | string>(null)
  const [alertError, setAlertError] = useState<null | string>(null)
  const [selectedNames, dispatchName] = useChips({ initial: [] })

  // // eslint-disable-next-line no-new
  // new Timer(() => {
  //   setAlert("You've been staring page for 2s")
  // }, 2000)

  // // eslint-disable-next-line no-new
  // new Timer(() => {
  //   setAlertError('Please go hug a tree :) ')
  // }, 4000)

  const p = `
         _
      _-'_'-_
   _-' _____ '-_
_-' ___________ '-_
 |___|||||||||___|
 |___|||||||||___|
 |___|||||||o|___|
 |___|||||||||___|
 |___|||||||||___|
 |___|||||||||___|
  `

  return (
    <View>
      <View.Feature>
        <GroteskXL>friend</GroteskXL>
        {/* <Pre id="test-pre" label="" pre={p} description="" /> */}
      </View.Feature>

      <View.Popout>
        <Breadcrumb to="/">Home</Breadcrumb>
        <HelveticaNeueThin>
          Check out our <NavLink to="meals">Meals</NavLink>
        </HelveticaNeueThin>

        <Row as="div">
          {names.map(name => (
            <Chip
              key={name}
              name={name}
              dispatchName={dispatchName}
              isSelected={selectedNames.includes(name)}
            />
          ))}
        </Row>

        {selectedNames.length ? (
          <Row as="div">
            <h2>Selected</h2>
            {selectedNames.join(', ')}
            <button
              className="button menu-button"
              onClick={() => dispatchName({ type: 'clear' })}
            >
              Clear
            </button>
          </Row>
        ) : null}

        {alert !== null && (
          <AlertSuccess as="div" className="p:md">
            <HelveticaNeue>{alert}</HelveticaNeue>
          </AlertSuccess>
        )}

        {alertError !== null && (
          <AlertError as="div" className="p:md">
            <HelveticaNeue>{alertError}</HelveticaNeue>
          </AlertError>
        )}
      </View.Popout>

      <View.Full>
        <Grid as="div" size="lg" className="gap:xl">
          <Card ratio="auto" as="div">
            <Row as="div" gap="var(--gap-3)" size="100%">
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
          </Card>

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

          {/* <Card as="div" ratio="auto">
          <Col as="div">
            <label htmlFor="textarea-test">Free your words</label>

            <Textarea
              id="textarea-test"
              onChangeValue={newContent => {
                console.log(newContent)
              }}
            />
          </Col>
        </Card> */}

          <div>
            <Card as="div" ratio="auto">
              <Card.Title>Font Factory</Card.Title>
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
              <Card.Actions>
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
              </Card.Actions>
            </Card>
          </div>

          <div>
            <Card as="div" ratio="auto">
              <Card.Title>Icon Factory</Card.Title>

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
            </Card>
          </div>
        </Grid>
      </View.Full>
    </View>
  )
}

export default Dashboard
