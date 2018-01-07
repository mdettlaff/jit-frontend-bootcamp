import React from "react"

import Content from "./layout/Content"
import Footer from "./layout/Footer"
import Navbar from "./layout/navbar/Navbar"

export default class App extends React.PureComponent {
  render() {
    /* Not possible in react 16> */
    return [
      <Navbar key="navbar" />,
      <Content key="content" />,
      <Footer key="footer" />,
    ]
  }
}