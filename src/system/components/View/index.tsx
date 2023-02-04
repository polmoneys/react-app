import { ReactNode } from "react";
import "./index.css";

const View = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section data-view="root" {...(className !== undefined && { className })}>
    {children}
  </section>
);

View.Full = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div data-view="full" {...(className !== undefined && { className })}>
    {children}
  </div>
);

View.Feature = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div data-view="feature" {...(className !== undefined && { className })}>
    {children}
  </div>
);

View.Popout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div data-view="popout" {...(className !== undefined && { className })}>
    {children}
  </div>
);

export default View;
