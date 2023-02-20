import { classes } from '@/system/utils/theme'
import Alert, { type AlertProps } from '../Core/Alert'

export const AlertSuccess = (props: AlertProps): JSX.Element => {
  const { className, ...rest } = props
  return <Alert {...rest} className={classes(className, 'accent')} />
}

export const AlertError = (props: AlertProps): JSX.Element => {
  const { className, ...rest } = props
  return <Alert {...rest} className={classes(className, 'invalid')} />
}

export default Alert
