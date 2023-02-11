import { type ReactNode, type CSSProperties } from 'react'

export const Svg = ({
  children,
  height = '100%',
  style,
}: {
  children: ReactNode
  height?: string
  style?: CSSProperties
}): JSX.Element => (
  <svg width="100%" height={height} {...(style !== undefined && { style })}>
    {children}
  </svg>
)

export const Group = ({
  translate,
  children,
}: {
  children: ReactNode
  translate?: string
}): JSX.Element => <g style={{ transform: translate }}>{children}</g>

export const Rectangle = ({
  x = '0%',
  y = '0%',
  fill = 'currentColor',
  width = '10%',
  height = '10%',
}: {
  x: string
  y: string
  fill: string
  width: string
  height: string
}): JSX.Element => (
  <rect x={x} y={y} width={width} height={height} fill={fill} />
)
