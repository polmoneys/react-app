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

/* 
  TODO: TOKENIZE 
    const [text, setText] = useState("");
    const [words, setWords] = useState([]);

    const handleTextChange = (event) => {
      const text = event.target.value;
      setText(text);
      setWords(text.split(" "));
    };

    <input type="text" value={text} onChange={handleTextChange} />
    <p>Words detected: {words.join(", ")}</p>
}
*/
const Search = (props: SearchProps): JSX.Element => {
  const {
    initial,
    disabled = false,
    autoFocus = false,
    onChangeValue,
    ...rest
  } = props

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChangeValue(event.target.value)
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
        defaultValue={initial}
        placeholder="search"
        onChange={onChange}
        {...rest}
      />
    </FocusRing>
  )
}

export default Search
