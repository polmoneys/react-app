import { ComponentProps, ReactNode, useEffect, useMemo } from "react";
import { FocusRing } from "@react-aria/focus";
import { IconCheck, IconCross, IconDash } from "../../Icons";
import Pair from "../../Pair";
import Layers from "../Layers";
import styles from "./checkbox.module.css";

interface CheckboxProps extends ComponentProps<"input"> {
  label: ReactNode;
  id: string;
  name: string;
  value: string;
  isMixed?: boolean;
  checked: boolean;
  classNames?: {
    group?: string;
    checkbox?: {
      checked?: string;
      unchecked?: string;
      mixed?: string;
    };
  };
}

function Checkbox(props: CheckboxProps) {
  const {
    value,
    isMixed,
    onChange,
    classNames,
    label,
    id,
    name,
    checked,
    disabled = false,
    autoFocus = false,
  } = props;

  const groupClassNames = [styles.group, classNames?.group]
    .filter(Boolean)
    .join(" ");

  const checkboxClassNames = useMemo(
    () =>
      [
        styles.checkbox,
        isMixed && classNames?.checkbox?.mixed && classNames?.checkbox?.mixed,
        checked &&
          classNames?.checkbox?.checked &&
          classNames?.checkbox?.checked,
        !checked &&
          classNames?.checkbox?.unchecked &&
          classNames?.checkbox?.unchecked,
      ]
        .filter(Boolean)
        .join(" "),
    [isMixed, checked]
  );

  useEffect(() => {
    const element = document.querySelector(`#${id}`) as HTMLInputElement;
    if (element) {
      element.indeterminate = isMixed ? true : false;
    }
  }, [isMixed]);

  return (
    <Pair as="label" htmlFor={id} className={groupClassNames}>
      <Layers as="div">
        {isMixed && <IconDash label="mixed" size="lg" />}
        {checked && <IconCheck label="checked" size="lg" />}
        {!checked && isMixed === undefined && (
          <IconCross label="not checked" size="lg" />
        )}
        <FocusRing
          autoFocus={autoFocus}
          {...(!disabled && { focusClass: "ring" })}
          {...(!disabled && { focusRingClass: "ring" })}
        >
          <input
            className={checkboxClassNames}
            onChange={onChange}
            type="checkbox"
            name={name}
            id={id}
            {...(!isMixed && {
              value,
            })}
            checked={!isMixed && checked}
          />
        </FocusRing>
      </Layers>
      {label}
    </Pair>
  );
}

export default Checkbox;
