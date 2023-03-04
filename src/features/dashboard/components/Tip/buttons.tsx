import { Fragment } from 'react'
import {
  HelveticaNeueBoldS,
  Row,
  Button,
  ButtonIcon,
  IconBookmark,
  Chip,
  Buttons,
  Col,
  HelveticaNeueS,
  HorizontalScroll,
} from '@/system/components'
import useChips from '@/system/hooks/collection/useChips'
import useArray from '@/system/hooks/collection/useArray'

export const DEMO_BUTTON_GROUP = [
  { id: '1', label: '0%', value: 'a' },
  { id: '2', label: '25%', value: 'b' },
  { id: '3', label: '50%', value: 'c' },
  { id: '4', label: '75%', value: 'd' },
  { id: '5', label: '100%', value: 'e' },
]

export const DEMO_BUTTON_SPLIT = [
  {
    id: '0',
    children: 'PEACE NOW',
    onClassName: 'onSplitMain',
    offClassName: 'offSplitMain',
  },
  {
    id: '1',
    children: 'WAR',
    // start: <FiCrosshair />,
    onClassName: 'onSplitSecondary',
    offClassName: 'offSplitSecondary',
  },
]

const names = ['John', 'Jim', 'Jules', 'Jack', 'Josh']

const TipButtons = (): JSX.Element => {
  const [selectedNames, dispatchName] = useChips({ initial: [] })

  const [{ uuids }, dispatch] = useArray({
    initial: [DEMO_BUTTON_GROUP[0]],
  })

  const onChange = (selected: Record<string, any>): void => {
    const newId = selected.id
    if (uuids.includes(newId)) {
      dispatch({ type: 'removeById', id: newId })
    } else {
      dispatch({ type: 'end', item: selected })
    }
  }

  return (
    <Fragment>
      <Col as="div" gap="var(--gap-3)">
        <Row as="div">
          {names.map(name => (
            <Chip
              key={name}
              name={name}
              dispatch={dispatchName}
              isSelected={selectedNames.has(name)}
            />
          ))}
        </Row>

        {selectedNames.size > 0 ? (
          <Row as="div" options={{ alignItems: 'center' }}>
            <HelveticaNeueBoldS>Selection:</HelveticaNeueBoldS>
            <HelveticaNeueS>{[...selectedNames].join(', ')}</HelveticaNeueS>
            <Button
              onClick={() => {
                dispatchName({ type: 'clear' })
              }}
            >
              Clear
            </Button>
          </Row>
        ) : (
          <Fragment />
        )}

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

        <Buttons>
          {DEMO_BUTTON_GROUP.map(item => (
            <Button
              key={item.id}
              className={
                uuids.includes(item.id)
                  ? 'active-button-in-group'
                  : 'idle-button-in-group'
              }
              onClick={() => {
                onChange(item)
              }}
              ringless
            >
              {item.label}
            </Button>
          ))}
        </Buttons>

        <Buttons direction="vertical">
          {DEMO_BUTTON_GROUP.map(item => (
            <Button
              key={item.id}
              className={
                uuids.includes(item.id)
                  ? 'active-button-in-group'
                  : 'idle-button-in-group'
              }
              onClick={() => {
                onChange(item)
              }}
              ringless
            >
              {item.label}
            </Button>
          ))}
        </Buttons>

        <HorizontalScroll progress={false}>
          <Buttons>
            {DEMO_BUTTON_GROUP.map(item => (
              <Button
                key={item.id}
                className={
                  uuids.includes(item.id)
                    ? 'active-button-in-group'
                    : 'idle-button-in-group'
                }
                onClick={() => {
                  onChange(item)
                }}
                ringless
              >
                {item.label}
              </Button>
            ))}
          </Buttons>
          <Buttons>
            {DEMO_BUTTON_GROUP.map(item => (
              <Button
                key={item.id}
                className={
                  uuids.includes(item.id)
                    ? 'active-button-in-group'
                    : 'idle-button-in-group'
                }
                onClick={() => {
                  onChange(item)
                }}
                ringless
              >
                {item.label}
              </Button>
            ))}
          </Buttons>
        </HorizontalScroll>
      </Col>
    </Fragment>
  )
}

export default TipButtons
