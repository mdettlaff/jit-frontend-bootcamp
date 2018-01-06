import React from "react"

import Content from "./layout/Content"
import Navbar from "./layout/navbar/Navbar"

export default function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Content />
    </div>
  )
}