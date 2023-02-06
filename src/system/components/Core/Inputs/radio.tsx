import { ChangeEvent, ComponentProps, Fragment } from "react";
import { FocusRing } from "@react-aria/focus";
import { RenderProp } from "@/system/interfaces";
import { classes } from "@/system/utils/theme";
import Pair from "../../Pair";
import RadioGroup from "./radioGroup";
import RadioLabel from "./radioLabel";
import { HelveticaNeue } from "../../Typography";
import GroupFieldset from "./radioGroupFieldset";
import RadioFieldset from "./radioFieldset";
import styles from "./radio.module.css";

export interface RadioProps extends ComponentProps<"input"> {
  id: string;
  label?: string;
  renderLabel?: RenderProp<
    { checked: boolean; checkboxLabel: string },
    HTMLElement
  >;
  classNames?: {
    group?: string;
    label?: string;
    input?: string;
    checked?: string;
  };
}

function Radio(props?: RadioProps) {
  if (props === undefined) return <Fragment />;
  const {
    onChange,
    id,
    renderLabel,
    label,
    name,
    checked = false,
    disabled = false,
    autoFocus = false,
    classNames,
  } = props;

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange?.(event);

  const inputLabel =
    renderLabel === undefined ? (
      <HelveticaNeue>{label}</HelveticaNeue>
    ) : (
      renderLabel?.({
        checked: props?.checked ?? false,
        checkboxLabel: props.label ?? "",
      })
    );

  const groupClassnames = classes(
    styles.control,
    checked && styles.checked,
    checked && classNames?.checked,
    classNames?.group
  );

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
          value={name}
          checked={checked}
          {...(classNames?.input !== undefined && {
            className: classNames.input,
          })}
          onChange={onRadioChange}
        />
      </FocusRing>
      {inputLabel}
    </Pair>
  );
}

Radio.Group = RadioGroup;
Radio.Fieldset = RadioFieldset;
Radio.GroupFieldset = GroupFieldset;

Radio.Label = RadioLabel;

export default Radio;
