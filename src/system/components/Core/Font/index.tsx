import { AriaAttributes, ElementType, ReactNode, useMemo } from "react";
import styles from "./index.module.css";

const HTMLHnTag = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
const HTMLtag = ["label", "span", "p", "b", "em", "strong", "time"] as const;
type HTMLTags = typeof HTMLtag[number] | typeof HTMLHnTag[number];
type TextTransform = "aa" | "Aa" | "AA";

export const SIZES = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
} as Record<string, FontSize>;

const sizeUnits = ["xs", "sm", "md", "lg", "xl"] as const;
export type FontSize = typeof sizeUnits[number];

export interface FontProps extends AriaAttributes {
  as?: HTMLTags;
  size?: FontSize;
  children: ReactNode;
  className?: string;
  date?: Date;
  format?: TextTransform;
  ratio?: number;
  numeric?: boolean;
  hyphenate?: boolean;
  breakWord?: boolean;
  dangerousColor?: string;
  dangerousTransform?: string;
}

function Font(props: FontProps) {
  const {
    as,
    dangerousColor,
    dangerousTransform,
    children,
    breakWord = false,
    hyphenate = false,
    numeric = false,
    className,
    size = "r",
    format = "aa",
    ...rest
  } = props;

  const Tag = as || ("p" as ElementType);

  const css = useMemo(
    () =>
      [
        className,
        styles[size],
        breakWord && styles.break,
        hyphenate && styles.hyphenate,
        numeric && styles.numeric,
        format === "AA" && styles.uppercase,
        format === "Aa" && styles.capitalize,
      ]
        .filter(Boolean)
        .join(" "),
    [className, size, breakWord, hyphenate, numeric, format]
  );

  return (
    <Tag
      {...rest}
      style={{
        ...(dangerousColor && { color: dangerousColor }),
        ...(dangerousTransform && { transform: dangerousTransform }),
      }}
      className={css}
    >
      {children}
    </Tag>
  );
}

export default Font;
