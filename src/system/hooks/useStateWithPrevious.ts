import { type Dispatch, useReducer } from 'react'

/*
  Usage:
  const [value, previousValue, setValue] = useStateWithPrevious('initialValue')
  credits https://thoughtbot.com/blog/custom-react-hooks
*/

type Values = string | boolean

const useStateWithPrevious = (
  initialValue: Values,
): [Values, Values, Dispatch<Values>] => {
  const reducer = (
    state: Record<'value' | 'previousValue', Values>,
    value: Values,
  ): {
    value: Values
    previousValue: Values
  } => ({
    value,
    previousValue: state.value,
  })

  const [{ value, previousValue }, setValue] = useReducer(reducer, {
    value: initialValue,
    previousValue: typeof initialValue === 'string' ? '' : false,
  })

  return [value, previousValue, setValue]
}

export default useStateWithPrevious
