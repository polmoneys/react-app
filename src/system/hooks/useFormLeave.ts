import { type SyntheticEvent, useEffect } from 'react'

interface FocusEvent<T = Element> extends SyntheticEvent<T> {
  relatedTarget: EventTarget | null
  target: EventTarget & T
}
/*
  Tell user a form has been 'abandoned'
 */

function useFormLeave(id: string, onOut: () => void): void {
  useEffect(() => {
    const formElement = document.querySelector(`#${id}`)

    const onFocusOut = (event: any): void => {
      if (formElement != null) {
        if (!formElement.contains(event.relatedTarget as Node)) {
          onOut()
        }
      }
    }
    if (formElement != null) {
      formElement.addEventListener('focusout', onFocusOut)
    }
    return () => {
      if (formElement != null) {
        formElement.removeEventListener('focusout', onFocusOut)
      }
    }
  }, [id])
}

export default useFormLeave
