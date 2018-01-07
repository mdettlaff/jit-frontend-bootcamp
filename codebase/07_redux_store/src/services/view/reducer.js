const initialState = {
  activeTabId: "Recipes",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_ACTIVE_TAB_ID":
      return { ...state, activeTabId: action.newTabId }
    default:
      return state
  }

  return state
}

export default reducer