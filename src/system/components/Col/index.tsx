import Group, { GroupProps } from "../Core/Group";

const Col = (props: GroupProps) => {
  const { options, ...rest } = props;
  return (
    <Group
      options={{ direction: "column", ...(options !== undefined && options) }}
      {...rest}
    />
  );
};

export default Col;
