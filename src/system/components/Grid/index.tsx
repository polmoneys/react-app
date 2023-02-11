import { type ElementType, type ReactNode } from 'react'
import { classes } from '@/system/utils/theme'
import styles from './index.module.css'

const HTMLGridTags = ['section', 'article', 'li', 'div', 'form'] as const
type GridTags = (typeof HTMLGridTags)[number]

const sizeUnits = ['xs', 'sm', 'md', 'lg', 'xl'] as const
type GridSize = (typeof sizeUnits)[number]

export interface CardProps {
  size?: GridSize
  children: ReactNode
  className?: string
  as: GridTags
}

const Grid = (props: CardProps): JSX.Element => {
  const { children, as = 'div', size = 'sm', className } = props

  const Tag = as ?? ('div' as ElementType)

  return (
    <Tag className={classes(className, styles.grid)} data-grid={size}>
      {children}
    </Tag>
  )
}

export default Grid
