import { type ComponentProps, useEffect, useRef, useState } from 'react'
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
  errorElementId: string
  onChange: (val: string) => void
  id: string
  direction?: 'row' | 'column'
  classNames?: {
    group?: string
    input?: string
  }
  isSearch?: boolean
}

/* 

function useAsyncStore() {
  const [state, setState] = useState("initial value");

  return [
    state,
    (value: string) =>
      setTimeout(() => {
        setState(value);
      }, 100)
  ] as const;
}

  const [val, setVal] = useAsyncStore();


*/
function Field(props: Props): JSX.Element {
  const {
    id,
    value,
    onChange,
    disabled = false,
    autoFocus = false,
    direction = 'column',
    classNames,
    label,
    isSearch = false,
    errorElementId,
    ...rest
  } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  const onClear = (): void => {
    onChange('')
  }

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
        direction: isSearch ? 'row' : direction,
        alignItems: 'flex-start',
      }}
      className={classes(styles.group, classNames?.group)}
      {...(isSearch && { gap: '0' })}
    >
      <label htmlFor={id} {...(isSearch && { className: 'visually-hidden' })}>
        {label}
      </label>
      <FocusRing
        autoFocus={autoFocus}
        {...(!disabled && { focusClass: 'ring' })}
        {...(!disabled && { focusRingClass: 'ring' })}
        isTextInput
      >
        <input
          {...rest}
          {...(errorElementId !== undefined && {
            'aria-describedby': errorElementId,
          })}
          type={isSearch ? 'search' : 'text'}
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
      {isSearch && (
        <ButtonIcon onClick={onClear} className={styles.clear}>
          <IconCross label="Clear input" />
        </ButtonIcon>
      )}
    </Group>
  )
}

export const Searchbar = (props: Props): JSX.Element => (
  <Field {...props} isSearch />
)

export default Field
