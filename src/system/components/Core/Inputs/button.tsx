import { ComponentProps, ReactNode } from "react";
import { FocusRing } from "@react-aria/focus";

export interface ButtonProps extends ComponentProps<"button"> {
  children: string | ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    disabled = false,
    autoFocus = false,
    ...rest
  } = props;
  const classNames = [className].filter(Boolean).join(" ");
  return (
    <FocusRing
      autoFocus={autoFocus}
      {...(!disabled && { focusClass: "ring" })}
      {...(!disabled && { focusRingClass: "ring" })}
    >
      <button {...rest} className={classNames}>
        {children}
      </button>
    </FocusRing>
  );
};

export default Button;
