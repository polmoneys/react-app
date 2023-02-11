import { type ComponentProps, type ChangeEvent, type ReactNode } from 'react'
import { FocusRing } from '@react-aria/focus'
import Couple from '@/system/components/Couple'
import { classes } from '@/system/utils/theme'
import styles from './switch.module.css'

interface SwitchProps extends ComponentProps<'input'> {
  initial: boolean
  onChangeBoolean: (value: boolean) => void
  label: ReactNode
}

function Switch(props: SwitchProps) {
  const {
    className,
    initial = false,
    onChangeBoolean,
    id,
    label,
    disabled = false,
    autoFocus = false,
    ...rest
  } = props

  const onSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeBoolean(event.target.checked)
  }
  return (
    <Couple
      as="label"
      htmlFor={id}
      className={classes(styles.group, className)}
    >
      <FocusRing
        autoFocus={autoFocus}
        {...(!disabled && { focusClass: 'ring' })}
        {...(!disabled && { focusRingClass: 'ring' })}
      >
        <input
          type="checkbox"
          {...(initial && { checked: true })}
          onChange={onSwitchChange}
          {...rest}
        />
      </FocusRing>
      {label}
    </Couple>
  )
}

interface SwitchPropsUncontrolled extends ComponentProps<'input'> {
  label: ReactNode
}

Switch.Uncontrolled = (props: SwitchPropsUncontrolled) => {
  const {
    className,
    id,
    label,
    disabled = false,
    autoFocus = false,
    ...rest
  } = props

  return (
    <Couple
      as="label"
      htmlFor={id}
      className={classes(styles.group, className)}
    >
      <FocusRing
        autoFocus={autoFocus}
        {...(!disabled && { focusClass: 'ring' })}
        {...(!disabled && { focusRingClass: 'ring' })}
      >
        <input type="checkbox" {...rest} />
      </FocusRing>
      {label}
    </Couple>
  )
}

export default Switch
