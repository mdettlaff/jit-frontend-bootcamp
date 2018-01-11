import { applyMiddleware, combineReducers, createStore } from "redux"
import { reducer as formReducer} from "redux-form"
import thunk from "redux-thunk"

import recipesReducer from "services/recipes/reducer"
import viewReducer from "services/view/reducer"

const reducers = combineReducers({
  viewState: viewReducer,
  recipesState: recipesReducer,
  form: formReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store