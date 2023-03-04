import { type ComponentProps, type ReactNode } from 'react'
import { FocusRing } from '@react-aria/focus'
import { classes } from '@/system/utils/theme'
import { not } from '@/system/utils/language'
import styles from './button.module.css'

export interface ButtonProps extends ComponentProps<'button'> {
  children: string | ReactNode
  badge?: string | number
  ringless?: boolean
  circle?: boolean
}

const Button = (props: ButtonProps): JSX.Element => {
  const {
    className,
    children,
    badge,
    disabled = false,
    autoFocus = false,
    circle = false,
    ringless = false,
    ...rest
  } = props

  const hideRing = disabled || ringless
  return (
    <FocusRing
      autoFocus={autoFocus}
      {...(!hideRing && { focusClass: 'ring', focusRingClass: 'ring' })}
    >
      <button
        {...(!not(badge) && {
          'data-badge': badge,
        })}
        data-theme=""
        {...rest}
        className={classes(
          className,
          !not(badge) && styles.badge,
          circle && styles.circle,
          hideRing && styles.unstyleFocus,
        )}
      >
        {children}
      </button>
    </FocusRing>
  )
}

export default Button
