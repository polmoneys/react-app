import { type Dispatch, useReducer } from 'react'

type State = Set<string>
const initialState: State = new Set()

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
      if (state.has(action.name)) {
        return state
      }
      return new Set(state).add(action.name)
    }
    case 'remove': {
      const nextState = new Set(state)
      nextState.delete(action.name)
      return nextState
    }
    case 'clear': {
      return new Set()
    }
    default:
      return state
  }
}

interface Props {
  initial?: string[]
}

const useChips = (props?: Props): [State, Dispatch<Action>] =>
  useReducer(reducer, new Set(props?.initial ?? initialState))

export default useChips
