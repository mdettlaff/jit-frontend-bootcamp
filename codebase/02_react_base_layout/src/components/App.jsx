import React from "react"

import Content from "./layout/Content"
import Footer from "./layout/Footer"
import Navbar from "./layout/navbar/Navbar"

export default App = (props) => {
  return (
    <div className="main-layout wrapper">
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}