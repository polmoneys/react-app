import { type CSSProperties } from 'react'

interface SparkbarProps {
  values: number[]
  gradient?: string
  chartHeight?: number
}

const Sparkbar = (props: SparkbarProps): JSX.Element => {
  const {
    values,
    gradient = '90deg, var(--gray-600) 3%, var(--error-200), var(--error-100) 100%',
  } = props

  const maxValue = Math.max(...values)

  const getGradientStyles = (value: number): CSSProperties => {
    const inverse = (100 / value) * 100
    const percentageWidth = (value / maxValue) * 100

    const styles = {
      backgroundImage: `linear-gradient(${gradient})`,
      ...(percentageWidth !== 100 && {
        backgroundSize: `${inverse}% 100%`,
      }),
      width: `${percentageWidth}%`,
    }
    return styles
  }

  return (
    <ol>
      {values.map((value, index) => (
        <li key={index} style={getGradientStyles(value)}>
          {value}
        </li>
      ))}
    </ol>
  )
}

Sparkbar.Vertical = (props: SparkbarProps): JSX.Element => {
  const {
    values,
    gradient = '0deg,  var(--gray-600) 3%, var(--error-200), var(--error-100) 100%',
    chartHeight = 200,
  } = props
  const maxValue = Math.max(...values)

  const getGradientStyles = (value: number): CSSProperties => {
    const inverse = (100 / value) * 100
    const normalizedHeight = (value / maxValue) * chartHeight
    const styles = {
      backgroundImage: `linear-gradient(${gradient})`,
      backgroundSize: `${inverse}% 100%`,
      height: `${normalizedHeight}px`,
      flex: 1,
    }
    return styles
  }

  return (
    <ul
      style={{
        height: `${chartHeight}px`,
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      {values.map((value, index) => (
        <li key={index} style={getGradientStyles(value)}>
          <span className="visually-hidden"> {value}</span>
        </li>
      ))}
    </ul>
  )
}

export default Sparkbar
