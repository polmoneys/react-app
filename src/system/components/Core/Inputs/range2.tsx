import { useState, useEffect, type ChangeEvent } from 'react'
import styles from './range2.module.css'

interface RangeMultiProps {
  min: number
  max: number
  initialMin: number
  initialMax: number
  onChange?: (min: number, max: number) => void
}

const RangeMulti = ({
  min,
  max,
  initialMin,
  initialMax,
  onChange,
}: RangeMultiProps): JSX.Element => {
  const [minVal, setMinVal] = useState(initialMin)
  const [maxVal, setMaxVal] = useState(initialMax)

  const updateMinVal = (event: ChangeEvent<HTMLInputElement>): void => {
    const val = parseInt(event.target.value, 10)
    setMinVal(val < maxVal ? val : maxVal)
  }

  const updateMaxVal = (event: ChangeEvent<HTMLInputElement>): void => {
    const val = parseInt(event.target.value, 10)
    setMaxVal(val > minVal ? val : minVal)
  }

  useEffect(() => {
    if (onChange == null) return
    console.log({ minVal, maxVal })
    onChange?.(minVal, maxVal)
  }, [minVal, maxVal, onChange])

  const css: Record<string, string | number> = {
    '--minVal': minVal,
    '--maxVal': maxVal,
    '--minLimit': min,
    '--maxLimit': max,
  }
  return (
    <div className={styles.group} style={css}>
      <input
        type="range"
        // id="min"
        min={min}
        max={max}
        step="1"
        value={minVal}
        onChange={updateMinVal}
      />
      <input
        type="range"
        //  id="max"
        min={min}
        max={max}
        step="1"
        value={maxVal}
        onChange={updateMaxVal}
      />
    </div>
  )
}

export default RangeMulti
