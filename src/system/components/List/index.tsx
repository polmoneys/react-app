import { ComponentProps, ReactNode } from "react";
import { classes } from "@/system/utils/theme";
import "./index.css";

interface ListProps extends ComponentProps<"ul"> {
  children: string | ReactNode;
  label: string;
  zebra?: boolean;
}

interface ListItemProps extends ComponentProps<"li"> {
  children: string | ReactNode;
  description?: string;
  start?: ReactNode;
  end?: ReactNode;
}

function List(props: ListProps) {
  const { children, className, label, zebra = true, ...rest } = props;

  const classNames = classes(className, "group", "list", zebra && "zebra");
  return (
    <ul role="list" className={classNames} aria-label={label} {...rest}>
      {children}
    </ul>
  );
}

List.Item = (props: ListItemProps) => {
  const { className, children, description, start, end } = props;
  const slots = `${start ? ":start" : ""}${end ? ":end" : ""}`;

  const classNamesGroup = classes(
    className,
    "item",
    `list:item${start || end ? slots : ""}`
  );
  return (
    <li className={classNamesGroup}>
      {start && <div className="start">{start}</div>}
      <div>
        {children}
        {description && <div>{description}</div>}
      </div>
      {end && <div className="end">{end}</div>}
    </li>
  );
};

List.Divider = (props: Pick<ListItemProps, "children">) => {
  return (
    <li className="item">
      <div className="list:divider">
        {props.children !== undefined && props.children}
      </div>
    </li>
  );
};

export default List;
