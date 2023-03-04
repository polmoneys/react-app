import { type ReactNode } from 'react'
import { FocusScope } from '@react-aria/focus'
import { classes } from '@/system/utils/theme'
import Group from '../Core/Group'
import styles from './index.module.css'

interface Props {
  children: ReactNode
  className?: string
  direction?: 'horizontal' | 'vertical'
  initial?: number | null
}

function Buttons(props: Props): JSX.Element {
  const { children, direction, className } = props
  const isVertical = direction === 'vertical'
  const groupClassNames = classes(
    styles.group,
    isVertical && styles.groupVertical,
    className,
  )
  return (
    <Group gap="0" as="div" className={groupClassNames}>
      <FocusScope>{children}</FocusScope>
    </Group>
  )
}

export default Buttons
