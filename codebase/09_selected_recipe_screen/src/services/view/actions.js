import { View } from "../actionTypes"

const setActiveTabId = (newTabId) => {
  return {
    type: View.CHANGE_ACTIVE_TAB_ID,
    newTabId,
  }
}

export {
  setActiveTabId,
}