import { type Dispatch, type Reducer, useReducer } from 'react'

/*


Usage: 

interface SettingsMenu {
  account: string
  services: string
  contact: string
}

function Settings() {
  const [openMenu, dispatchMenu] = useMenu<keyof SettingsMenu>()

  return (
    <div>
      <button onClick={() => dispatchMenu('account')}>Account</button>
      <button onClick={() => dispatchMenu('services')}>Services</button>
      <button onClick={() => dispatchMenu('contact')}>Contact</button>

      {openMenu && (
        <div>
          {openMenu === 'account' && <p>Account settings</p>}
          {openMenu === 'services' && <p>Services settings</p>}
          {openMenu === 'contact' && <p>Contact settings</p>}
        </div>
      )}
    </div>
  )
}


*/

type Menu<T extends string> = null | T

function menuReducer<T extends string>(
  state: Menu<T> = null,
  action: Menu<T>,
): Menu<T> {
  if (action === state) {
    return null
  }

  return action
}

const useMenu = <T extends string>(): [Menu<T>, Dispatch<Menu<T>>] =>
  useReducer<Reducer<Menu<T>, Menu<T>>>(menuReducer, null)

export default useMenu
