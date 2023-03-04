import { type Dispatch, useReducer } from 'react'
import { type v4 as uuidv4 } from 'uuid'

type Uuid = typeof uuidv4
type Values = string | number | unknown[]
type ObjectLike = Record<string, Values | Uuid>

interface State {
  state: ObjectLike[]
  previous: ObjectLike[]
  uuids: any[]
}
const initialState: ObjectLike[] = []

type Action =
  | { type: 'start'; item: ObjectLike }
  | { type: 'end'; item: ObjectLike }
  | {
      type: 'removeById'
      id: string | Uuid
    }
  | {
      type: 'removeByIndex'
      index: number
    }
  | { type: 'reset' }

const reducer = (state: State, action: Action): State => {
  const { type } = action
  switch (type) {
    case 'start': {
      const nextState = [action.item, ...state.state]
      return {
        state: nextState,
        previous: state.state,
        uuids: nextState.map(item => item.id),
      }
    }

    case 'end': {
      const nextState = [...state.state, action.item]
      return {
        state: [...state.state, action.item],
        previous: state.state,
        uuids: nextState.map(item => item.id),
      }
    }

    case 'removeById': {
      const nextState = state.state
        .filter(item => item.uuid !== action.id)
        .filter(item => item.id !== action.id)
      return {
        state: nextState,
        previous: state.state,
        uuids: nextState.map(item => item.id),
      }
    }

    case 'removeByIndex': {
      const nextState = state.state.filter((_, i) => i !== action.index)
      return {
        state: nextState,
        previous: state.state,
        uuids: nextState.map(item => item.id),
      }
    }
    case 'reset':
      return {
        state: initialState,
        previous: [],
        uuids: [],
      }
    default:
      throw new Error(`Unknown action type: ${type as string}`)
    // default:
    //   return state
  }
}

interface Props {
  initial?: ObjectLike[]
}

const useArray = (props?: Props): [State, Dispatch<Action>] =>
  useReducer(reducer, {
    state: props?.initial ?? [],
    previous: [],
    uuids: props?.initial?.map(item => item.id) ?? [],
  })

export default useArray
