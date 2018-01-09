import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

import App from "./components/App"
import style from "./styles.css"
import store from "./store.js"

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
)