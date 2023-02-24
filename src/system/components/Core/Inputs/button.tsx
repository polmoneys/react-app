import { type ComponentProps, type ReactNode } from 'react'
import { FocusRing } from '@react-aria/focus'
import { classes } from '@/system/utils/theme'
import { not } from '@/system/utils/language'
import styles from './button.module.css'

export interface ButtonProps extends ComponentProps<'button'> {
  children: string | ReactNode
  badge?: string | number
}

const Button = (props: ButtonProps): JSX.Element => {
  const {
    className,
    children,
    badge,
    disabled = false,
    autoFocus = false,
    ...rest
  } = props
  return (
    <FocusRing
      autoFocus={autoFocus}
      {...(!disabled && { focusClass: 'ring' })}
      {...(!disabled && { focusRingClass: 'ring' })}
    >
      <button
        {...(!not(badge) && {
          'data-badge': badge,
        })}
        data-theme=""
        {...rest}
        className={classes(className, !not(badge) && styles.badge)}
      >
        {children}
      </button>
    </FocusRing>
  )
}

export default Button
