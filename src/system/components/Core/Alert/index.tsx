import { AriaAttributes, ReactNode } from "react";
import Group, { GroupProps } from "../Group";

export interface AlertProps extends GroupProps {
  role?: "alert" | "status" | "none";
  live?: "polite" | "off" | "assertive";
  relevant?: AriaAttributes["aria-relevant"];
  children: ReactNode;
}

function Alert(props: AlertProps) {
  const {
    role = "status",
    live = "polite",
    children,
    relevant = "additions text",
    ...groupProps
  } = props;

  return (
    <Group
      {...groupProps}
      role={role}
      aria-live={live}
      aria-relevant={relevant}
    >
      {children}
    </Group>
  );
}
export default Alert;
