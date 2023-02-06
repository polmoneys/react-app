import { ComponentProps, Fragment } from "react";
import { FocusRing } from "@react-aria/focus";
import { classes } from "@/system/utils/theme";
import Pair from "../../Pair";
import { HelveticaNeue } from "../../Typography";
import styles from "./radio.module.css";

export interface RadioProps extends Omit<ComponentProps<"input">, "checked"> {
  id: string;
  label: string;
  classNames?: {
    group?: string;
    label?: string;
    input?: string;
    checked?: string;
  };
}

function RadioFieldset(props?: RadioProps) {
  if (props === undefined) return <Fragment />;
  const {
    value,
    id,
    label,
    name,
    disabled = false,
    autoFocus = false,
    classNames,
    ...rest
  } = props;

  const groupClassnames = classes(styles.control, classNames?.group);

  return (
    <Pair as="label" htmlFor={id} className={groupClassnames}>
      <FocusRing
        autoFocus={autoFocus}
        {...(!disabled && { focusClass: "ring" })}
        {...(!disabled && { focusRingClass: "ring" })}
      >
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          {...(classNames?.input !== undefined && {
            className: classNames.input,
          })}
          {...rest}
        />
      </FocusRing>
      <HelveticaNeue>{label}</HelveticaNeue>
    </Pair>
  );
}

export default RadioFieldset;
