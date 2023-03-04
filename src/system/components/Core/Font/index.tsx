import {
  type AriaAttributes,
  type ElementType,
  type ReactNode,
  useMemo,
} from 'react'
import { classes } from '@/system/utils/theme'
import styles from './index.module.css'

const HTMLHnTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
const HTMLtag = ['label', 'span', 'p', 'b', 'em', 'strong', 'time'] as const
type HTMLTags = (typeof HTMLtag)[number] | (typeof HTMLHnTag)[number]
type TextTransform = 'aa' | 'Aa' | 'AA'

export const SIZES: Record<string, FontSize> = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
}

const sizeUnits = ['xs', 'sm', 'md', 'lg', 'xl'] as const
export type FontSize = (typeof sizeUnits)[number]

export interface FontProps extends AriaAttributes {
  as?: HTMLTags
  size?: FontSize
  children: ReactNode
  className?: string
  date?: Date
  format?: TextTransform
  options?: Array<'number' | 'hyphenate' | 'breakWord'>
  dangerousColor?: string
  dangerousTransform?: string
}

function Font(props: FontProps): JSX.Element {
  const {
    as,
    dangerousColor,
    dangerousTransform,
    children,
    options = [],
    className,
    size = 'md',
    format = 'aa',
    ...rest
  } = props

  const Tag = as ?? ('p' as ElementType)

  const css = useMemo(
    () =>
      classes(
        className,
        styles[size],
        options.includes('breakWord') && styles.break,
        options.includes('hyphenate') && styles.hyphenate,
        options.includes('number') && styles.numeric,
        format === 'AA' && styles.uppercase,
        format === 'Aa' && styles.capitalize,
      ),
    [className, size, options],
  )

  return (
    <Tag
      {...rest}
      style={{
        ...(dangerousColor !== undefined && { color: dangerousColor }),
        ...(dangerousTransform !== undefined && {
          transform: dangerousTransform,
        }),
      }}
      className={css}
    >
      {children}
    </Tag>
  )
}

export default Font
