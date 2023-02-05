import {
  useRef,
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  ComponentProps,
} from "react";
import { FocusRing } from "@react-aria/focus";

interface TextareaProps extends Omit<ComponentProps<"textarea">, "onChange"> {
  onChangeValue: (value: string | number) => void;
  initial?: string | number;
}

const Textarea = (props: TextareaProps) => {
  const {
    initial,
    placeholder = "Type ",
    onChangeValue,
    id,
    disabled = false,
    autoFocus = false,
  } = props;

  const [editingValue, setEditingValue] = useState(initial ?? "");

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setEditingValue(event.target.value);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const onInput = useCallback((target: HTMLTextAreaElement) => {
    if (target.scrollHeight > 40) {
      target.style.height = target.scrollHeight + "px";
    }
  }, []);

  useEffect(() => {
    if (textareaRef && textareaRef.current !== null) {
      onInput(textareaRef.current);
    }
  }, [onInput, textareaRef]);

  useEffect(() => {
    onChangeValue(editingValue);
  }, [editingValue]);

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.preventDefault();
      (event.target as HTMLTextAreaElement).blur();
    }
  };

  const onBlur = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.trim() === "") {
      onChangeValue(initial ?? "");
    } else {
      onChangeValue(event.target.value);
    }
  };

  // const onPressStart = () => {
  //   const element = document.querySelector(`#${id}`) as HTMLTextAreaElement;
  //   if (element) {
  //     element.focus();
  //   }
  // };

  return (
    <FocusRing
      autoFocus={autoFocus}
      {...(!disabled && { focusClass: "ring" })}
      {...(!disabled && { focusRingClass: "ring" })}
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
        onKeyDown={onKeyDown}
        onInput={event => onInput(event.target as HTMLTextAreaElement)}
        ref={textareaRef}
      />
    </FocusRing>
  );
};

export default Textarea;
