import { type ComponentProps, type ReactNode } from 'react'
import { FocusRing } from '@react-aria/focus'
import { classes } from '@/system/utils/theme'

export interface ButtonProps extends ComponentProps<'button'> {
  children: string | ReactNode
}

const Button = (props: ButtonProps) => {
  const {
    className,
    children,
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
      <button {...rest} className={classes(className)}>
        {children}
      </button>
    </FocusRing>
  )
}

export default Button
