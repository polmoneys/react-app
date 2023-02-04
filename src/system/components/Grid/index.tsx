import { ElementType, ReactNode } from "react";
import styles from "./index.module.css";

const HTMLGridTags = ["section", "article", "li", "div", "form"] as const;
type GridTags = typeof HTMLGridTags[number];

const sizeUnits = ["xs", "sm", "md", "lg", "xl"] as const;
type GridSize = typeof sizeUnits[number];

export interface CardProps {
  size?: GridSize;
  children: ReactNode;
  className?: string;
  as: GridTags;
}

function Grid(props: CardProps) {
  const { children, as = "div", size = "xs", className } = props;

  const Tag = as || ("div" as ElementType);

  return (
    <Tag
      className={[className, styles.grid].filter(Boolean).join(" ")}
      data-grid={size}
    >
      {children}
    </Tag>
  );
}

export default Grid;
