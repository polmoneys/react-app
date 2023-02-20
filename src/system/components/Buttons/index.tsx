import { classes } from '@/system/utils/theme'
import Button, { type ButtonProps } from '../Core/Inputs/button'

export const ButtonSuccess = (props: ButtonProps): JSX.Element => {
  const { className, ...rest } = props
  return <Button {...rest} className={classes('accent', className)} />
}
export const ButtonError = (props: ButtonProps): JSX.Element => {
  const { className, ...rest } = props
  return <Button {...rest} className={classes('invalid', className)} />
}

export default Button
