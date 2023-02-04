import { useEffect } from "react";

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
      //@ts-ignore
      formElement.addEventListener("focusout", onFocusOut);
    }
    return () => {
      if (formElement) {
        //@ts-ignore
        formElement.removeEventListener("focusout", onFocusOut);
      }
    };
  }, [id]);
}

export default useFormLeave;
