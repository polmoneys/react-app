import {
  useRef,
  useEffect,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  useCallback,
  type ComponentProps,
} from 'react'
import { FocusRing } from '@react-aria/focus'

interface SearchProps extends Omit<ComponentProps<'input'>, 'onChange'> {
  onChangeValue: (value: string | number) => void
  initial?: string | number
}

// TODO: TOKENIZE MULTIPLE QUERIES

const Search = (props: SearchProps): JSX.Element => {
  const { initial, disabled = false, autoFocus = false, ...rest } = props

  const [editingValue, setEditingValue] = useState(initial ?? '')

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEditingValue(event.target.value)
  }

  return (
    <FocusRing
      autoFocus={autoFocus}
      {...(!disabled && { focusClass: 'ring' })}
      {...(!disabled && { focusRingClass: 'ring' })}
      isTextInput
    >
      <input
        type="search"
        defaultValue=""
        placeholder="search"
        onChange={onChange}
        {...rest}
      />
    </FocusRing>
  )
}

export default Search
