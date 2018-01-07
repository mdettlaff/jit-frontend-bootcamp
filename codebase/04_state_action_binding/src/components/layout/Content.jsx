import React from "react"
import PropTypes from "prop-types"

import RecipesContainer from "features/recipes/components/RecipesContainer"

export default class Content extends React.Component {
  getContentForTab(activeTabId) {
    switch(activeTabId) {
      default:
      case "Recipes": {
        return <RecipesContainer />
        break
      }
      case "Shopping list": {
        return <h5>Shopping list will be here soon...</h5>
        break
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

Content.propTypes = {
  activeTabId: PropTypes.string.isRequired,
}