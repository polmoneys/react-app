import { Svg, Group, Rectangle } from "../Svg";

type DomElementSize = `${string}px` | `${string}%` | `calc(${string})`;

interface Props {
  colors?: {
    start: string;
    end: string;
  };
  size: `${string}%`;
  width?: DomElementSize;
  height?: DomElementSize;
  marker?: {
    width: DomElementSize;
    height: DomElementSize;
    color: string;
    position: `${string}%`;
  };
  className?: string;
}

/*
    <Gradient
        size="25%"
        height="90px"
        colors={{ start: "var(--accent)", end: "transparent" }}
    />
    <Gradient
        size="1%"
        height="20px"
        colors={{
        start: "var(--accent)",
        end: "var(--transparent)",
        }}
        marker={{
        width: "1%",
        color: "var(--accent-error)",
        position: "98%",
        height: "20px",
        }}
    />
*/
function Gradient(props: Props) {
  const {
    colors,
    size,
    width = "100%",
    height = "100%",
    marker,
    className,
  } = props;

  const pattern = `
      ${colors?.start ?? "currentColor"}, 
      ${colors?.start ?? "currentColor"} ${size},
       ${colors?.end ?? "transparent"} ${size},
       ${colors?.end ?? "transparent"} ${Number(size.replace("%", "")) * 2}%`;

  return (
    <Svg
      height={height}
      style={{
        width,
        backgroundImage: `repeating-linear-gradient(
            90deg,${pattern})`,
      }}
      {...(className !== undefined && { className })}
    >
      {marker !== undefined && (
        <Group>
          <Rectangle
            x={marker?.position}
            y="0"
            width={marker?.width}
            height={marker?.height}
            fill={marker?.color}
          />
        </Group>
      )}
    </Svg>
  );
}

export default Gradient;
