import { type ComponentProps, type ChangeEvent } from 'react'
import styles from './range.module.css'

interface Props extends ComponentProps<'input'> {
  initial: number
  onChangeValue: (value: number) => void
}

function Range(props: Props): JSX.Element {
  const {
    className,
    initial = 1,
    min = 1,
    max = 100,
    onChangeValue,
    ...rest
  } = props

  const groupClassNames = [className, styles.group].filter(Boolean).join(' ')
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChangeValue(Number(event.target.value))
  }
  return (
    <label className={groupClassNames}>
      <input
        {...rest}
        type="range"
        min={min}
        max={max}
        value={initial}
        onChange={handleChange}
      />
    </label>
  )
}

export default Range
