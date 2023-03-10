import {
  useRef,
  useEffect,
  useState,
  type ChangeEvent,
  // type KeyboardEvent,
  useCallback,
  type ComponentProps,
} from 'react'
import { FocusRing } from '@react-aria/focus'
import styles from './field.module.css'
import { useKeyboard } from 'react-aria'

interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'onChange'> {
  onChangeValue: (value: string | number) => void
  initial?: string | number
}

/* 
    <label htmlFor="textarea-test">Free your words</label>
    <Textarea
      id="textarea-test"
      onChangeValue={newContent => {
        console.log(newContent)
      }}
    />
*/

const Textarea = (props: TextareaProps): JSX.Element => {
  const {
    initial,
    placeholder = 'Type ',
    onChangeValue,
    id,
    disabled = false,
    autoFocus = false,
  } = props

  const [editingValue, setEditingValue] = useState(initial ?? '')

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setEditingValue(event.target.value)
  }

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const onInput = useCallback((target: HTMLTextAreaElement) => {
    if (target.scrollHeight > 40) {
      target.style.height = `${target.scrollHeight} px`
    }
  }, [])

  useEffect(() => {
    if (textareaRef?.current != null) {
      onInput(textareaRef.current)
    }
  }, [onInput])

  useEffect(() => {
    if (editingValue.toString().trim() === '') return
    onChangeValue(editingValue)
  }, [editingValue])

  const { keyboardProps } = useKeyboard({
    onKeyUp: event => {
      if (event.key === 'Enter' || event.key === 'Escape') {
        event.preventDefault()
        ;(event.target as HTMLTextAreaElement).blur()
      }
    },
  })

  const onBlur = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    if (event.target.value.trim() === '') {
      onChangeValue(initial ?? '')
    } else {
      onChangeValue(event.target.value)
    }
  }

  // const onPressStart = () => {
  //   const element = document.querySelector(`#${id}`) as HTMLTextAreaElement;
  //   if (element) {
  //     element.focus();
  //   }
  // };

  return (
    <FocusRing
      autoFocus={autoFocus}
      {...(!disabled && { focusClass: 'ring' })}
      {...(!disabled && { focusRingClass: 'ring' })}
      isTextInput
    >
      <textarea
        id={id}
        autoFocus
        placeholder={placeholder}
        rows={1}
        aria-label="Field name"
        value={editingValue}
        onBlur={onBlur}
        onChange={onChange}
        {...keyboardProps}
        onInput={event => {
          onInput(event.target as HTMLTextAreaElement)
        }}
        ref={textareaRef}
        className={styles.textarea}
      />
    </FocusRing>
  )
}

export default Textarea
