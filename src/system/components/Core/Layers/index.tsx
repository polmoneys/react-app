import { ElementType, ReactNode, useMemo } from "react";
import styles from "./Layers.module.css";

const HTMLtag = [
  "section",
  "article",
  "nav",
  "aside",
  "header",
  "footer",
  "ul",
  "li",
  "div",
  "form",
] as const;
type HTMLTags = typeof HTMLtag[number];

interface LayerProps {
  align?: "start" | "end" | "center";
  className?: string;
  children: ReactNode;
  as: HTMLTags;
  stretch?: boolean;
}

function Layers(props: LayerProps) {
  const { align, as, children, className, stretch = false } = props;

  const classNames = useMemo(() => {
    const isNotDefault = align !== "center";
    return [
      className,
      styles.root,
      isNotDefault && styles[`${align}`],
      stretch && styles.stretch,
    ]
      .filter(Boolean)
      .join(" ");
  }, [align]);

  const Tag = as || ("div" as ElementType);

  return <Tag className={classNames}>{children}</Tag>;
}

export default Layers;
