import { combineReducers, createStore } from "redux"

import viewReducer from "services/view/reducer"

const reducers = combineReducers({
  viewState: viewReducer,
})
const store = createStore(reducers)

export default store