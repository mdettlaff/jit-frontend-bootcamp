import React from "react"
import { render } from "react-dom"

import FirstComponent from "./components/FirstComponent"
//import { FirstComponent } from "./components/FirstComponent"

console.log("Hello world from Wizard Cat!")

render(<FirstComponent/>, document.getElementById("app"))

