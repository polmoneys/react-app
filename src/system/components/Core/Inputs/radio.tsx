import { type ChangeEvent, type ComponentProps, Fragment } from 'react'
import { FocusRing } from '@react-aria/focus'
import { type RenderProp } from '@/system/interfaces'
import { classes } from '@/system/utils/theme'
import Couple from '../../Couple'
import RadioGroup from './radioGroup'
import RadioLabel from './radioLabel'
import { HelveticaNeue } from '../../Typography'
import GroupFieldset from './radioGroupFieldset'
import RadioFieldset from './radioFieldset'
import styles from './radio.module.css'

export interface RadioProps extends ComponentProps<'input'> {
  id: string
  label?: string
  renderLabel?: RenderProp<
    { checked: boolean; checkboxLabel: string },
    HTMLElement
  >
}

function Radio(props?: RadioProps): JSX.Element {
  if (props === undefined) return <Fragment />
  const {
    onChange,
    id,
    renderLabel,
    label,
    name,
    checked = false,
    disabled = false,
    autoFocus = false,
    value,
  } = props

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>): void =>
    onChange?.(event)

  const inputLabel =
    renderLabel === undefined ? (
      <HelveticaNeue>{label}</HelveticaNeue>
    ) : (
      renderLabel?.({
        checked: props?.checked ?? false,
        checkboxLabel: props.label ?? '',
      })
    )

  const groupClassnames = classes(styles.control, checked && styles.checked)

  return (
    <Couple as="label" htmlFor={id} className={groupClassnames}>
      <FocusRing
        autoFocus={autoFocus}
        {...(!disabled && { focusClass: 'ring' })}
        {...(!disabled && { focusRingClass: 'ring' })}
      >
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onRadioChange}
        />
      </FocusRing>
      {inputLabel}
    </Couple>
  )
}

Radio.Group = RadioGroup
Radio.Fieldset = RadioFieldset
Radio.GroupFieldset = GroupFieldset

Radio.Label = RadioLabel

export default Radio
