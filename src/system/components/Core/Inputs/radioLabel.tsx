import { ChangeEvent, ComponentProps, Fragment } from "react";
import { FocusRing } from "@react-aria/focus";
import { RenderProp } from "@/system/interfaces";
import { classes } from "@/system/utils/theme";
import { HelveticaNeue } from "../../Typography";
import Group from "../Group";
import Layers from "../Layers";
import styles from "./Radio.module.css";

export interface RadioProps extends ComponentProps<"input"> {
  id: string;
  label?: string;
  renderLabel?: RenderProp<
    { checked: boolean; radioLabel: string },
    HTMLElement
  >;
  width?: string;
  classNames?: {
    group?: string;
    label?: string;
    input?: string;
    checked?: string;
  };
}

function RadioLabel(props?: RadioProps) {
  if (props === undefined) return <Fragment />;
  const {
    onChange,
    id,
    renderLabel,
    label,
    name,
    width,
    classNames,
    checked = false,
    disabled = false,
    autoFocus = false,
  } = props;

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange?.(event);

  const inputLabel =
    renderLabel === undefined ? (
      <HelveticaNeue>{label}</HelveticaNeue>
    ) : (
      renderLabel?.({
        checked: props?.checked ?? false,
        radioLabel: props.label ?? "",
      })
    );

  const groupClassnames = classes(
    styles.radio,
    classNames?.group,
    checked && styles.checked,
    checked && classNames?.checked
  );
  const labelClassNames = [classNames?.label].filter(Boolean).join(" ");
  const inputClassNames = [classNames?.input].filter(Boolean).join(" ");
  return (
    <Group as="div" className={groupClassnames} size={width}>
      <label htmlFor={id}>
        <Layers stretch as="div">
          <div className={labelClassNames}>{inputLabel}</div>
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
              className={inputClassNames}
              onChange={onRadioChange}
            />
          </FocusRing>
        </Layers>
      </label>
    </Group>
  );
}

export default RadioLabel;
