import { View } from "../actionTypes"

const initialState = {
  activeTabId: "Recipes",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case View.CHANGE_ACTIVE_TAB_ID:
      return { ...state, activeTabId: action.newTabId }
  }

  return state
}

export default reducer