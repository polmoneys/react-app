import { useMemo } from 'react'

interface Props {
  isIndeterminate: boolean
  value: number
  minValue: number
  maxValue: number
  size?: number
  strokeWidth?: number
  backgroundColor?: string
  progressColor?: string
  ariaLabel?: string
  id: string
}

/*
      <ProgressBar
        id="ddd"
        size={200}
        isIndeterminate={false}
        value={20}
        minValue={1}
        maxValue={100}
        strokeWidth={8}
      />


*/
function ProgressBar({
  isIndeterminate,
  value,
  minValue = 0,
  maxValue = 100,
  size = 32,
  strokeWidth = 14,
  backgroundColor = '#ddd',
  progressColor = 'red',
  ariaLabel,
}: Props): JSX.Element {
  const length = useMemo(() => size - 2 * strokeWidth, [size, strokeWidth])
  const percentage = useMemo(
    () => (isIndeterminate ? 0.25 : (value - minValue) / (maxValue - minValue)),
    [isIndeterminate, value, minValue, maxValue],
  )
  const progressLength = useMemo(
    () => percentage * length,
    [length, percentage],
  )

  return (
    <svg
      width={size}
      height={2 * strokeWidth}
      viewBox={`0 0 ${size} ${2 * strokeWidth}`}
      fill="none"
      strokeWidth={strokeWidth}
      aria-label={ariaLabel}
      id="logo"
    >
      <line
        role="presentation"
        x1={strokeWidth}
        y1={strokeWidth}
        x2={size - strokeWidth}
        y2={strokeWidth}
        stroke={backgroundColor}
      />
      <line
        role="presentation"
        x1={strokeWidth}
        y1={strokeWidth}
        x2={strokeWidth + progressLength}
        y2={strokeWidth}
        stroke={progressColor}
      >
        <animate
          attributeName="stroke"
          attributeType="XML"
          values="navy"
          begin="logo.mouseenter"
          dur="1s"
          restart="whenNotActive"
        />

        {isIndeterminate && (
          <animate
            attributeName="x2"
            attributeType="XML"
            begin="0s"
            dur="2s"
            values={`${strokeWidth};${size - strokeWidth};${strokeWidth}`}
            repeatCount="indefinite"
          />
        )}
      </line>
    </svg>
  )
}

export default ProgressBar
