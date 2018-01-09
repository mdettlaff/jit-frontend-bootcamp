import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import PropTypes from "prop-types"

import NavbarEntry from "./NavbarEntry"
import * as ViewActions from "services/view/actions"

class Navbar extends React.PureComponent {
  render() {
    const { activeTabId } = this.props

    return (
      <nav>
        <div className="nav-wrapper orange darken-1 z-depth-4">
          <div className="container col s12">
            <a href="#" className="brand-logo"><i className="material-icons">restaurant</i>JIT Cookbook</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <NavbarEntry name="Recipes"
                active={activeTabId === "Recipes"}
                onTabChange={this.props.setActiveTab} />
              <NavbarEntry name="Shopping list"
                active={activeTabId === "Shopping list"}
                onTabChange={this.props.setActiveTab} />
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    activeTabId: store.viewState.activeTabId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setActiveTab: ViewActions.setActiveTabId }, dispatch)
  /* Alternatively:
   * return {
   *   setActiveTab: (newTabId) => {
   *     dispatch(ViewActions.setActiveTabId(newTabId))
   *   }
   * }
   */
}

Navbar.propTypes = {
  activeTabId: PropTypes.string.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)