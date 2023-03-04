import { Fragment, useRef } from 'react'
import {
  Grotesk,
  GroteskXL,
  HelveticaNeue,
  HelveticaNeueBold,
  HelveticaNeueBoldS,
  HelveticaNeueBoldXL,
  HelveticaNeueL,
  GroteskLG,
  GroteskS,
  HelveticaNeueThin,
  Col,
  Row,
  IconBookmark,
  IconCaretDown,
  IconCaretUp,
  IconCheck,
  IconCross,
  IconHeart,
  IconTwitter,
  HelveticaNeueS,
  HelveticaNeueXL,
  HelveticaNeueMedium,
  Field,
  Search,
  Searchbar,
  Checkbox,
} from '@/system/components'
import useFormEnter from '@/system/hooks/events/useFormEnter'
import useFormLeave from '@/system/hooks/events/useFormLeave'
import useFocusMove from '@/system/hooks/events/useFocusMove'
import useLeader from '@/system/hooks/collection/useLeader'
import useInputValidation from '@/system/hooks/useInputValidation'
import FieldForwarded from '@/system/components/Core/Inputs/fieldForwarded'

const TipForms = (): JSX.Element => {
  const input = useRef<HTMLInputElement>(null)
  const input1Ref = useRef<HTMLInputElement | null>(null)
  const input2Ref = useRef<HTMLInputElement | null>(null)
  const input3Ref = useRef<HTMLInputElement | null>(null)

  const focusNext = useFocusMove()

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    console.log({ event, v: event.currentTarget.dataset.next })

    if (event.key === 'Enter') {
      event.preventDefault()
      const id = event.currentTarget.dataset.next
      if (id != null) {
        focusNext(id)
      }
    }
  }

  useFormEnter(() => {
    if (input.current != null) {
      input.current.focus()
    }
  })

  useFormLeave('use-form-leave', () => {
    alert('Form is not submitted, is that what you want ?')
  })

  const [{ output, all, mixed }, { onFollowerChange, onLeadChange }] =
    useLeader({
      mayo: false,
      mustard: true,
      ketchup: false,
    })

  const [value, onChange, error] = useInputValidation({
    initial: '',
    validation: 'username',
  })

  return (
    <Fragment>
      <Col as="div" gap="var(--gap-3)">
        <form id="use-form-enter">
          <FieldForwarded
            onChange={newVal => {
              console.log({ newVal })
            }}
            label=""
            value=""
            id="input0"
            ref={input}
          />
        </form>

        <form id="use-form-leave">
          <Searchbar
            label="Search"
            id="query-bar"
            value="hey ho"
            errorElementId=""
            onChange={value => {
              console.log({ value })
            }}
          />
        </form>

        <form id="use-input-validation">
          <Field
            value={value}
            onChange={value => {
              onChange(value)
            }}
            classNames={{
              input: 'accent-error',
            }}
            id="test-error-input"
            errorElementId="test-error-input-error"
            label="Username"
            placeholder="Type username"
          />
          {error !== undefined && (
            <HelveticaNeueBold
              className="color-error text-left"
              aria-live="polite"
            >
              <IconCross label="" size="lg" />
              <span id="test-error-input-error">
                {error !== undefined ? error : ''}
              </span>
            </HelveticaNeueBold>
          )}
        </form>
        <form id="use-focus-move">
          <label htmlFor="input1">Input 1</label>
          <FieldForwarded
            label=""
            value=""
            onChange={newVal => {
              console.log({ newVal })
            }}
            id="input1"
            ref={input1Ref}
            onKeyDown={handleKeyDown}
            data-next="input2"
          />
          <label htmlFor="input2">Input 2</label>
          <FieldForwarded
            label=""
            value=""
            onChange={newVal => {
              console.log({ newVal })
            }}
            id="input2"
            ref={input2Ref}
            onKeyDown={handleKeyDown}
            data-next="input3"
          />
          <label htmlFor="input3">Input 3</label>
          <FieldForwarded
            label=""
            value=""
            onChange={newVal => {
              console.log({ newVal })
            }}
            id="input3"
            ref={input3Ref}
            onKeyDown={handleKeyDown}
          />
        </form>

        <form id="use-leader">
          <Checkbox
            isMixed={mixed}
            checked={all}
            label={
              mixed ? (
                <HelveticaNeue> Some </HelveticaNeue>
              ) : all ? (
                <HelveticaNeue> All</HelveticaNeue>
              ) : (
                <HelveticaNeue> None</HelveticaNeue>
              )
            }
            name="parent"
            value="parent"
            id="parent-checkbox-test"
            onChange={ev => {
              onLeadChange()
            }}
          />

          {Object.entries(output).map(([value, state]) => (
            <Checkbox
              key={value}
              name={value.toString()}
              label={value.toString()}
              id={`${value.toString()}-test-checkbox`}
              checked={state}
              value={value}
              onChange={ev => {
                onFollowerChange(ev)
              }}
            />
          ))}
        </form>
      </Col>
    </Fragment>
  )
}

export default TipForms
