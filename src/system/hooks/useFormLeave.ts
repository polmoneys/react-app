import { useEffect } from "react";

/*
  Enrich user feedback of critical forms
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
