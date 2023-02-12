import { type Dispatch, useReducer } from 'react'

/*
  Usage:
  const [value, previousValue, setValue] = useStateWithPrevious('initialValue')
  credits https://thoughtbot.com/blog/custom-react-hooks
*/
const useStateWithPrevious = (
  initialValue: string | boolean,
): [string | boolean, string | boolean, Dispatch<string | boolean>] => {
  const reducer = (
    state: Record<'value' | 'previousValue', string | boolean>,
    value: string | boolean,
  ): {
    value: string | boolean
    previousValue: string | boolean
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
