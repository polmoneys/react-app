import { useEffect } from 'react'

/*
  Tell user a form has been 'abandoned'
 */

function useFormLeave(id: string, onOut: () => void) {
  useEffect(() => {
    const formElement = document.querySelector(`#${id}`)

    const onFocusOut = (event: any) => {
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
