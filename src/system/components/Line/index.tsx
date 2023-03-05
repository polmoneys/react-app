import { type MutableRefObject, useCallback, useState, useEffect } from 'react'
import { line, curveCardinal } from 'd3-shape'
import { matchRefsToPoints } from './utils'
import styles from './index.module.css'

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
        const pathFunction =
          variant === 'line' ? line() : line().curve(curveCardinal)
        const p = pathFunction(points) as string
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
