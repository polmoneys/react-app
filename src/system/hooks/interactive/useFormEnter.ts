import { useEffect } from 'react'

/*
  Focus input onStartTyping
  credits https://github.com/streamich/react-use/blob/master/src/useFormEnter.ts
 */

const useFormEnter = (onStartTyping: (event: KeyboardEvent) => void): void => {
  useEffect(() => {
    const keydown = (event: KeyboardEvent): void => {
      if (
        event.target instanceof Element &&
        !isEditableElement(event.target) &&
        isTypedCharGood(event)
      ) {
        onStartTyping(event)
      }
    }

    document.addEventListener('keydown', keydown)

    return () => {
      document.removeEventListener('keydown', keydown)
    }
  }, [])
}

const isEditableElement = (element: Element): boolean => {
  if (element.hasAttribute('contenteditable')) {
    return true
  }

  if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
    return true
  }

  return false
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

  if (keyCode >= 48 && keyCode <= 57) {
    return true
  }

  if (keyCode >= 65 && keyCode <= 90) {
    return true
  }

  return false
}

export default useFormEnter
