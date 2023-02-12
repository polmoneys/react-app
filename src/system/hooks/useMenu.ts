import { type Dispatch, useReducer } from 'react'

/* 
  null means 'closed'
*/

type Menu = null | 'file' | 'edit' | 'view'

function menuReducer(state: Menu, action: Menu): Menu {
  if (action === state) {
    return null
  }

  return action
}

const useMenu = (): [Menu, Dispatch<Menu>] => useReducer(menuReducer, null)

export default useMenu
