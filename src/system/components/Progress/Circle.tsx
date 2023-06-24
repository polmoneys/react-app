import { useMemo } from 'react'

interface Props {
  isIndeterminate: boolean
  value: number
  minValue: number
  maxValue: number
  size?: number
  radius?: number
  strokeWidth?: number
  backgroundColor?: string
  progressColor?: string
  ariaLabel?: string
  id: string
}

/*

  <ProgressCircle
        id="ccc"
        size={100}
        isIndeterminate={false}
        value={50}
        minValue={1}
        maxValue={100}
        radius={40}
        strokeWidth={8}
      />
      
*/
function ProgressCircle({
  isIndeterminate,
  value,
  minValue = 0,
  maxValue = 100,
  size = 32,
  radius = 16,
  strokeWidth = 14,
  backgroundColor = '#ddd',
  progressColor = 'red',
  id,
  ariaLabel,
}: Props): JSX.Element {
  const center = useMemo(() => size / 2, [size])
  const r = useMemo(() => radius - strokeWidth, [radius, strokeWidth])
  const c = useMemo(() => 2 * r * Math.PI, [r])
  const percentage = useMemo(
    () => (isIndeterminate ? 0.25 : (value - minValue) / (maxValue - minValue)),
    [isIndeterminate, value, minValue, maxValue],
  )
  const offset = useMemo(() => c - percentage * c, [c, percentage])

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      strokeWidth={strokeWidth}
      aria-label={ariaLabel}
      id={id}
    >
      <circle
        role="presentation"
        cx={center}
        cy={center}
        r={r}
        stroke={backgroundColor}
      />
      <circle
        role="presentation"
        cx={center}
        cy={center}
        r={r}
        stroke={progressColor}
        strokeDasharray={`${c} ${c}`}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${center} ${center})`}
      >
        <animate
          attributeName="stroke"
          attributeType="XML"
          values="navy"
          begin={`${id}.mouseenter`}
          dur="1s"
          restart="whenNotActive"
        />

        {isIndeterminate && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            begin="0s"
            dur="1s"
            from={`0 ${center} ${center}`}
            to={`360 ${center} ${center}`}
            repeatCount="indefinite"
          />
        )}
      </circle>
    </svg>
  )
}

export default ProgressCircle
