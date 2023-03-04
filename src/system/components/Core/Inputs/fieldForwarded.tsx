import { type ComponentProps, forwardRef, type ForwardedRef } from 'react'
import { classes } from '@/system/utils/theme'
import Group from '../Group'
import styles from './field.module.css'

interface Props
  extends Omit<ComponentProps<'input'>, 'value' | 'onChange' | 'className'> {
  value: string
  label: string
  onChange: (val: string) => void
  id: string
  errorElementId?: string
  direction?: 'row' | 'column'
  classNames?: {
    group?: string
    input?: string
  }
}

const FieldForwarded = forwardRef<HTMLInputElement, Props>(
  (props: Props, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    const {
      id,
      value,
      onChange,
      direction = 'column',
      classNames,
      label,
      errorElementId,
      ...rest
    } = props

    return (
      <Group
        as="div"
        options={{
          direction,
          alignItems: 'flex-start',
        }}
        className={classes(styles.group, classNames?.group)}
      >
        <label htmlFor={id}>{label}</label>
        <input
          {...rest}
          id={id}
          type="text"
          className={classes(styles.input, classNames?.input)}
          {...(ref != null && { ref })}
          {...(errorElementId !== undefined && {
            'aria-describedby': errorElementId,
          })}
          onChange={event => {
            onChange(event.target.value)
          }}
        />
      </Group>
    )
  },
)

export default FieldForwarded
