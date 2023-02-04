import Group, { GroupProps } from "../Core/Group";

const Pair = (props: GroupProps) => {
  const { gap = "var(--gap-2)", ...rest } = props;
  return (
    <Group
      {...rest}
      gap={gap}
      options={{ wrap: "wrap", alignItems: "center", justifyContent: "center" }}
    />
  );
};

export default Pair;
