import { useState, type ChangeEvent, type KeyboardEvent, Fragment } from 'react'
// import Field from './Field'

interface Props<T> {
  row: T
  label: string
  value: string | number
  setValue: (row: T) => void
}

function CellEditable<T extends Record<string, any>>(
  props: Props<T>,
): JSX.Element {
  const { row, label, value, setValue } = props

  const [editingValue, setEditingValue] = useState(value)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditingValue(event.target.value)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      ;(event.target as HTMLInputElement).blur()
    }
  }

  const onBlur = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim() === '') return
    setValue({
      ...row,
      [label]: event.target.value,
    })
  }
  return (
    <Fragment></Fragment>
    // <Field
    //   className="rp-editable"
    //   label={label}
    //   name={label}
    //   value={editingValue}
    //   onChange={onChange}
    //   onKeyDown={onKeyDown}
    //   onBlur={onBlur}
    // />
  )
}

export default CellEditable
