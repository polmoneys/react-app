import { classes } from "@/system/utils/theme";
import Card, { CardProps } from "../Core/Card";
export { default as Card } from "../Core/Card";

export const CardPortraitSuccess = (props: CardProps) => {
  const { ratio, className, ...rest } = props;
  return (
    <Card {...rest} ratio="portrait" className={classes("accent", className)} />
  );
};

export const CardPortraitError = (props: CardProps) => {
  const { ratio, className, ...rest } = props;
  return (
    <Card
      {...rest}
      ratio="portrait"
      className={classes("invalid", className)}
    />
  );
};
