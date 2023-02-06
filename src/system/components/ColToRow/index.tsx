import { classes } from "@/system/utils/theme";
import Group, { GroupProps } from "../Core/Group";

const ColToRow = (props: GroupProps) => {
  const { className, ...rest } = props;
  return <Group {...rest} className={classes("col:row", className)} />;
};

export default ColToRow;
