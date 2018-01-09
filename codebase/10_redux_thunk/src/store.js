import { combineReducers, createStore } from "redux"

import recipesReducer from "services/recipes/reducer"
import viewReducer from "services/view/reducer"

const reducers = combineReducers({
  viewState: viewReducer,
  recipesState: recipesReducer,
})
const store = createStore(reducers)

export default store