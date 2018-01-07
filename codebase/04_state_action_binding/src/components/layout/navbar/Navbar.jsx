import React from "react"

import NavbarEntry from "./NavbarEntry"

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: "Recipes",
    }

    this.setActiveTab = this.setActiveTab.bind(this)
  }

  setActiveTab(newActiveTab) {
    console.log("Setting active tab to:", newActiveTab)
    this.setState({
      activeTab: newActiveTab,
    })
  }

  render() {
    const { activeTab } = this.state

    return (
      <nav>
        <div className="nav-wrapper orange darken-1 z-depth-4">
          <div className="container col s12">
            <a href="#" className="brand-logo"><i className="material-icons">restaurant</i>JIT Cookbook</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <NavbarEntry onTabChange={this.setActiveTab}
                name="Recipes"
                active={activeTab === "Recipes"} />
              <NavbarEntry onTabChange={this.setActiveTab}
                name="Shopping list"
                active={activeTab === "Shopping list"} />
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}