import { useEffect } from 'react'

/*
  Focus input onStartTyping
  credits https://github.com/streamich/react-use/blob/master/src/useFormEnter.ts
 */

const useFormEnter = (onStartTyping: (event: KeyboardEvent) => void): void => {
  useEffect(() => {
    const keydown = (event: KeyboardEvent): void => {
      !isFocusedElementEditable() &&
        isTypedCharGood(event) &&
        onStartTyping(event)
    }

    document.addEventListener('keydown', keydown)

    return () => {
      document.removeEventListener('keydown', keydown)
    }
  }, [])
}

const isFocusedElementEditable = (): boolean => {
  const { activeElement, body } = document

  if (activeElement == null) {
    return false
  }

  // If not element has focus, we assume it is not editable, too.
  if (activeElement === body) {
    return false
  }

  // Assume <input> and <textarea> elements are editable.
  switch (activeElement.tagName) {
    case 'INPUT':
    case 'TEXTAREA':
      return true
  }

  // Check if any other focused element id editable.
  return activeElement.hasAttribute('contenteditable')
}

const isTypedCharGood = ({
  keyCode,
  metaKey,
  ctrlKey,
  altKey,
}: KeyboardEvent): boolean => {
  if (metaKey || ctrlKey || altKey) {
    return false
  }
  // 0...9
  if (keyCode >= 48 && keyCode <= 57) {
    return true
  }
  // a...z
  if (keyCode >= 65 && keyCode <= 90) {
    return true
  }
  // All other keys.
  return false
}

export default useFormEnter
