import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import RecipesContainer from "../recipes/RecipesContainer"

class Content extends React.PureComponent {
  getContentForTab(activeTabId) {
    switch (activeTabId) {
      default:
      case "Recipes": {
        return <RecipesContainer />
      }
      case "Shopping list": {
        return <h5>Shopping list will be here soon...</h5>
      }
    }
  }

  render() {
    const { activeTabId } = this.props

    return (
      <div className="container content">
        {this.getContentForTab(activeTabId)}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    activeTabId: store.viewState.activeTabId,
  }
}

Content.propTypes = {
  activeTabId: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Content)