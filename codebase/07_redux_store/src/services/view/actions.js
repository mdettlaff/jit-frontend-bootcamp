const setActiveTabId = (newTabId) => {
  return {
    type: "CHANGE_ACTIVE_TAB_ID",
    newTabId,
  }
}

export {
  setActiveTabId,
}