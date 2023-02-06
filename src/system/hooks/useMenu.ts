import { useReducer } from "react";

// null means closed
type Menu = null | "file" | "edit" | "view";

function menuReducer(state: Menu, action: Menu) {
  if (action === state) {
    return null;
  }

  return action;
}

const useMenu = () => useReducer(menuReducer, null);

export default useMenu;
