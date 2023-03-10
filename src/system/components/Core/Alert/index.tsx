import { type AriaAttributes, type ReactNode } from 'react'
import Group, { type GroupProps } from '../Group'

export interface AlertProps extends GroupProps {
  role?: 'alert' | 'status' | 'log' | 'none'
  live?: 'polite' | 'off' | 'assertive'
  relevant?: AriaAttributes['aria-relevant']
  children: ReactNode
}

function Alert(props: AlertProps): JSX.Element {
  const {
    role = 'status',
    live = 'polite',
    children,
    relevant = 'additions text',
    ...groupProps
  } = props

  return (
    <Group
      {...groupProps}
      role={role}
      aria-live={live}
      aria-relevant={relevant}
      data-theme=""
    >
      {children}
    </Group>
  )
}
export default Alert
