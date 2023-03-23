import { type Reducer, useReducer, useState, type Dispatch } from 'react'

interface UseUncontrolledResult<T> {
  key: number
  value: T
  onValueChange: (newValue: T) => void
  reset: Dispatch<null>
}

function useUncontrolled<T>(defaultValue: T): UseUncontrolledResult<T> {
  const [value, setValue] = useState<T>(defaultValue)
  const [key, reset] = useReducer<Reducer<number, null>>(c => c + 1, 0)

  const handleSwitchValueChange = (newValue: T): void => {
    setValue(newValue)
  }

  return {
    key,
    value,
    onValueChange: handleSwitchValueChange,
    reset,
  }
}

export default useUncontrolled
