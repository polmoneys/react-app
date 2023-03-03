import {
  type ComponentProps,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from 'react'
import { FocusRing } from '@react-aria/focus'
import { classes } from '@/system/utils/theme'
import Group from '../Group'
import { IconCross } from '../../Icons'
import { ButtonIcon } from '../../Buttons'
import styles from './field.module.css'

interface Props
  extends Omit<ComponentProps<'input'>, 'value' | 'onChange' | 'className'> {
  value: string
  label: string
  onChange: (val: string) => void
  id: string
  direction?: 'row' | 'column'
  classNames?: {
    group?: string
    input?: string
  }
}

function Tokenized(props: Props): JSX.Element {
  const {
    id,
    value,
    onChange,
    disabled = false,
    autoFocus = false,
    direction = 'column',
    classNames,
    label,
    ...rest
  } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const input = inputRef.current
    // If the text field is not focused sync its value to the external store
    if (input != null && !isFocused) {
      input.value = value
    }
  }, [value, isFocused])

  return (
    <Group
      as="div"
      options={{
        direction: direction,
        alignItems: 'flex-start',
      }}
      className={classes(styles.group, classNames?.group)}
    >
      <label htmlFor={id}>{label}</label>
      <FocusRing
        autoFocus={autoFocus}
        {...(!disabled && { focusClass: 'ring' })}
        {...(!disabled && { focusRingClass: 'ring' })}
        isTextInput
      >
        <input
          {...rest}
          type="text"
          className={classes(styles.input, classNames?.input)}
          ref={inputRef}
          defaultValue={value}
          onChange={event => {
            onChange(event.target.value)
          }}
          onFocus={() => {
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
        />
      </FocusRing>
    </Group>
  )
}

export default Tokenized
