import { type Dispatch, useReducer } from 'react'
import { type v4 as uuidv4 } from 'uuid'

type Uuid = typeof uuidv4
type Values = string | number | unknown[]
type ObjectLike = Record<string, Values | Uuid>

type State = ObjectLike[]
const initialState: State = []

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
    case 'start':
      return [action.item, ...state]
    case 'end':
      return [...state, action.item]
    case 'removeById':
      return state.filter(item => item.uuid !== action.id)
    case 'removeByIndex':
      return state.filter((_, i) => i !== action.index)
    case 'reset':
      return initialState
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
  useReducer(reducer, props?.initial ?? [])

export default useArray
