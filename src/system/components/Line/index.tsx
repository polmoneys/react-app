import { type MutableRefObject, useCallback, useState, useEffect } from 'react'
import { line, curveCardinal } from 'd3-shape'
import { matchRefsToPoints } from './utils'
import styles from './index.module.css'

/*

  Usage:

  interface Props {
    variant: "line" | "curve";
  }
  function Paint(props: Props) {
    const { variant } = props;
    const refA = useRef<HTMLDivElement | null>(null); // Point A
    const refB = useRef<HTMLDivElement | null>(null); // Point B
    const refC = useRef<HTMLDivElement | null>(null); // Point C

    const maskRef = useRef<HTMLDivElement | null>(null);

    const rect = useRect(maskRef, { observe: true });

    return (
      <div ref={maskRef} className="demo-party">
        <div className="ref-1" ref={refA}>
          <Shape.Square fill="var(--accent-error)" size={100} />
        </div>
        <div className="ref-2" ref={refB}>
          <Shape.Square fill="var(--accent-error)" size={100} />
        </div>
        <div className="ref-3" ref={refC}>
          <Shape.Square fill="var(--accent-error)" size={100} />
        </div>
        <Stat.Draw
          boundary={rect}
          variant={variant}
          round
          refs={[refA, refB, refC]}
          weigth={10}
          fill={"yellow"}
        />
      </div>
    );
  }

*/
export interface Props {
  boundary: {
    readonly bottom: number
    readonly height: number
    readonly left: number
    readonly right: number
    readonly top: number
    readonly width: number
  } | null
  /** Line width */
  weigth?: number
  fill?: string
  transforms?: string
  x?: number
  y?: number
  /** strokeLinecap, strokeLineJoin */
  round?: boolean
  refs: Array<MutableRefObject<HTMLDivElement | null>>
  variant?: 'line' | 'curve'
}

const Line = (props: Props): JSX.Element => {
  const {
    boundary,
    refs,
    fill = 'yellow',
    weigth = 10,
    round = true,
    x = 0,
    y = 0,
    variant = 'line',
    transforms,
  } = props

  const [path, setPath] = useState<string | null>(null)

  const drawSvg = useCallback(() => {
    if (boundary === null) return
    matchRefsToPoints(refs, boundary, x, y)
      .then((points: Array<[number, number]>) => {
        if (variant === 'line') {
          return line()([...points])
        } else {
          return line().curve(curveCardinal)([...points])
        }
      })
      .then((path: unknown) => {
        const p = path as string
        setPath(p)
      })
      .catch(() => {
        setPath(null)
      })
  }, [boundary, refs, x, y, variant])

  useEffect(() => {
    drawSvg()
  }, [boundary, drawSvg, variant])

  return (
    <svg
      className={styles.svg}
      {...(transforms !== undefined && {
        style: {
          transform: transforms,
        },
      })}
    >
      {path != null && (
        <path
          fill="none"
          stroke={fill}
          strokeWidth={weigth}
          strokeLinecap={round ? 'round' : 'square'}
          strokeLinejoin={round ? 'round' : 'miter'}
          d={path}
        />
      )}
    </svg>
  )
}

export default Line
