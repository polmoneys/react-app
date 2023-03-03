import { type SyntheticEvent, useEffect } from 'react'

interface FocusEvent<T = Element> extends SyntheticEvent<T> {
  relatedTarget: EventTarget | null
  target: EventTarget & T
}
/*
  Tell user a form has been 'abandoned'

import { SyntheticEvent, useEffect } from 'react'

interface FocusEvent<T = Element> extends SyntheticEvent<T> {
  relatedTarget: EventTarget | null
  target: EventTarget & T
}

function useFormLeave(id: string, onOut: () => void): void {
  useEffect(() => {
    const formElement = document.querySelector(`#${id}`) as HTMLElement | null;

    const onFocusOut = (event: FocusEvent): void => {
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
  }, [id, onOut])
}

export default useFormLeave

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
