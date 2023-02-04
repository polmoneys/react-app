import Group, { GroupProps } from "../Core/Group";

const ColToRow = (props: GroupProps) => {
  const { className, ...rest } = props;
  return (
    <Group
      {...rest}
      className={["col:row", className].filter(Boolean).join(" ")}
    />
  );
};

export default ColToRow;
