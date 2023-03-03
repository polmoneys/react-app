import { type Dispatch, useReducer } from 'react'

type State = string[]
const initialState: State = []

type Action =
  | {
      type: 'add'
      name: string
    }
  | {
      type: 'remove'
      name: string
    }
  | {
      type: 'clear'
    }

const reducer = (state: State, action: Action): State => {
  const { type } = action

  switch (type) {
    case 'add': {
      if (state.includes(action.name)) {
        return state
      }
      return [...state, action.name]
    }
    case 'remove': {
      return state.filter(d => d !== action.name)
    }
    case 'clear': {
      return []
    }
    default:
      return state
  }
}

interface Props {
  initial?: string[]
}

const useChips = (props?: Props): [State, Dispatch<Action>] =>
  useReducer(reducer, props?.initial ?? initialState)

export default useChips
