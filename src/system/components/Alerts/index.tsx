import Alert, { AlertProps } from "../Core/Alert";

export const AlertAccent = (props: AlertProps) => (
  <Alert {...props} className="accent" />
);

export default Alert;
