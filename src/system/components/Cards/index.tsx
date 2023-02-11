import { classes } from '@/system/utils/theme'
import Card, { type CardProps } from '../Core/Card'
export { default as Card } from '../Core/Card'

export const CardPortraitSuccess = (props: CardProps): JSX.Element => {
  const { ratio, className, ...rest } = props
  return (
    <Card {...rest} ratio="portrait" className={classes('accent', className)} />
  )
}

export const CardPortraitError = (props: CardProps): JSX.Element => {
  const { ratio, className, ...rest } = props
  return (
    <Card
      {...rest}
      ratio="portrait"
      className={classes('invalid', className)}
    />
  )
}
