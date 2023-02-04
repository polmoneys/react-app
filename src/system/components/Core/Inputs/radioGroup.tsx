import { cloneElement, ChangeEvent, Children, ReactElement } from "react";
import { RenderProp } from "@/system/interfaces";
import Group from "../Group";
const { map } = Children;

interface RadioGroupProps {
  children: Array<ReactElement>;
  initial: string | Array<string>;
  className?: string;
  gap?: string;
  renderLabel?: RenderProp<
    { checked: boolean; radioLabel: string },
    HTMLElement
  >;
  onChange: (selection: string) => void;
  direction?: "row" | "column";
}

function RadioGroup(props: RadioGroupProps) {
  const {
    children,
    initial = "",
    gap = "0",
    renderLabel,
    direction = "row",
    className,
    onChange,
  } = props;
  const onChangeRadio = (event: ChangeEvent<HTMLInputElement>) =>
    onChange?.(event.target.name);

  return (
    <Group
      as="div"
      gap={gap}
      options={{ wrap: "wrap", direction }}
      {...(className !== undefined && { className })}
    >
      {map(children, (radio: ReactElement) => {
        const { name } = radio.props;
        const checked = initial === name;

        return cloneElement(radio, {
          name,
          checked,
          onChange: onChangeRadio,
          ...(renderLabel !== undefined && { renderLabel }),
          label: name,
        });
      })}
    </Group>
  );
}

export default RadioGroup;
