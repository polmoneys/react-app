import { type ReactNode } from 'react'
import { classes } from '@/system/utils/theme'
import Buttons from './Group'
import Button from '../Core/Inputs/button'
import styles from './index.module.css'

interface SplitItems {
  id: string
  children: ReactNode
  start?: ReactNode
  end?: ReactNode
  onClassName?: string
  offClassName?: string
}

interface Props {
  items: SplitItems[]
  initial: string[]
  onChange: (id: string) => void
}

function ButtonSplit(props: Props): JSX.Element {
  const { items, initial, onChange } = props
  return (
    <Buttons className={styles.groupSplit}>
      {items?.map(item => {
        const { children, id, onClassName, offClassName } = item
        return (
          <Button
            key={id}
            className={classes(
              initial.includes(id) ? onClassName : offClassName,
            )}
            onClick={() => {
              onChange(id)
            }}
          >
            {children}
          </Button>
        )
      })}
    </Buttons>
  )
}

export default ButtonSplit
