import { useState, Fragment, ReactNode } from "react";
import { Dictionary } from "@/system/interfaces";
import "./index.css";

interface MediaProps {
  alt: string;
  src: string;
  height?: string;
  sources?: Dictionary;
  eager?: boolean;
  DONOTUse?: {
    DONOTStyle: Dictionary;
  };
  priority?: "low" | "hight";
}

function Media(props: MediaProps) {
  const {
    height,
    sources,
    src,
    alt = "",
    eager = false,
    priority = "low",
  } = props;

  const [hasError, setError] = useState(false);
  const onErrorImage = () => {
    setError(true);
  };

  let sourcesTags: ReactNode = <Fragment />;

  if (sources !== undefined) {
    sourcesTags = Object.keys(sources).map(key => {
      const hasSource = sources?.[key] !== undefined;
      const type = `image/${key}`;
      const srcSet = sources[key].toString();
      return hasSource ? (
        <source key={key} type={type} srcSet={srcSet} />
      ) : (
        <Fragment />
      );
    });
  }

  return (
    <picture
      data-media=""
      {...(height && { style: { height: height } })}
      onError={onErrorImage}
    >
      {hasError && (
        <img
          src={fallback("600px", height ?? "200px", "currentColor")}
          alt="Loading error"
        />
      )}

      {!hasError && (
        <Fragment>
          {sourcesTags}
          <img
            src={src}
            alt={alt}
            loading={eager ? "eager" : "lazy"}
            height={height}
            // fetchpriority={priority}
          />
        </Fragment>
      )}
    </picture>
  );
}

export default Media;

const fallback = (
  width: number | string,
  height: number | string,
  fill: string
) =>
  `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><rect  fill='%23${fill}' width="${width}" height="${height}"/></svg>`;
