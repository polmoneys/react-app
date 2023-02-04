import { ElementType, ReactNode } from "react";
import { Dictionary } from "@/system/interfaces";
import Media from "../Media";
import Row from "../Row";
import styles from "./index.module.css";

const HTMLCardTags = ["section", "article", "li", "div", "form"] as const;
type HTMLCardTagsType = typeof HTMLCardTags[number];

const CardRatio = ["auto", "square", "portrait", "landscape"] as const;
type CardRatios = typeof CardRatio[number];

export interface CardProps {
  ratio?: CardRatios;
  children: ReactNode;
  DONOTUse?: {
    DONOTStyle: Dictionary;
  };
  className?: string;
  as: HTMLCardTagsType;
}

function Card(props: CardProps) {
  const { children, as = "div", ratio = "square", className, DONOTUse } = props;

  const Tag = as || ("div" as ElementType);

  return (
    <Tag
      className={[className, styles.card].filter(Boolean).join(" ")}
      style={{
        ...(DONOTUse?.DONOTStyle !== undefined && DONOTUse?.DONOTStyle),
      }}
      data-ratio={ratio}
    >
      {children}
    </Tag>
  );
}

Card.Title = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <Row as="header" {...(className !== undefined && { className })}>
    {children}
  </Row>
);

Card.Actions = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <Row
    as="footer"
    className={["align-items-center:landscape", className]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
  </Row>
);

Card.Media = Media;

export default Card;
