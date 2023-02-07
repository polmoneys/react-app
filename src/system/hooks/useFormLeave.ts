import { useEffect } from "react";

/*
  Tell user a form has been 'abandoned'
 */

function useFormLeave(id: string, onOut: () => void) {
  useEffect(() => {
    const formElement = document.querySelector(`#${id}`);

    const onFocusOut = (event: any) => {
      if (formElement) {
        if (!formElement.contains(event.relatedTarget as Node)) {
          onOut();
        }
      }
    };
    if (formElement) {
      formElement.addEventListener("focusout", onFocusOut);
    }
    return () => {
      if (formElement) {
        formElement.removeEventListener("focusout", onFocusOut);
      }
    };
  }, [id]);
}

export default useFormLeave;
