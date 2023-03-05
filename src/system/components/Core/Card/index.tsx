import {
  type AriaAttributes,
  type ElementType,
  type ReactNode,
  type DataHTMLAttributes,
} from 'react'
import { type Dictionary } from '@/system/interfaces'
import { classes } from '@/system/utils/theme'
import Media from '../../Media'
import Row from '../../Row'
import styles from './index.module.css'

const HTMLCardTags = [
  'section',
  'article',
  'aside',
  'li',
  'div',
  'form',
] as const
type HTMLCardTagsType = (typeof HTMLCardTags)[number]

const CardRatio = ['auto', 'square', 'portrait', 'landscape'] as const
type CardRatios = (typeof CardRatio)[number]

export interface CardProps {
  ratio?: CardRatios
  children: ReactNode
  dangerousStyles?: Dictionary
  className?: string
  as: HTMLCardTagsType
}

const Card = (props: CardProps): JSX.Element => {
  const {
    children,
    as = 'div',
    ratio = 'square',
    className,
    dangerousStyles,
    ...rest
  } = props

  const Tag = as ?? ('div' as ElementType)

  return (
    <Tag
      className={classes(className, styles.card)}
      style={{
        ...(dangerousStyles !== undefined && dangerousStyles),
      }}
      data-ratio={ratio}
      {...rest}
    >
      {children}
    </Tag>
  )
}

Card.Title = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <Row as="header" {...(className !== undefined && { className })}>
    {children}
  </Row>
)

Card.Actions = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <Row
    as="footer"
    className={classes('align-items-center:landscape', className)}
  >
    {children}
  </Row>
)

Card.Media = Media

Card.Portrait = (props: CardProps) => {
  const { ratio, ...rest } = props
  return <Card {...rest} ratio="portrait" />
}

Card.Landscape = (props: CardProps) => {
  const { ratio, ...rest } = props
  return <Card {...rest} ratio="landscape" />
}

export default Card
