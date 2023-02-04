import { ReactNode } from "react";

const HTMLtag = [
  "section",
  "article",
  "nav",
  "aside",
  "header",
  "footer",
  "label",
  "p",
  "h1",
  "h2",
  "h3",
  "ul",
  "li",
  "div",
] as const;
type HTMLTags = typeof HTMLtag[number];

interface Props {
  as?: HTMLTags;
  children: string | ReactNode;
  options?: {
    top: string | number;
    left: string | number;
  };
  className?: string;
}

function Sticky(props: Props) {
  const { as = "div", children, options, className } = props;

  const Tag = as;

  return (
    <Tag
      style={{
        width: "100%",
        position: "sticky",
        top: options?.top ?? 0,
        left: options?.left ?? 0,
      }}
      {...(className !== undefined && { className })}
    >
      {children}
    </Tag>
  );
}

export default Sticky;
