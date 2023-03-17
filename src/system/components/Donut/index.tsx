import { not } from '@/system/utils/language'
import { useMemo } from 'react'
import styles from './index.module.css'

interface CSSProps extends Record<string, string> {}

interface Props {
  value: number
  fill?: string
  border?: string
  size?: string
  label?: string
}

const Donut = (props: Props): JSX.Element => {
  const {
    value = 90,
    fill = 'currentColor',
    label,
    border = '9px',
    size = '80px',
  } = props

  const gridConfig: CSSProps = useMemo(() => {
    return { '--p': value.toString(), '--c': fill, '--b': border, '--w': size }
  }, [value, fill, border, size])

  return (
    <meter
      min={0}
      max={100}
      value={value}
      style={{ ...gridConfig }}
      className={styles.root}
      data-donut=""
    >
      {label ?? value} {not(label) && '%'}
    </meter>
  )
}

export default Donut
