import { type ComponentProps, useEffect, useRef, useState } from 'react'
import { FocusRing } from '@react-aria/focus'
import Couple from '../../Couple'
import { HelveticaNeue } from '../../Typography'

interface Props extends Omit<ComponentProps<'input'>, 'value' | 'onChange'> {
  value: string
  label: string
  onChange: (val: string) => void
  id: string
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
  const { id, value, onChange, disabled = false, label, ...rest } = props
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
    <Couple as="label" htmlFor={id} align="flex-start">
      <HelveticaNeue>{label}</HelveticaNeue>
      <FocusRing
        // autoFocus={autoFocus}
        {...(!disabled && { focusClass: 'ring' })}
        {...(!disabled && { focusRingClass: 'ring' })}
        isTextInput
      >
        <input
          {...rest}
          type="text"
          ref={inputRef}
          defaultValue={value}
          onChange={e => {
            onChange(e.target.value)
          }}
          onFocus={() => {
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
        />
      </FocusRing>
    </Couple>
  )
}
export default Field
