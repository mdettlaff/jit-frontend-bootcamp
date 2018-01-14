import * as React from "react"
import { render } from "react-dom"

import App from "./components/App"
import "./styles.css"

export function run() {
  render(<App />, document.getElementById("app"))
}
