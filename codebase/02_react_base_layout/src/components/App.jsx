import React from "react"

import Content from "./layout/Content"
import Footer from "./layout/Footer"
import Navbar from "./layout/navbar/Navbar"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentlyActiveDashboard: "Recipes" }

    this.setAboutTab = this.setAboutTab.bind(this)
  }

  setAboutTab() {
    this.setState({currentlyActiveDashboard: "About"})
  }

  render() {
    return (
      <div className="main-layout wrapper">
        <Navbar />
        <Content currentlyActiveDashboard={this.state.currentlyActiveDashboard} />
        <Footer onActiveTabSet={this.setAboutTab} />
      </div>
    )
  }
}

export default App